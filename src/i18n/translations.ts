export type Language = "pt" | "en";

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  active?: boolean;
  imageKey?: "korven" | "inss" | "appen";
  logoText?: string;
};

export type EducationItem = {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
  tags: string[];
  active?: boolean;
  logoText: string;
};

export type CertificationItem = {
  institution: string;
  title: string;
  status: string;
  statusColor: "green" | "yellow";
  logo: string;
};

export type ContactLinkItem = {
  platform: string;
  username: string;
  url: string;
};

export type WorkCase = {
  id: string;
  name: string;
  role: string;
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
  url?: string;
  webImage: string;
  mobileImage: string;
};

export type Translation = {
  intro: {
    skip: string;
    loading: string;
  };
  nav: {
    work: string;
    stats: string;
    trajectory: string;
    contact: string;
    language: string;
    brandTag: string;
  };
  hero: {
    brand: string;
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    summary: string;
    cta: string;
    secondaryCta: string;
    location: string;
    timezone: string;
  };
  work: {
    eyebrow: string;
    title: string;
    subtitle: string;
    visit: string;
    webLabel: string;
    mobileLabel: string;
    moreTitle: string;
    cases: WorkCase[];
    more: { name: string; url?: string; blurb: string }[];
  };
  stats: {
    eyebrow: string;
    title: string;
    subtitle: string;
    profile: string;
    commits: string;
    languages: string;
    streak: string;
  };
  trajectory: {
    title: string;
    eyebrow: string;
    educationTitle: string;
    experienceTitle: string;
    freelanceTitle: string;
    education: EducationItem[];
    corporate: ExperienceItem[];
    freelance: ExperienceItem;
  };
  certifications: {
    title: string;
    eyebrow: string;
    comingSoon: string;
    items: CertificationItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    footer: string;
    links: ContactLinkItem[];
  };
};

