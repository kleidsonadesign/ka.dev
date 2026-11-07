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

export type ToolkitGroup = {
  title: string;
  items: string[];
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
  toolkit: {
    eyebrow: string;
    title: string;
    subtitle: string;
    groups: ToolkitGroup[];
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
    role: "Marketplace · Full Stack",
    year: "2024",
    summary:
      "Marketplace de trabalhos e serviços locais — busca, categorias, anúncios e fluxo mobile com a mesma clareza do desktop.",
    highlights: [
      "Marketplace web completo com busca e filtros",
      "Experiência mobile nativa no navegador",
      "UI de categorias, banners e empty states",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    url: "https://papufy.com/",
    webImage: "/images/projects/papufy/web.png?v=prints",
    mobileImage: "/images/projects/papufy/mobile.png?v=prints",
  },
  {
    id: "wagoobot",
    name: "Wagoo",
    role: "SaaS · WhatsApp + Gestão",
    year: "2024–2025",
    summary:
      "Gestão para espaços de atendimento: agendamento no WhatsApp, sinal, comissões e dashboard operacional web + mobile.",
    highlights: [
      "Landing e produto com UX conversacional",
      "Dashboard mobile de visão geral da operação",
      "Pagamentos, sinal e comissões no mesmo fluxo",
    ],
    stack: ["React", "Node.js", "AWS", "Docker"],
    url: "https://wagoobot.com/",
    webImage: "/images/projects/wagoobot/web.png?v=prints",
    mobileImage: "/images/projects/wagoobot/mobile.png?v=prints",
  },
  {
    id: "shopwagoo",
    name: "Shopwag",
    role: "E-commerce · Link próprio",
    year: "2025",
    summary:
      "Loja online com link próprio — o cliente compra no site, paga com Pix ou cartão e o pedido chega no painel.",
    highlights: [
      "Storefront dark editorial com link dedicado",
      "Checkout Pix/cartão e painel de pedidos",
      "Versão mobile da vitrine e da operação",
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
    role: "Marketplace · Full Stack",
    year: "2024",
    summary:
      "Local services marketplace — search, categories, listings, and a mobile flow with the same clarity as desktop.",
    highlights: [
      "Full web marketplace with search and filters",
      "Mobile browser experience",
      "Category UI, banners, and empty states",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    url: "https://papufy.com/",
    webImage: "/images/projects/papufy/web.png?v=prints",
    mobileImage: "/images/projects/papufy/mobile.png?v=prints",
  },
  {
    id: "wagoobot",
    name: "Wagoo",
    role: "SaaS · WhatsApp + Ops",
    year: "2024–2025",
    summary:
      "Operations platform for service spaces: WhatsApp booking, deposits, commissions, and a web + mobile dashboard.",
    highlights: [
      "Conversational UX on the marketing site",
      "Mobile operations overview dashboard",
      "Payments, deposits, and commissions in one flow",
    ],
    stack: ["React", "Node.js", "AWS", "Docker"],
    url: "https://wagoobot.com/",
    webImage: "/images/projects/wagoobot/web.png?v=prints",
    mobileImage: "/images/projects/wagoobot/mobile.png?v=prints",
  },
  {
    id: "shopwagoo",
    name: "Shopwag",
    role: "E-commerce · Own link",
    year: "2025",
    summary:
      "Online store with your own link — customers buy on the site, pay with Pix or card, and orders land in the panel.",
    highlights: [
      "Dark editorial storefront with dedicated link",
      "Pix/card checkout and order panel",
      "Mobile storefront and ops views",
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
      eyebrow: "Full Stack · Distributed Systems · SaaS",
      headline: "Eu projeto e entrego",
      headlineAccent: "plataformas SaaS escaláveis",
      summary:
        "5+ anos em full stack, sistemas distribuídos e integrações FinTech. Node.js/TypeScript, PostgreSQL e APIs resilientes — produtos B2B e infraestrutura cloud fault-tolerant. Inglês fluente. Aberto a remote US/EU.",
      cta: "Ver trabalho selecionado",
      secondaryCta: "Baixar CV",
      location: "Campina Grande, Brazil",
      timezone: "Remote · GMT-3",
    },
    work: {
      eyebrow: "01 / Selected Work",
      title: "Produtos que mostram domínio web e mobile.",
      subtitle:
        "Cases reais com interfaces desktop e experiência mobile — Papufy, Wagoo e Shopwag.",
      visit: "Abrir projeto",
      webLabel: "Web app",
      mobileLabel: "Mobile",
      moreTitle: "Também no ar",
      cases: sharedWorkCasesPt,
      more: [
        {
          name: "Korven Lab",
          url: "https://korvenlab.com",
          blurb: "Lab de produtos SaaS e engenharia",
        },
        {
          name: "2AVendas",
          url: "https://2avendas.com/",
          blurb: "CRM B2B multi-tenant e motor de pedidos",
        },
        {
          name: "INSS Automation",
          blurb: "Automação e sustentação de ambientes críticos",
        },
      ],
    },
    stats: {
      eyebrow: "02 / Signal",
      title: "Código em movimento.",
      subtitle:
        "Pulso no GitHub pessoal e na Korven Lab — commits e linguagens (incluindo privados quando o token está configurado).",
      profile: "Ver perfil no GitHub",
      commits: "Estatísticas",
      languages: "Top linguagens",
      streak: "Sequência",
    },
    toolkit: {
      eyebrow: "03 / Instruments",
      title: "Ferramentas que carregam o ship.",
      subtitle: "Backend, dados, fintech e nuvem — o que uso no dia a dia.",
      groups: [
        {
          title: "Backend & Design",
          items: ["Node.js", "TypeScript", "Express", "REST", "WebSockets"],
        },
        {
          title: "Database",
          items: ["PostgreSQL", "RLS", "Supabase", "SQL", "ACID"],
        },
        {
          title: "Distributed Systems",
          items: ["Outbox", "Idempotency", "HA", "Backoff", "Jobs"],
        },
        {
          title: "FinTech",
          items: ["Stripe", "Asaas", "Mercado Pago", "PagBank", "Pagar.me"],
        },
        {
          title: "Security",
          items: ["HMAC", "AES-256", "OAuth 2.0", "JWT", "OWASP"],
        },
        {
          title: "DevOps",
          items: ["Docker", "AWS", "CI/CD", "Render", "Vercel"],
        },
      ],
    },
    trajectory: {
      title: "De onde venho. Para onde vou.",
      eyebrow: "04 / Path",
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
      eyebrow: "05 / Proof",
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
      eyebrow: "06 / Contato",
      title: "Próximo projeto?",
      subtitle: "Aberto a contratos remote (US & EU overlap) e projetos full stack/SaaS.",
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
      eyebrow: "Full Stack · Distributed Systems · SaaS",
      headline: "I design and ship",
      headlineAccent: "scalable SaaS platforms",
      summary:
        "5+ years in full stack engineering, distributed systems, and FinTech integrations. Node.js/TypeScript, PostgreSQL, and resilient APIs — B2B products and fault-tolerant cloud infrastructure. Fluent English. Open to remote US/EU overlap.",
      cta: "View selected work",
      secondaryCta: "Download resume",
      location: "Campina Grande, Brazil",
      timezone: "Remote · GMT-3",
    },
    work: {
      eyebrow: "01 / Selected Work",
      title: "Products that prove web and mobile craft.",
      subtitle:
        "Real cases with desktop interfaces and mobile experience — Papufy, Wagoo, and Shopwag.",
      visit: "Open project",
      webLabel: "Web app",
      mobileLabel: "Mobile",
      moreTitle: "Also shipping",
      cases: sharedWorkCasesEn,
      more: [
        {
          name: "Korven Lab",
          url: "https://korvenlab.com",
          blurb: "SaaS product lab and engineering",
        },
        {
          name: "2AVendas",
          url: "https://2avendas.com/",
          blurb: "Multi-tenant B2B CRM and order routing",
        },
        {
          name: "INSS Automation",
          blurb: "Automation and critical environment support",
        },
      ],
    },
    stats: {
      eyebrow: "02 / Signal",
      title: "Code in motion.",
      subtitle:
        "Pulse on personal GitHub and Korven Lab — commits and languages (including private when the token is set).",
      profile: "View GitHub profile",
      commits: "Stats",
      languages: "Top languages",
      streak: "Streak",
    },
    toolkit: {
      eyebrow: "03 / Instruments",
      title: "Tools that carry the ship.",
      subtitle: "Backend, data, fintech, and cloud — what I use every day.",
      groups: [
        {
          title: "Backend & Design",
          items: ["Node.js", "TypeScript", "Express", "REST", "WebSockets"],
        },
        {
          title: "Database",
          items: ["PostgreSQL", "RLS", "Supabase", "SQL", "ACID"],
        },
        {
          title: "Distributed Systems",
          items: ["Outbox", "Idempotency", "HA", "Backoff", "Jobs"],
        },
        {
          title: "FinTech",
          items: ["Stripe", "Asaas", "Mercado Pago", "PagBank", "Pagar.me"],
        },
        {
          title: "Security",
          items: ["HMAC", "AES-256", "OAuth 2.0", "JWT", "OWASP"],
        },
        {
          title: "DevOps",
          items: ["Docker", "AWS", "CI/CD", "Render", "Vercel"],
        },
      ],
    },
    trajectory: {
      title: "Where I’ve been. Where I’m going.",
      eyebrow: "04 / Path",
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
      eyebrow: "05 / Proof",
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
      eyebrow: "06 / Contact",
      title: "Next build?",
      subtitle: "Open to remote contracts (US & EU overlap) and full stack/SaaS work.",
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
