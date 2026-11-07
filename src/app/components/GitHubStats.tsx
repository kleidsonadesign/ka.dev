import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "../../i18n/LanguageContext";

const PERSONAL = "kleidsonadesign";
const KORVEN = "korvenlab";
const ACCOUNTS = [PERSONAL, KORVEN] as const;

type LangStat = {
  name: string;
  count: number;
  pct: number;
};

type ProfileStats = {
  publicRepos: number;
  followers: number;
  totalStars: number;
  totalForks: number;
  languages: LangStat[];
  korvenRepos: number;
  personalRepos: number;
  personalCommits: number;
  korvenCommits: number;
  totalCommits: number;
};

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  Dart: "#00B4AB",
  Vue: "#41b883",
  Dockerfile: "#384d54",
  PLpgSQL: "#336791",
};

async function loadProfileStats(): Promise<ProfileStats> {
  const res = await fetch("/api/github-stats");
  if (!res.ok) throw new Error(`stats ${res.status}`);
  const data = (await res.json()) as ProfileStats;
  return data;
}

function streakSrc(user: string) {
  return `https://streak-stats.demolab.com/?user=${user}&hide_border=true&background=050505&stroke=1a1a1a&ring=2b5bff&fire=2b5bff&currStreakLabel=f7f7f8&sideLabels=a1a1aa&dates=a1a1aa&currStreakNum=f7f7f8&sideNums=a1a1aa`;
}

function formatNum(n: number) {
  return n.toLocaleString("en-US");
}

export function GitHubStats() {
  const { t, language } = useTranslation();
  const [stats, setStats] = useState<ProfileStats | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    loadProfileStats()
      .then((data) => {
        if (alive) {
          setStats(data);
          setError(false);
        }
      })
      .catch(() => {
        if (alive) setError(true);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  const labels =
    language === "pt"
      ? {
          commits: "Commits",
          repos: "Repos",
          stars: "Stars",
          followers: "Followers",
          loading: "Sincronizando com o GitHub…",
          error: "API indisponível agora — abra os perfis abaixo.",
          personal: "Pessoal",
          korven: "Korven Lab",
          languages: "Linguagens nos repos",
          streakNote: "Autor Korven Lab → streak korvenlab",
        }
      : {
          commits: "Commits",
          repos: "Repos",
          stars: "Stars",
          followers: "Followers",
          loading: "Syncing with GitHub…",
          error: "API unavailable — open the profiles below.",
          personal: "Personal",
          korven: "Korven Lab",
          languages: "Languages across repos",
          streakNote: "Korven Lab author → korvenlab streak",
        };

  const metrics = stats
    ? [
        { label: labels.commits, value: formatNum(stats.totalCommits) },
        { label: labels.repos, value: formatNum(stats.publicRepos) },
        { label: labels.stars, value: formatNum(stats.totalStars) },
        { label: labels.followers, value: formatNum(stats.followers) },
      ]
    : [];

  return (
    <section id="github" className="ka-section relative overflow-hidden">
      <div aria-hidden className="ka-watermark absolute -right-6 top-8 text-[26vw] opacity-90">
        GIT
      </div>

      <div className="ka-container relative">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-end mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="ka-eyebrow mb-4 text-[var(--ka-cobalt)]">{t.stats.eyebrow}</p>
            <h2 className="ka-display text-[clamp(2.4rem,6vw,4.4rem)] text-white mb-5">
              {t.stats.title}
            </h2>
            <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-md">
              {t.stats.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="flex flex-col gap-3 lg:items-end"
          >
            {ACCOUNTS.map((account) => (
              <a
                key={account}
                href={`https://github.com/${account}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-white"
                data-cursor="hover"
              >
                <span className="ka-eyebrow text-white/35 group-hover:text-[var(--ka-cobalt)] transition-colors">
                  {account === PERSONAL ? labels.personal : labels.korven}
                </span>
                <span className="ka-display text-2xl md:text-3xl border-b border-white/15 group-hover:border-[var(--ka-cobalt)] transition-colors pb-1">
                  @{account}
                </span>
                <ArrowUpRight size={18} className="text-[var(--ka-cobalt)]" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="ka-editorial-panel"
        >
          {loading && (
            <p className="ka-eyebrow text-white/40 py-16 text-center">{labels.loading}</p>
          )}
          {error && !loading && (
            <p className="text-white/50 py-16 text-center text-sm">{labels.error}</p>
          )}

          {stats && !loading && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-12">
                {metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ delay: i * 0.07 }}
                    className="bg-[#07070a] p-5 md:p-7"
                  >
                    <p className="ka-eyebrow mb-3 text-[10px]">{m.label}</p>
                    <p className="ka-display text-[clamp(2rem,4vw,3.2rem)] text-white tracking-tight">
                      {m.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="ka-eyebrow text-[var(--ka-cobalt)]">01</span>
                    <span className="h-px flex-1 bg-white/12" />
                    <span className="ka-eyebrow">{labels.languages}</span>
                  </div>

                  <div className="space-y-5">
                    {stats.languages.map((lang, i) => (
                      <div key={lang.name}>
                        <div className="flex items-baseline justify-between gap-4 mb-2">
                          <span className="ka-display text-xl md:text-2xl text-white">
                            {lang.name}
                          </span>
                          <span className="font-mono text-xs text-white/40 tracking-widest">
                            {String(lang.pct).padStart(2, "0")}%
                          </span>
                        </div>
                        <div className="h-[2px] bg-white/10 overflow-hidden">
                          <motion.div
                            className="h-full"
                            style={{ background: LANG_COLORS[lang.name] || "#2b5bff" }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${lang.pct}%` }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{
                              duration: 0.9,
                              delay: i * 0.05,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/45">
                    <span>
                      <span className="text-white/25">{labels.personal} · </span>
                      {stats.personalCommits} commits / {stats.personalRepos} repos
                    </span>
                    <span>
                      <span className="text-white/25">{labels.korven} · </span>
                      {stats.korvenCommits} commits / {stats.korvenRepos} repos
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="ka-eyebrow text-[var(--ka-cobalt)]">02</span>
                    <span className="h-px flex-1 bg-white/12" />
                    <span className="ka-eyebrow">{t.stats.streak}</span>
                  </div>
                  <p className="text-xs text-white/35 mb-4">{labels.streakNote}</p>
                  <div className="space-y-4">
                    {[
                      { user: PERSONAL, label: labels.personal },
                      { user: KORVEN, label: labels.korven },
                    ].map((item) => (
                      <div key={item.user} className="ka-streak-slot">
                        <p className="ka-eyebrow text-[10px] mb-2 px-1">{item.label}</p>
                        <img
                          src={streakSrc(item.user)}
                          alt={`Streak ${item.label}`}
                          className="w-full h-auto opacity-90"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
