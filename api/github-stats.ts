/**
 * Aggregates GitHub stats for kleidsonadesign + korvenlab.
 * With GITHUB_TOKEN (repo scope / fine-grained Contents:Read on private repos),
 * includes private repositories the token can access.
 * Never returns private repo names — only aggregates.
 */

const PERSONAL = "kleidsonadesign";
const KORVEN = "korvenlab";
const OWNERS = new Set([PERSONAL, KORVEN]);

type GhRepo = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  fork: boolean;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  owner: { login: string };
};

type LangStat = {
  name: string;
  count: number;
  pct: number;
};

export type GithubStatsPayload = {
  /** Total non-fork repos (public + private when token present). */
  publicRepos: number;
  privateRepos: number;
  followers: number;
  totalStars: number;
  totalForks: number;
  languages: LangStat[];
  korvenRepos: number;
  personalRepos: number;
  personalCommits: number;
  korvenCommits: number;
  totalCommits: number;
  includesPrivate: boolean;
};

function tokens(): string[] {
  return [process.env.GITHUB_TOKEN, process.env.GITHUB_TOKEN_KORVEN].filter(
    (t): t is string => Boolean(t && t.trim()),
  );
}

async function gh<T>(
  path: string,
  token?: string,
  accept = "application/vnd.github+json",
): Promise<T> {
  const headers: Record<string, string> = {
    Accept: accept,
    "User-Agent": "ka-dev-portfolio",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`GitHub ${res.status} ${path}: ${body.slice(0, 180)}`);
  }
  return res.json() as Promise<T>;
}

async function listAccessibleRepos(token: string): Promise<GhRepo[]> {
  const all: GhRepo[] = [];
  for (let page = 1; page <= 5; page++) {
    const batch = await gh<GhRepo[]>(
      `/user/repos?per_page=100&page=${page}&affiliation=owner,collaborator,organization_member&visibility=all&sort=updated`,
      token,
    );
    if (!batch.length) break;
    all.push(...batch);
    if (batch.length < 100) break;
  }
  return all;
}

async function listPublicRepos(owner: string): Promise<GhRepo[]> {
  return gh<GhRepo[]>(
    `/users/${owner}/repos?per_page=100&sort=updated&type=owner`,
  );
}

async function countAuthorCommits(author: string, token?: string): Promise<number> {
  try {
    const data = await gh<{ total_count: number }>(
      `/search/commits?q=author:${author}&per_page=1`,
      token,
      "application/vnd.github.cloak-preview+json",
    );
    return data.total_count ?? 0;
  } catch {
    return 0;
  }
}

function aggregate(repos: GhRepo[]) {
  const own = repos.filter((r) => !r.fork && OWNERS.has(r.owner.login));
  const byId = new Map<number, GhRepo>();
  for (const r of own) byId.set(r.id, r);
  const unique = [...byId.values()];

  const langCount: Record<string, number> = {};
  let totalStars = 0;
  let totalForks = 0;
  let privateRepos = 0;
  let personalRepos = 0;
  let korvenRepos = 0;

  for (const repo of unique) {
    totalStars += repo.stargazers_count || 0;
    totalForks += repo.forks_count || 0;
    if (repo.private) privateRepos += 1;
    if (repo.owner.login === PERSONAL) personalRepos += 1;
    if (repo.owner.login === KORVEN) korvenRepos += 1;
    if (repo.language) {
      langCount[repo.language] = (langCount[repo.language] || 0) + 1;
    }
  }

  const totalLangRepos = Object.values(langCount).reduce((a, b) => a + b, 0) || 1;
  const languages = Object.entries(langCount)
    .map(([name, count]) => ({
      name,
      count,
      pct: Math.round((count / totalLangRepos) * 100),
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return {
    unique,
    languages,
    totalStars,
    totalForks,
    privateRepos,
    personalRepos,
    korvenRepos,
    publicRepos: unique.length - privateRepos,
  };
}

export async function buildGithubStats(): Promise<GithubStatsPayload> {
  const authTokens = tokens();
  const primary = authTokens[0];

  const [personalUser, korvenUser] = await Promise.all([
    gh<{ public_repos: number; followers: number }>(`/users/${PERSONAL}`, primary),
    gh<{ public_repos: number; followers: number }>(`/users/${KORVEN}`, primary),
  ]);

  let repos: GhRepo[] = [];
  let includesPrivate = false;

  if (authTokens.length) {
    const batches = await Promise.all(authTokens.map((t) => listAccessibleRepos(t)));
    repos = batches.flat();
    includesPrivate = repos.some((r) => r.private && OWNERS.has(r.owner.login));
  } else {
    const [personalRepos, korvenRepos] = await Promise.all([
      listPublicRepos(PERSONAL),
      listPublicRepos(KORVEN),
    ]);
    repos = [...personalRepos, ...korvenRepos];
  }

  const agg = aggregate(repos);

  const [personalCommits, korvenCommits] = await Promise.all([
    countAuthorCommits(PERSONAL, primary),
    countAuthorCommits(KORVEN, primary),
  ]);

  return {
    // Field kept as publicRepos for client compatibility = total counted repos.
    publicRepos: agg.unique.length || (personalUser.public_repos ?? 0) + (korvenUser.public_repos ?? 0),
    privateRepos: agg.privateRepos,
    followers: (personalUser.followers ?? 0) + (korvenUser.followers ?? 0),
    totalStars: agg.totalStars,
    totalForks: agg.totalForks,
    languages: agg.languages,
    personalRepos: agg.personalRepos,
    korvenRepos: agg.korvenRepos,
    personalCommits,
    korvenCommits,
    totalCommits: personalCommits + korvenCommits,
    includesPrivate,
  };
}

export async function GET() {
  try {
    const stats = await buildGithubStats();
    return Response.json(stats, {
      headers: {
        "Cache-Control": "s-maxage=600, stale-while-revalidate=3600",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json(
      { error: "Failed to load GitHub stats", detail: message },
      { status: 502 },
    );
  }
}
