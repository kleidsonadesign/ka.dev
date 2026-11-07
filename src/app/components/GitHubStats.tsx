import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "../../i18n/LanguageContext";
import { SIGNAL_SLIDES } from "../data/signalSlides";
import { useDesktopJourney, usePinnedJourney } from "../hooks/usePinnedJourney";
import type { SceneId } from "../lib/scenes";

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
  return (await res.json()) as ProfileStats;
}

function streakSrc(user: string) {
  return `https://streak-stats.demolab.com/?user=${user}&hide_border=true&background=050505&stroke=1a1a1a&ring=2b5bff&fire=2b5bff&currStreakLabel=f7f7f8&sideLabels=a1a1aa&dates=a1a1aa&currStreakNum=f7f7f8&sideNums=a1a1aa`;
}

function formatNum(n: number) {
  return n.toLocaleString("en-US");
}

function SignalSlideCard({
  slide,
  index,
  language,
  stats,
  labels,
}: {
  slide: (typeof SIGNAL_SLIDES)[number];
  index: number;
  language: "pt" | "en";
  stats: ProfileStats | null;
  labels: {
    personal: string;
    korven: string;
    commits: string;
    repos: string;
    stars: string;
    followers: string;
    languages: string;
    loading: string;
    error: string;
  };
  loading: boolean;
  error: boolean;
}) {
  const isSignal = slide.id === "signal";
  const metrics = stats
    ? [
        { label: labels.commits, value: formatNum(stats.totalCommits) },
        { label: labels.repos, value: formatNum(stats.publicRepos) },
        { label: labels.stars, value: formatNum(stats.totalStars) },
        { label: labels.followers, value: formatNum(stats.followers) },
      ]
    : [];

  return (
    <article
      className="ka-work-panel ka-work-slide-panel h-full"
      style={{
        background: `radial-gradient(ellipse at 85% 0%, ${slide.accent}, transparent 48%), linear-gradient(160deg, rgba(10,12,20,0.55), rgba(5,5,5,0.28))`,
      }}
    >
      <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="ka-eyebrow text-[var(--ka-cobalt)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-white/20" />
            <span className="ka-eyebrow text-white/45">{slide.eyebrow[language]}</span>
          </div>

          <h3 className="ka-display text-[clamp(2rem,4.4vw,3.4rem)] text-white mb-4">
            {slide.title[language]}
          </h3>
          <p className="text-white/65 leading-relaxed mb-6 text-base md:text-lg max-w-xl">
            {slide.summary[language]}
          </p>

          <ul className="space-y-2.5 mb-7">
            {slide.points[language].map((item) => (
              <li key={item} className="text-sm text-white/55 flex gap-2">
                <span className="text-[var(--ka-cobalt)] mt-0.5">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {slide.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/12 bg-black/30 px-3 py-1.5 text-xs tracking-wide text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="min-h-[240px]">
          {isSignal ? (
            <div className="space-y-5">
              {stats ? (
                <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
                  {metrics.map((m) => (
                    <div key={m.label} className="bg-[#07070a]/80 p-4 md:p-5">
                      <p className="ka-eyebrow mb-2 text-[10px]">{m.label}</p>
                      <p className="ka-display text-[clamp(1.6rem,3vw,2.4rem)] text-white">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="ka-eyebrow text-white/40 py-10 text-center">
                  {labels.loading}
                </p>
              )}

              <div className="flex flex-col gap-2">
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
                    <span className="ka-display text-xl border-b border-white/15 group-hover:border-[var(--ka-cobalt)] transition-colors pb-0.5">
                      @{account}
                    </span>
                    <ArrowUpRight size={16} className="text-[var(--ka-cobalt)]" />
                  </a>
                ))}
              </div>

              {stats && (
                <p className="text-xs text-white/40 pt-2 border-t border-white/10">
                  {labels.personal}: {stats.personalCommits} commits · {labels.korven}:{" "}
                  {stats.korvenCommits} commits
                </p>
              )}
            </div>
          ) : slide.id === "ops" && stats ? (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="ka-eyebrow text-[var(--ka-cobalt)]">API</span>
                <span className="h-px flex-1 bg-white/12" />
                <span className="ka-eyebrow">{labels.languages}</span>
              </div>
              <div className="space-y-4">
                {stats.languages.slice(0, 5).map((lang) => (
                  <div key={lang.name}>
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <span className="ka-display text-lg md:text-xl text-white">
                        {lang.name}
                      </span>
                      <span className="font-mono text-xs text-white/40 tracking-widest">
                        {String(lang.pct).padStart(2, "0")}%
                      </span>
                    </div>
                    <div className="h-[2px] bg-white/10 overflow-hidden">
                      <div
                        className="h-full"
                        style={{
                          width: `${lang.pct}%`,
                          background: LANG_COLORS[lang.name] || "#2b5bff",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-black/25 p-6 md:p-8 h-full min-h-[260px] flex flex-col justify-between">
              <p className="ka-eyebrow text-white/35 mb-6">Focus</p>
              <div className="space-y-3">
                {slide.stack.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center justify-between gap-4 border-b border-white/8 pb-3"
                  >
                    <span className="ka-display text-2xl md:text-3xl text-white">{tag}</span>
                    <span className="h-2 w-2 rounded-full bg-[var(--ka-cobalt)]" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function GitHubStats() {
  const { t, language } = useTranslation();
  const [stats, setStats] = useState<ProfileStats | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const desktopJourney = useDesktopJourney();
  const slides = SIGNAL_SLIDES;

  const sceneForIndex = useCallback(
    (index: number) => slides[index]?.sceneId as SceneId,
    [slides],
  );

  const { containerRef, x, activeIndex, slideWidth } = usePinnedJourney({
    enabled: desktopJourney,
    count: slides.length,
    sceneForIndex,
  });

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

  const slideProps = {
    language,
    stats,
    labels,
    loading,
    error,
  };

  return (
    <section id="github" className="relative">
      <div className="ka-container pt-[clamp(4.5rem,10vw,7.5rem)]">
        <motion.div
          data-scene="github"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14 max-w-3xl"
        >
          <p className="ka-eyebrow mb-4 text-[var(--ka-cobalt)]">{t.stats.eyebrow}</p>
          <h2 className="ka-display text-[clamp(2.4rem,6vw,4.4rem)] text-white mb-5">
            {t.stats.title}
          </h2>
          <p className="text-white/55 text-base md:text-lg leading-relaxed">
            {t.stats.subtitle}
          </p>
        </motion.div>
      </div>

      {desktopJourney ? (
        <div
          ref={containerRef}
          className="ka-work-journey relative"
          data-scene-rail=""
          style={{ height: `${slides.length * 100}vh` }}
        >
          <div className="ka-work-pin sticky top-0 h-[100svh] overflow-hidden">
            <motion.div
              className="ka-work-track flex h-full will-change-transform"
              style={{ x, width: slideWidth * slides.length }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className="ka-work-slide relative h-full shrink-0"
                  style={{ width: slideWidth, minWidth: slideWidth }}
                >
                  <div className="ka-container h-full flex items-center py-24">
                    <div className="w-full max-h-[calc(100svh-8rem)] overflow-hidden">
                      <SignalSlideCard
                        slide={slide}
                        index={index}
                        {...slideProps}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="pointer-events-none absolute bottom-8 left-0 right-0 z-10">
              <div className="ka-container flex items-center justify-between gap-4">
                <p className="ka-eyebrow text-white/45">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")} ·{" "}
                  {slides[activeIndex]?.eyebrow[language]}
                </p>
                <div className="flex items-center gap-2">
                  {slides.map((slide, index) => (
                    <span
                      key={slide.id}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        index === activeIndex
                          ? "w-10 bg-[var(--ka-cobalt)]"
                          : "w-3 bg-white/25"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="ka-container space-y-10 md:space-y-14 pb-4">
          {slides.map((slide, index) => (
            <div key={slide.id} data-scene={slide.sceneId}>
              <SignalSlideCard slide={slide} index={index} {...slideProps} />
            </div>
          ))}
        </div>
      )}

      <div className="ka-container pb-[clamp(4.5rem,10vw,7.5rem)]">
        <div className="mt-10 md:mt-14 pt-10 border-t border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <span className="ka-eyebrow text-[var(--ka-cobalt)]">07</span>
            <span className="h-px flex-1 bg-white/12" />
            <span className="ka-eyebrow">{t.stats.streak}</span>
          </div>
          <p className="text-xs text-white/35 mb-4">{labels.streakNote}</p>
          {error && !loading && (
            <p className="text-white/50 text-sm mb-6">{labels.error}</p>
          )}
          <div className="grid md:grid-cols-2 gap-4">
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
    </section>
  );
}
