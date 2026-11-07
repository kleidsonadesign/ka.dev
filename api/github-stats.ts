/**
 * Aggregates GitHub stats for kleidsonadesign + korvenlab.
 *
 * Always merges public repos from both accounts.
 * With GITHUB_TOKEN / GITHUB_TOKEN_KORVEN (classic `repo` scope, or fine-grained
 * Contents: Read on private repos), also merges private repos the token can see.
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
  /** Whether any GITHUB_TOKEN* env is present (never the secret itself). */
  tokenConfigured: boolean;
  /** Login of the authenticated token owner, if any. */
  tokenUser: string | null;
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

async function listPublicRepos(owner: string, token?: string): Promise<GhRepo[]> {
  const all: GhRepo[] = [];
  for (let page = 1; page <= 3; page++) {
    const batch = await gh<GhRepo[]>(
      `/users/${owner}/repos?per_page=100&page=${page}&sort=updated&type=owner`,
      token,
    );
    if (!batch.length) break;
    all.push(...batch);
    if (batch.length < 100) break;
  }
  return all;
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
  };
}

export async function buildGithubStats(): Promise<GithubStatsPayload> {
  const authTokens = tokens();
  const primary = authTokens[0];
  const tokenConfigured = authTokens.length > 0;

  const [personalUser, korvenUser, personalPublic, korvenPublic] = await Promise.all([
    gh<{ public_repos: number; followers: number }>(`/users/${PERSONAL}`, primary),
    gh<{ public_repos: number; followers: number }>(`/users/${KORVEN}`, primary),
    listPublicRepos(PERSONAL, primary),
    listPublicRepos(KORVEN, primary),
  ]);

  let authenticated: GhRepo[] = [];
  let tokenUser: string | null = null;

  if (primary) {
    const [authRepos, me] = await Promise.all([
      Promise.all(authTokens.map((t) => listAccessibleRepos(t))).then((b) => b.flat()),
      gh<{ login: string }>("/user", primary).catch(() => null),
    ]);
    authenticated = authRepos;
    tokenUser = me?.login ?? null;
  }

  // Public from both profiles + anything the token can see (incl. private).
  const repos = [...personalPublic, ...korvenPublic, ...authenticated];
  const includesPrivate = authenticated.some(
    (r) => r.private && OWNERS.has(r.owner.login),
  );

  const agg = aggregate(repos);

  const [personalCommits, korvenCommits] = await Promise.all([
    countAuthorCommits(PERSONAL, primary),
    countAuthorCommits(KORVEN, primary),
  ]);

  return {
    publicRepos: agg.unique.length,
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
    tokenConfigured,
    tokenUser,
  };
}

export async function GET() {
  try {
    const stats = await buildGithubStats();
    return Response.json(stats, {
      headers: {
        "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
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
