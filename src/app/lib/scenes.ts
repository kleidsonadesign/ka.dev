export type SceneId =
  | "hero"
  | "work"
  | "papufy"
  | "wagoobot"
  | "shopwagoo"
  | "github"
  | "gh-typescript"
  | "gh-postgres"
  | "gh-distributed"
  | "gh-fintech"
  | "gh-ops"
  | "toolkit"
  | "trajetoria"
  | "certificacoes"
  | "contato";

export type SceneTheme = {
  id: SceneId;
  bg: string;
  glow: string;
  glowAlt: string;
  name: string;
  ink: string;
};

export const SCENES: Record<SceneId, SceneTheme> = {
  hero: {
    id: "hero",
    bg: "#030303",
    glow: "rgba(43, 91, 255, 0.38)",
    glowAlt: "rgba(255, 255, 255, 0.1)",
    name: "KA",
    ink: "#f7f7f8",
  },
  work: {
    id: "work",
    bg: "#070b14",
    glow: "rgba(43, 91, 255, 0.28)",
    glowAlt: "rgba(255, 255, 255, 0.08)",
    name: "WORK",
    ink: "#f7f7f8",
  },
  papufy: {
    id: "papufy",
    bg: "#06101f",
    glow: "rgba(43, 91, 255, 0.5)",
    glowAlt: "rgba(120, 170, 255, 0.16)",
    name: "PAPUFY",
    ink: "#eef3ff",
  },
  wagoobot: {
    id: "wagoobot",
    bg: "#06140f",
    glow: "rgba(46, 180, 110, 0.28)",
    glowAlt: "rgba(255, 255, 255, 0.08)",
    name: "WAGOO",
    ink: "#eef8f2",
  },
  shopwagoo: {
    id: "shopwagoo",
    bg: "#120d08",
    glow: "rgba(232, 168, 74, 0.22)",
    glowAlt: "rgba(255, 255, 255, 0.07)",
    name: "SHOPWAG",
    ink: "#fff6eb",
  },
  github: {
    id: "github",
    bg: "#08080e",
    glow: "rgba(255, 255, 255, 0.12)",
    glowAlt: "rgba(43, 91, 255, 0.22)",
    name: "SIGNAL",
    ink: "#f7f7f8",
  },
  "gh-typescript": {
    id: "gh-typescript",
    bg: "#071018",
    glow: "rgba(49, 120, 198, 0.42)",
    glowAlt: "rgba(255, 255, 255, 0.08)",
    name: "TS",
    ink: "#eaf3ff",
  },
  "gh-postgres": {
    id: "gh-postgres",
    bg: "#061018",
    glow: "rgba(51, 103, 145, 0.48)",
    glowAlt: "rgba(255, 255, 255, 0.07)",
    name: "POSTGRES",
    ink: "#e8f2fa",
  },
  "gh-distributed": {
    id: "gh-distributed",
    bg: "#070b16",
    glow: "rgba(43, 91, 255, 0.4)",
    glowAlt: "rgba(255, 255, 255, 0.08)",
    name: "SYSTEMS",
    ink: "#eef2ff",
  },
  "gh-fintech": {
    id: "gh-fintech",
    bg: "#06120e",
    glow: "rgba(46, 180, 110, 0.3)",
    glowAlt: "rgba(255, 255, 255, 0.07)",
    name: "FINTECH",
    ink: "#eaf8f0",
  },
  "gh-ops": {
    id: "gh-ops",
    bg: "#100d08",
    glow: "rgba(232, 168, 74, 0.26)",
    glowAlt: "rgba(255, 255, 255, 0.07)",
    name: "OPS",
    ink: "#fff6eb",
  },
  toolkit: {
    id: "toolkit",
    bg: "#05070c",
    glow: "rgba(43, 91, 255, 0.3)",
    glowAlt: "rgba(255, 255, 255, 0.08)",
    name: "STACK",
    ink: "#f7f7f8",
  },
  trajetoria: {
    id: "trajetoria",
    bg: "#090a10",
    glow: "rgba(43, 91, 255, 0.24)",
    glowAlt: "rgba(255, 255, 255, 0.07)",
    name: "PATH",
    ink: "#f7f7f8",
  },
  certificacoes: {
    id: "certificacoes",
    bg: "#07090c",
    glow: "rgba(43, 91, 255, 0.2)",
    glowAlt: "rgba(255, 255, 255, 0.08)",
    name: "CERTS",
    ink: "#f7f7f8",
  },
  contato: {
    id: "contato",
    bg: "#04060c",
    glow: "rgba(43, 91, 255, 0.42)",
    glowAlt: "rgba(255, 255, 255, 0.1)",
    name: "HELLO",
    ink: "#f7f7f8",
  },
};

export const DEFAULT_SCENE = SCENES.hero;
