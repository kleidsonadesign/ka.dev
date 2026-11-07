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
    eyebrow: { pt: "Atividade", en: "Activity" },
    title: {
      pt: "Atividade contínua em dois repositórios.",
      en: "Steady activity across two GitHub accounts.",
    },
    summary: {
      pt: "Acompanhamento do GitHub pessoal e da Korven Lab: commits, repositórios e sequência de contribuição no mesmo painel.",
      en: "Personal GitHub and Korven Lab in one view: commits, repositories, and contribution streaks side by side.",
    },
    points: {
      pt: [
        "Perfis kleidsonadesign e korvenlab",
        "Commits e repositórios agregados",
        "Linguagens atualizadas via API do GitHub",
      ],
      en: [
        "kleidsonadesign and korvenlab profiles",
        "Aggregated commits and repositories",
        "Languages refreshed from the GitHub API",
      ],
    },
    stack: ["GitHub API", "TypeScript", "Vercel"],
    accent: "rgba(255,255,255,0.14)",
  },
  {
    id: "typescript",
    sceneId: "gh-typescript",
    eyebrow: { pt: "Backend", en: "Backend" },
    title: {
      pt: "TypeScript como base do backend.",
      en: "TypeScript as the backend foundation.",
    },
    summary: {
      pt: "APIs Node.js tipadas, contratos claros entre serviços e menos regressão em produção. É a linguagem principal no dia a dia.",
      en: "Typed Node.js APIs, clear service contracts, and fewer regressions in production. The primary language in day-to-day work.",
    },
    points: {
      pt: [
        "Node.js com Express, REST e WebSockets",
        "Tipagem consistente em serviços SaaS",
        "Refatoração mais segura em bases grandes",
      ],
      en: [
        "Node.js with Express, REST, and WebSockets",
        "Consistent typing across SaaS services",
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
    title: {
      pt: "PostgreSQL no centro do domínio.",
      en: "PostgreSQL at the center of the domain.",
    },
    summary: {
      pt: "Modelagem relacional, RLS multi-tenant e migrations sem downtime. O banco carrega regras de negócio, não só persistência genérica.",
      en: "Relational modeling, multi-tenant RLS, and zero-downtime migrations. The database carries business rules, not just generic storage.",
    },
    points: {
      pt: [
        "Isolamento por tenant com RLS",
        "Dezenas de migrations em produtos em produção",
        "Supabase quando o prazo exige velocidade",
      ],
      en: [
        "Per-tenant isolation with RLS",
        "Dozens of migrations on live products",
        "Supabase when delivery speed matters",
      ],
    },
    stack: ["PostgreSQL", "RLS", "SQL", "Supabase", "ACID"],
    accent: "rgba(51,103,145,0.5)",
  },
  {
    id: "distributed",
    sceneId: "gh-distributed",
    eyebrow: { pt: "Arquitetura", en: "Architecture" },
    title: {
      pt: "Sistemas distribuídos com controle.",
      en: "Distributed systems under control.",
    },
    summary: {
      pt: "Webhooks, padrão outbox e idempotência para cargas reais — evitando cobrança duplicada e perda de eventos.",
      en: "Webhooks, outbox pattern, and idempotency under real load — avoiding double charges and lost events.",
    },
    points: {
      pt: [
        "Outbox e backoff em filas e jobs",
        "Chaves de idempotência em webhooks financeiros",
        "Alta disponibilidade com recuperação previsível",
      ],
      en: [
        "Outbox and backoff across queues and jobs",
        "Idempotency keys on payment webhooks",
        "High availability with predictable recovery",
      ],
    },
    stack: ["Outbox", "Idempotency", "Webhooks", "Jobs", "HA"],
    accent: "rgba(43,91,255,0.42)",
  },
  {
    id: "fintech",
    sceneId: "gh-fintech",
    eyebrow: { pt: "Pagamentos", en: "Payments" },
    title: {
      pt: "Integrações FinTech com conciliação sólida.",
      en: "FinTech integrations with solid reconciliation.",
    },
    summary: {
      pt: "Pix, cartão e ledgers atômicos com Stripe, Asaas, Mercado Pago, PagBank e Pagar.me — sem misturar domínio e provedor.",
      en: "Pix, cards, and atomic ledgers with Stripe, Asaas, Mercado Pago, PagBank, and Pagar.me — without coupling domain logic to a provider.",
    },
    points: {
      pt: [
        "Ledgers financeiros atômicos",
        "Webhooks sob alta concorrência",
        "Múltiplos PSPs com o domínio desacoplado",
      ],
      en: [
        "Atomic financial ledgers",
        "Webhooks under high concurrency",
        "Multiple PSPs with a decoupled domain",
      ],
    },
    stack: ["Stripe", "Asaas", "Mercado Pago", "PagBank", "Pagar.me"],
    accent: "rgba(46,180,110,0.32)",
  },
  {
    id: "ops",
    sceneId: "gh-ops",
    eyebrow: { pt: "Operação", en: "Operations" },
    title: {
      pt: "Entrega contínua com segurança embutida.",
      en: "Continuous delivery with security built in.",
    },
    summary: {
      pt: "Docker, AWS, CI/CD e práticas de segurança (HMAC, JWT, OWASP) do commit ao ambiente publicado.",
      en: "Docker, AWS, CI/CD, and security practices (HMAC, JWT, OWASP) from commit to production.",
    },
    points: {
      pt: [
        "Pipelines em Render e Vercel",
        "Containers e cloud no fluxo crítico",
        "Autenticação e criptografia no desenho da solução",
      ],
      en: [
        "Pipelines on Render and Vercel",
        "Containers and cloud on the critical path",
        "Auth and cryptography in the solution design",
      ],
    },
    stack: ["Docker", "AWS", "CI/CD", "HMAC", "JWT", "OWASP"],
    accent: "rgba(232,168,74,0.28)",
  },
];
