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
    eyebrow: { pt: "Evidência", en: "Evidence" },
    title: {
      pt: "Código em produção, rastreável no GitHub.",
      en: "Production code, traceable on GitHub.",
    },
    summary: {
      pt: "Dois perfis ativos — pessoal e Korven Lab — com commits, repositórios e sequência de contribuição. Sinal de entrega contínua, não de repositório vazio.",
      en: "Two active profiles — personal and Korven Lab — with commits, repositories, and streaks. Evidence of continuous delivery, not empty repos.",
    },
    points: {
      pt: [
        "kleidsonadesign e korvenlab no mesmo painel",
        "Histórico de commits e repos agregados",
        "Linguagens reais via API do GitHub",
      ],
      en: [
        "kleidsonadesign and korvenlab in one view",
        "Aggregated commit and repository history",
        "Live languages from the GitHub API",
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
      pt: "TypeScript rigoroso no backend.",
      en: "Strict TypeScript on the backend.",
    },
    summary: {
      pt: "APIs Node tipadas de ponta a ponta — contratos explícitos, menos any, menos regressão quando o produto cresce.",
      en: "End-to-end typed Node APIs — explicit contracts, less any, fewer regressions as the product scales.",
    },
    points: {
      pt: [
        "REST e WebSockets com tipagem consistente",
        "Serviços SaaS com contratos claros entre camadas",
        "Refatoração segura em bases grandes",
      ],
      en: [
        "REST and WebSockets with consistent typing",
        "SaaS services with clear layer contracts",
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
      pt: "PostgreSQL modelado para o negócio.",
      en: "PostgreSQL modeled for the business.",
    },
    summary: {
      pt: "RLS multi-tenant, migrations sem downtime e SQL que carrega regra de domínio — arquitetura de dados pensada para produção, não só CRUD.",
      en: "Multi-tenant RLS, zero-downtime migrations, and SQL that carries domain rules — data architecture for production, not just CRUD.",
    },
    points: {
      pt: [
        "Isolamento por tenant com RLS",
        "Dezenas de migrations em produtos vivos",
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
    eyebrow: { pt: "Integrações", en: "Integrations" },
    title: {
      pt: "Webhooks e APIs sob carga real.",
      en: "Webhooks and APIs under real load.",
    },
    summary: {
      pt: "Outbox, idempotência e backoff para eventos externos — o mesmo padrão que evita cobrança duplicada e perda de sincronização com terceiros.",
      en: "Outbox, idempotency, and backoff for external events — the same pattern that prevents double charges and lost third-party sync.",
    },
    points: {
      pt: [
        "Consumo e exposição de APIs REST",
        "Webhooks com chave de idempotência",
        "Filas e jobs com recuperação previsível",
      ],
      en: [
        "Consuming and exposing REST APIs",
        "Webhooks with idempotency keys",
        "Queues and jobs with predictable recovery",
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
      pt: "FinTech com ledger e conciliação.",
      en: "FinTech with ledger and reconciliation.",
    },
    summary: {
      pt: "Stripe, Asaas, Mercado Pago e afins com split, Pix/cartão e ledgers atômicos — domínio desacoplado do PSP.",
      en: "Stripe, Asaas, Mercado Pago and peers with split, Pix/card, and atomic ledgers — domain decoupled from the PSP.",
    },
    points: {
      pt: [
        "Integração de PSP com webhooks seguros",
        "Ledgers financeiros atômicos",
        "Múltiplos provedores sem prender o produto",
      ],
      en: [
        "PSP integration with secure webhooks",
        "Atomic financial ledgers",
        "Multiple providers without locking the product",
      ],
    },
    stack: ["Stripe", "Asaas", "Mercado Pago", "PagBank", "Pagar.me"],
    accent: "rgba(46,180,110,0.32)",
  },
  {
    id: "ops",
    sceneId: "gh-ops",
    eyebrow: { pt: "Produção", en: "Production" },
    title: {
      pt: "Do commit ao ar, com trilha.",
      en: "From commit to live, with a trail.",
    },
    summary: {
      pt: "Docker, AWS, CI/CD em Render/Vercel e hardening (HMAC, JWT, OWASP) — prova de que o produto sai do laptop e permanece online.",
      en: "Docker, AWS, CI/CD on Render/Vercel, and hardening (HMAC, JWT, OWASP) — proof the product leaves the laptop and stays online.",
    },
    points: {
      pt: [
        "Deploy em infraestrutura moderna",
        "Pipelines de entrega contínua",
        "Auth e criptografia no desenho da solução",
      ],
      en: [
        "Deploy on modern infrastructure",
        "Continuous delivery pipelines",
        "Auth and cryptography in the solution design",
      ],
    },
    stack: ["Docker", "AWS", "CI/CD", "HMAC", "JWT", "OWASP"],
    accent: "rgba(232,168,74,0.28)",
  },
];