const sharedWorkCasesPt: WorkCase[] = [
  {
    id: "papufy",
    name: "Papufy",
    role: "Marketplace · Produção",
    year: "2024",
    summary:
      "Marketplace B2C para serviços locais: conecta oferta e demanda com busca, categorias e anúncios — no ar com domínio próprio, web e mobile no mesmo produto.",
    highlights: [
      "Problema de mercado: descoberta e contratação de serviços locais",
      "API + PostgreSQL sustentando catálogo, busca e fluxos de anúncio",
      "Aplicação publicada e operando em produção",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    url: "https://papufy.com/",
    webImage: "/images/projects/papufy/web.png?v=prints",
    mobileImage: "/images/projects/papufy/mobile.png?v=prints",
  },
  {
    id: "wagoobot",
    name: "Wagoo",
    role: "SaaS · Operações",
    year: "2024–2025",
    summary:
      "Plataforma SaaS para espaços de atendimento: agenda via WhatsApp, sinal, comissões e painel operacional — automação de rotina que antes dependia de conversa manual.",
    highlights: [
      "Automação de agendamento e atendimento pelo WhatsApp",
      "Split de pagamentos, sinal e comissões no mesmo fluxo",
      "Dashboard web/mobile para operação em tempo real",
    ],
    stack: ["React", "Node.js", "AWS", "Docker"],
    url: "https://wagoobot.com/",
    webImage: "/images/projects/wagoobot/web.png?v=prints",
    mobileImage: "/images/projects/wagoobot/mobile.png?v=prints",
  },
  {
    id: "shopwagoo",
    name: "Shopwag",
    role: "E-commerce · Checkout",
    year: "2025",
    summary:
      "Loja com link próprio para o negócio vender online: checkout Pix/cartão e pedidos no painel — vitrine e operação no ar, sem depender de marketplace de terceiros.",
    highlights: [
      "Storefront publicado com domínio/link dedicado",
      "Integração de pagamento (Pix e cartão) até o pedido no painel",
      "Experiência mobile alinhada à operação do lojista",
    ],
    stack: ["React", "TypeScript", "Mercado Pago", "Figma"],
    url: "https://wagoobot.com/",
    webImage: "/images/projects/shopwagoo/web.png?v=prints",
    mobileImage: "/images/projects/shopwagoo/mobile.png?v=prints",
  },
];

const sharedWorkCasesEn: WorkCase[] = [
  {
    id: "papufy",
    name: "Papufy",
    role: "Marketplace · Production",
    year: "2024",
    summary:
      "B2C marketplace for local services: matches supply and demand with search, categories, and listings — live on its own domain, web and mobile in one product.",
    highlights: [
      "Market problem: discovering and hiring local services",
      "API + PostgreSQL behind catalog, search, and listing flows",
      "Application published and running in production",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    url: "https://papufy.com/",
    webImage: "/images/projects/papufy/web.png?v=prints",
    mobileImage: "/images/projects/papufy/mobile.png?v=prints",
  },
  {
    id: "wagoobot",
    name: "Wagoo",
    role: "SaaS · Operations",
    year: "2024–2025",
    summary:
      "SaaS for service spaces: WhatsApp booking, deposits, commissions, and an ops dashboard — automation for routines that used to live in manual chat.",
    highlights: [
      "WhatsApp-driven booking and customer ops automation",
      "Payment split, deposits, and commissions in one flow",
      "Web/mobile dashboard for real-time operations",
    ],
    stack: ["React", "Node.js", "AWS", "Docker"],
    url: "https://wagoobot.com/",
    webImage: "/images/projects/wagoobot/web.png?v=prints",
    mobileImage: "/images/projects/wagoobot/mobile.png?v=prints",
  },
  {
    id: "shopwagoo",
    name: "Shopwag",
    role: "E-commerce · Checkout",
    year: "2025",
    summary:
      "Own-link storefront so the business sells online: Pix/card checkout and orders in the panel — live storefront and ops without a third-party marketplace.",
    highlights: [
      "Published storefront with a dedicated link/domain",
      "Payment integration (Pix and card) through to the order panel",
      "Mobile experience aligned with the merchant's ops",
    ],
    stack: ["React", "TypeScript", "Mercado Pago", "Figma"],
    url: "https://wagoobot.com/",
    webImage: "/images/projects/shopwagoo/web.png?v=prints",
    mobileImage: "/images/projects/shopwagoo/mobile.png?v=prints",
  },
];

export const translations: Record<Language, Translation> = {
  pt: {
    intro: {
      skip: "Pular intro",
      loading: "Preparando o portfólio",
    },
    nav: {
      work: "Trabalho",
      stats: "GitHub",
      trajectory: "Trajetória",
      contact: "Contato",
      language: "PT",
      brandTag: "Full Stack Engineer",
    },
    hero: {
      brand: "Kleidson Almeida Santos",
      eyebrow: "Full Stack · Backend · SaaS em produção",
      headline: "Projetando plataformas B2B e B2C",
      headlineAccent: "escaláveis",
      summary:
        "Engenheiro full stack focado em backends e plataformas SaaS em produção: APIs, PostgreSQL, webhooks financeiros e automações que resolvem operação real. 5+ anos, inglês fluente, aberto a remote US/EU.",
      cta: "Ver produtos em produção",
      secondaryCta: "Baixar CV",
      location: "Campina Grande, Brazil",
      timezone: "Remote · GMT-3",
    },
    work: {
      eyebrow: "01 / Selected Work",
      title: "Produtos reais, no ar.",
      subtitle:
        "SaaS e marketplaces em produção — com domínio próprio, integrações de pagamento e operação web + mobile. Não são tutoriais.",
      visit: "Abrir produto",
      webLabel: "Web app",
      mobileLabel: "Mobile",
      moreTitle: "Também em produção",
      cases: sharedWorkCasesPt,
      more: [
        {
          name: "Korven Lab",
          url: "https://korvenlab.com",
          blurb: "Lab de SaaS multi-tenant, pagamentos e engenharia em produção",
        },
        {
          name: "2AVendas",
          url: "https://2avendas.com/",
          blurb: "CRM B2B para representantes: comissões, funil e roteamento de pedidos",
        },
        {
          name: "INSS Automation",
          blurb: "Automação e sustentação de infraestrutura crítica em ambiente real",
        },
      ],
    },
    stats: {
      eyebrow: "02 / Signal",
      title: "Código em movimento.",
      subtitle:
        "Sinal técnico no GitHub e profundidade na stack que sustenta APIs, dados, pagamentos e entrega em produção.",
      profile: "Ver perfil no GitHub",
      commits: "Estatísticas",
      languages: "Top linguagens",
      streak: "Sequência",
    },
    trajectory: {
      title: "De onde venho. Para onde vou.",
      eyebrow: "03 / Path",
      educationTitle: "Formação",
      experienceTitle: "Experiência",
      freelanceTitle: "Autônomo & Freelance",
      education: [
        {
          id: "unifacisa",
          institution: "Unifacisa",
          degree: "Bacharelado em Sistemas de Informação",
          period: "previsão dez 2026",
          description:
            "Formação em desenvolvimento de software, arquitetura de sistemas, banco de dados e engenharia com foco em soluções escaláveis.",
          tags: ["ARQUITETURA", "SISTEMAS", "BANCO DE DADOS", "ENGENHARIA"],
          active: true,
          logoText: "UF",
        },
      ],
      corporate: [
        {
          id: "korven",
          company: "Korven Lab",
          role: "Lead Full Stack Engineer",
          period: "dez 2025 — presente · Remote",
          description:
            "Arquitetura e escala de produtos cloud multi-tenant SaaS (full stack): webhooks de alta concorrência, Outbox/backoff, PostgreSQL com 54+ migrations zero-downtime e RLS, ledgers financeiros atômicos e integrações Stripe/Asaas/PagBank/Mercado Pago/Pagar.me com HMAC e AES-256-GCM.",
          tags: ["NODE.JS", "POSTGRESQL", "DISTRIBUTED", "FINTECH", "SECURITY"],
          active: true,
          imageKey: "korven",
        },
        {
          id: "inss",
          company: "INSS",
          role: "Infrastructure & Support Engineer · Intern",
          period: "nov 2025 — presente · Brazil",
          description:
            "Automação em Python e Shell para infraestrutura crítica, disponibilidade de sistemas internos, integridade de backups e protocolos IAM.",
          tags: ["PYTHON", "SHELL", "IAM", "INFRA", "AUTOMAÇÃO"],
          active: true,
          imageKey: "inss",
        },
        {
          id: "appen",
          company: "Appen",
          role: "QA Automation Engineer",
          period: "jan 2024 — dez 2024 · Remote",
          description:
            "Pipelines E2E com Selenium e Python, maior cobertura de testes e menos defeitos pós-release em times Agile globais.",
          tags: ["SELENIUM", "PYTHON", "QA", "E2E", "AGILE"],
          imageKey: "appen",
        },
      ],
      freelance: {
        id: "freelance",
        company: "Independent Contractor",
        role: "Full Stack Engineer",
        period: "mar 2019 — dez 2023 · Remote",
        description:
          "APIs REST e bancos relacionais para clientes enterprise, integrações de pagamento/webhooks com idempotência, e entrega full-lifecycle (cloud, CI/CD, performance) em apps de alta disponibilidade.",
        tags: ["APIS", "POSTGRESQL", "PAYMENTS", "CI/CD", "SDLC"],
        logoText: "KA",
      },
    },
    certifications: {
      title: "Credenciais que importam.",
      eyebrow: "04 / Proof",
      comingSoon: "Em breve",
      items: [
        {
          institution: "NVIDIA / ADAPTA",
          title: "Generative AI & Prompt Engineering",
          status: "Ativo",
          statusColor: "green",
          logo: "AI",
        },
        {
          institution: "ENAP",
          title: "Lei Geral de Proteção de Dados (LGPD)",
          status: "Ativo",
          statusColor: "green",
          logo: "LGPD",
        },
      ],
    },
    contact: {
      eyebrow: "05 / Contato",
      title: "Próximo projeto?",
      subtitle:
        "Aberto a times que precisam de backend/full stack para SaaS em produção — remote com overlap US/EU.",
      cta: "Falar no WhatsApp",
      footer: "© 2026 Kleidson Almeida Santos. React · Tailwind · Motion.",
      links: [
        {
          platform: "LinkedIn",
          username: "linkedin.com/in/almeidasantosdev",
          url: "https://linkedin.com/in/almeidasantosdev",
        },
        {
          platform: "GitHub",
          username: "github.com/kleidsonadesign",
          url: "https://github.com/kleidsonadesign",
        },
        {
          platform: "E-mail",
          username: "almeida@korvenlab.com",
          url: "mailto:almeida@korvenlab.com",
        },
        {
          platform: "Currículo",
          username: "Download PDF",
          url: "/resume/kleidson-almeida-santos-resume.pdf",
        },
        {
          platform: "WhatsApp",
          username: "+55 82 99945-0453",
          url: "https://wa.me/5582999450453",
        },
      ],
    },
  },
  en: {
    intro: {
      skip: "Skip intro",
      loading: "Preparing the portfolio",
    },
    nav: {
      work: "Work",
      stats: "GitHub",
      trajectory: "Trajectory",
      contact: "Contact",
      language: "EN",
      brandTag: "Full Stack Engineer",
    },
    hero: {
      brand: "Kleidson Almeida Santos",
      eyebrow: "Full Stack · Backend · Production SaaS",
      headline: "Designing B2B and B2C",
      headlineAccent: "scalable platforms",
      summary:
        "Full stack engineer focused on backends and production SaaS: APIs, PostgreSQL, payment webhooks, and automations that solve real operations. 5+ years, fluent English, open to remote US/EU overlap.",
      cta: "View live products",
      secondaryCta: "Download resume",
      location: "Campina Grande, Brazil",
      timezone: "Remote · GMT-3",
    },
    work: {
      eyebrow: "01 / Selected Work",
      title: "Real products, live in production.",
      subtitle:
        "SaaS and marketplaces online — own domains, payment integrations, and web + mobile ops. Not tutorials.",
      visit: "Open product",
      webLabel: "Web app",
      mobileLabel: "Mobile",
      moreTitle: "Also in production",
      cases: sharedWorkCasesEn,
      more: [
        {
          name: "Korven Lab",
          url: "https://korvenlab.com",
          blurb: "Multi-tenant SaaS lab — payments and production engineering",
        },
        {
          name: "2AVendas",
          url: "https://2avendas.com/",
          blurb: "B2B CRM for sales reps: commissions, funnel, and order routing",
        },
        {
          name: "INSS Automation",
          blurb: "Automation and support for critical infrastructure in a live environment",
        },
      ],
    },
    stats: {
      eyebrow: "02 / Signal",
      title: "Code in motion.",
      subtitle:
        "GitHub signal and depth in the stack that powers APIs, data, payments, and production delivery.",
      profile: "View GitHub profile",
      commits: "Stats",
      languages: "Top languages",
      streak: "Streak",
    },
    trajectory: {
      title: "Where I’ve been. Where I’m going.",
      eyebrow: "03 / Path",
      educationTitle: "Education",
      experienceTitle: "Experience",
      freelanceTitle: "Freelance & Independent",
      education: [
        {
          id: "unifacisa",
          institution: "Unifacisa",
          degree: "B.S. Information Systems",
          period: "Expected Dec 2026",
          description:
            "Software development, system architecture, databases, and engineering focused on scalable solutions.",
          tags: ["ARCHITECTURE", "SYSTEMS", "DATABASES", "ENGINEERING"],
          active: true,
          logoText: "UF",
        },
      ],
      corporate: [
        {
          id: "korven",
          company: "Korven Lab",
          role: "Lead Full Stack Engineer",
          period: "Dec 2025 — Present · Remote",
          description:
            "Architected multi-tenant SaaS cloud products end-to-end (full stack): high-volume webhooks, Outbox/backoff messaging, PostgreSQL with 54+ zero-downtime migrations and RLS, atomic financial ledgers, and Stripe/Asaas/PagBank/Mercado Pago/Pagar.me integrations with HMAC and AES-256-GCM.",
          tags: ["NODE.JS", "POSTGRESQL", "DISTRIBUTED", "FINTECH", "SECURITY"],
          active: true,
          imageKey: "korven",
        },
        {
          id: "inss",
          company: "INSS",
          role: "Infrastructure & Support Engineer · Intern",
          period: "Nov 2025 — Present · Brazil",
          description:
            "Python and Shell automation for mission-critical infrastructure, internal systems availability, backup integrity, and IAM protocols.",
          tags: ["PYTHON", "SHELL", "IAM", "INFRA", "AUTOMATION"],
          active: true,
          imageKey: "inss",
        },
        {
          id: "appen",
          company: "Appen",
          role: "QA Automation Engineer",
          period: "Jan 2024 — Dec 2024 · Remote",
          description:
            "End-to-end Selenium/Python test pipelines that raised coverage and cut post-release defects with global Agile teams.",
          tags: ["SELENIUM", "PYTHON", "QA", "E2E", "AGILE"],
          imageKey: "appen",
        },
      ],
      freelance: {
        id: "freelance",
        company: "Independent Contractor",
        role: "Full Stack Engineer",
        period: "Mar 2019 — Dec 2023 · Remote",
        description:
          "Built resilient REST APIs and relational databases for enterprise clients, payment/webhook pipelines with idempotency, and full SDLC delivery (cloud, CI/CD, performance) for high-availability apps.",
        tags: ["APIS", "POSTGRESQL", "PAYMENTS", "CI/CD", "SDLC"],
        logoText: "KA",
      },
    },
    certifications: {
      title: "Credentials that matter.",
      eyebrow: "04 / Proof",
      comingSoon: "Coming soon",
      items: [
        {
          institution: "NVIDIA / ADAPTA",
          title: "Generative AI & Prompt Engineering",
          status: "Active",
          statusColor: "green",
          logo: "AI",
        },
        {
          institution: "ENAP",
          title: "Brazilian Data Protection Law (LGPD)",
          status: "Active",
          statusColor: "green",
          logo: "LGPD",
        },
      ],
    },
    contact: {
      eyebrow: "05 / Contact",
      title: "Next build?",
      subtitle:
        "Open to teams that need backend/full stack for production SaaS — remote with US/EU overlap.",
      cta: "Chat on WhatsApp",
      footer: "© 2026 Kleidson Almeida Santos. React · Tailwind · Motion.",
      links: [
        {
          platform: "LinkedIn",
          username: "linkedin.com/in/almeidasantosdev",
          url: "https://linkedin.com/in/almeidasantosdev",
        },
        {
          platform: "GitHub",
          username: "github.com/kleidsonadesign",
          url: "https://github.com/kleidsonadesign",
        },
        {
          platform: "Email",
          username: "almeida@korvenlab.com",
          url: "mailto:almeida@korvenlab.com",
        },
        {
          platform: "Resume",
          username: "Download PDF",
          url: "/resume/kleidson-almeida-santos-resume.pdf",
        },
        {
          platform: "WhatsApp",
          username: "+55 82 99945-0453",
          url: "https://wa.me/5582999450453",
        },
      ],
    },
  },
};
