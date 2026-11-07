import type { SceneId } from "../lib/scenes";

export type SignalSlide = {
  id: string;
  sceneId: SceneId;
  eyebrow: { pt: string; en: string };
  title: { pt: string; en: string };
  summary: { pt: string; en: string };
  points: { pt: string[]; en: string[] };
  stack: string[];
  accent: string;
};

export const SIGNAL_SLIDES: SignalSlide[] = [
  {
    id: "signal",
    sceneId: "github",
    eyebrow: { pt: "Pulso", en: "Pulse" },
    title: { pt: "Dois perfis. Um ritmo de ship.", en: "Two profiles. One shipping rhythm." },
    summary: {
      pt: "Commits, repos e sequência no GitHub pessoal e na Korven Lab — o sinal bruto antes de abrir a stack.",
      en: "Commits, repos, and streak across personal GitHub and Korven Lab — the raw signal before the stack deep-dive.",
    },
    points: {
      pt: [
        "kleidsonadesign + korvenlab no mesmo dashboard",
        "Commits agregados e streak por conta",
        "Linguagens reais vindas da API do GitHub",
      ],
      en: [
        "kleidsonadesign + korvenlab in one dashboard",
        "Aggregated commits and per-account streaks",
        "Live language mix from the GitHub API",
      ],
    },
    stack: ["GitHub API", "TypeScript", "Vercel"],
    accent: "rgba(255,255,255,0.14)",
  },
  {
    id: "typescript",
    sceneId: "gh-typescript",
    eyebrow: { pt: "Runtime", en: "Runtime" },
    title: { pt: "TypeScript no centro do backend.", en: "TypeScript at the center of the backend." },
    summary: {
      pt: "APIs Node tipadas, contratos explícitos e menos surpresa em produção — o idioma padrão do dia a dia.",
      en: "Typed Node APIs, explicit contracts, fewer production surprises — the default language of the day.",
    },
    points: {
      pt: [
        "Node.js + Express/REST e WebSockets",
        "Tipagem ponta a ponta em serviços SaaS",
        "Refactors seguros em codebases grandes",
      ],
      en: [
        "Node.js + Express/REST and WebSockets",
        "End-to-end typing across SaaS services",
        "Safer refactors in large codebases",
      ],
    },
    stack: ["TypeScript", "Node.js", "Express", "REST", "WebSockets"],
    accent: "rgba(49,120,198,0.45)",
  },
  {
    id: "postgres",
    sceneId: "gh-postgres",
    eyebrow: { pt: "Dados", en: "Data" },
    title: { pt: "PostgreSQL como fonte da verdade.", en: "PostgreSQL as the source of truth." },
    summary: {
      pt: "Migrations zero-downtime, RLS multi-tenant e SQL que carrega o domínio — não só um ORM por cima.",
      en: "Zero-downtime migrations, multi-tenant RLS, and SQL that carries the domain — not just an ORM wrapper.",
    },
    points: {
      pt: [
        "RLS e isolation por tenant",
        "54+ migrations sem downtime em produtos vivos",
        "Supabase quando a velocidade importa",
      ],
      en: [
        "RLS and per-tenant isolation",
        "50+ migrations without downtime on live products",
        "Supabase when speed-to-ship matters",
      ],
    },
    stack: ["PostgreSQL", "RLS", "SQL", "Supabase", "ACID"],
    accent: "rgba(51,103,145,0.5)",
  },
  {
    id: "distributed",
    sceneId: "gh-distributed",
    eyebrow: { pt: "Sistemas", en: "Systems" },
    title: { pt: "Distribuído sem drama.", en: "Distributed without the drama." },
    summary: {
      pt: "Webhooks, outbox e idempotência para carga real — o que evita duplicar pagamento e perder evento.",
      en: "Webhooks, outbox, and idempotency for real load — what prevents double charges and lost events.",
    },
    points: {
      pt: [
        "Outbox + backoff em filas e jobs",
        "Idempotency keys em webhooks financeiros",
        "HA e recuperação previsível",
      ],
      en: [
        "Outbox + backoff across queues and jobs",
        "Idempotency keys on payment webhooks",
        "HA with predictable recovery",
      ],
    },
    stack: ["Outbox", "Idempotency", "Webhooks", "Jobs", "HA"],
    accent: "rgba(43,91,255,0.42)",
  },
  {
    id: "fintech",
    sceneId: "gh-fintech",
    eyebrow: { pt: "Pagamentos", en: "Payments" },
    title: { pt: "FinTech que fecha o ledger.", en: "FinTech that closes the ledger." },
    summary: {
      pt: "Integrações Pix/cartão e conciliação atômica — Stripe, Asaas, Mercado Pago e afins no mesmo rigor.",
      en: "Pix/card integrations and atomic reconciliation — Stripe, Asaas, Mercado Pago and peers with the same rigor.",
    },
    points: {
      pt: [
        "Ledgers financeiros atômicos",
        "Webhooks de alta concorrência",
        "Múltiplos PSPs sem acoplar o domínio",
      ],
      en: [
        "Atomic financial ledgers",
        "High-concurrency webhooks",
        "Multiple PSPs without coupling the domain",
      ],
    },
    stack: ["Stripe", "Asaas", "Mercado Pago", "PagBank", "Pagar.me"],
    accent: "rgba(46,180,110,0.32)",
  },
  {
    id: "ops",
    sceneId: "gh-ops",
    eyebrow: { pt: "Entrega", en: "Delivery" },
    title: { pt: "Ship com trilha e segurança.", en: "Ship with a trail and a lock." },
    summary: {
      pt: "Docker, AWS, CI/CD e hardening (HMAC, JWT, OWASP) — do commit ao ar sem atalho frouxo.",
      en: "Docker, AWS, CI/CD, and hardening (HMAC, JWT, OWASP) — from commit to prod without soft shortcuts.",
    },
    points: {
      pt: [
        "Pipelines CI/CD em Render e Vercel",
        "Containers e infra cloud no caminho crítico",
        "Auth e crypto como parte do design",
      ],
      en: [
        "CI/CD pipelines on Render and Vercel",
        "Containers and cloud on the critical path",
        "Auth and crypto as part of the design",
      ],
    },
    stack: ["Docker", "AWS", "CI/CD", "HMAC", "JWT", "OWASP"],
    accent: "rgba(232,168,74,0.28)",
  },
];
