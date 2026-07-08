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

export type Translation = {
  nav: {
    content: string;
    trajectory: string;
    certifications: string;
    contact: string;
    language: string;
  };
  hero: {
    title: string;
    subtitle: string;
    badges: string[];
    headline: string;
    headlineAccent: string;
    summary: string;
    featuredProjects: string;
    cv: string;
    location: string;
    timezone: string;
    projects: { name: string; url?: string }[];
  };
  trajectory: {
    title: string;
    educationTitle: string;
    experienceTitle: string;
    freelanceTitle: string;
    education: EducationItem[];
    corporate: ExperienceItem[];
    freelance: ExperienceItem;
  };
  certifications: {
    title: string;
    comingSoon: string;
    items: CertificationItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    footer: string;
    links: ContactLinkItem[];
  };
};

export const translations: Record<Language, Translation> = {
  pt: {
    nav: {
      content: "Conteúdo",
      trajectory: "Trajetória",
      certifications: "Certificações",
      contact: "Contatar",
      language: "PT",
    },
    hero: {
      title: "KLEIDSON ALMEIDA",
      subtitle: "@almeida1r.dev",
      badges: [
        "Engenheiro de Software Pleno",
        "AWS & DevOps",
        "Unifacisa (Cursando)",
        "Campina Grande, PB",
      ],
      headline: "Engenheiro de Software Full Stack.",
      headlineAccent: "Especialista em Cloud, SaaS e IA.",
      summary:
        "6 anos de experiência: 4+ em desenvolvimento autônomo e freelance (2019–2024) e 2+ em ambientes corporativos. Especialista em TypeScript, Node.js, React, AWS e DevOps — com foco em SaaS escalável, impacto de negócio e entregas de alta disponibilidade.",
      featuredProjects: "Projetos em Destaque",
      cv: "CV",
      location: "Campina Grande, PB",
      timezone: "GMT-3",
      projects: [
        { name: "Wagoo", url: "https://wagoobot.com/" },
        { name: "Korven Lab", url: "https://korvenlab.com" },
        { name: "Papufy", url: "https://papufy.com/" },
        { name: "2AVendas", url: "https://2avendas.com/" },
        { name: "INSS Automation" },
      ],
    },
    trajectory: {
      title: "Trajetória Profissional",
      educationTitle: "Formação Acadêmica",
      experienceTitle: "Experiência Corporativa",
      freelanceTitle: "Experiência Autônoma & Freelance",
      education: [
        {
          id: "unifacisa",
          institution: "Unifacisa",
          degree: "Bacharelado em Sistemas de Informação",
          period: "jan 2023 — jan 2027",
          description:
            "Cursando. Formação em desenvolvimento de software, arquitetura de sistemas, banco de dados e engenharia de software com foco em soluções escaláveis.",
          tags: ["ARQUITETURA", "ENGENHARIA DE SOFTWARE", "BANCO DE DADOS", "DEVOPS"],
          active: true,
          logoText: "UF",
        },
        {
          id: "microcamp",
          institution: "Microcamp",
          degree: "Curso Técnico em Desenvolvimento Web",
          period: "2018 — 2019",
          description:
            "Base técnica em desenvolvimento web, UI/UX e fundamentos de programação que antecederam a atuação autônoma em produtos digitais.",
          tags: ["WEB", "UI/UX", "HTML", "CSS", "JAVASCRIPT"],
          logoText: "MC",
        },
      ],
      corporate: [
        {
          id: "korven",
          company: "Korven Lab",
          role: "Engenheiro de Software Full Stack | Tech Lead",
          period: "dez 2025 — presente",
          description:
            "Liderança técnica ponta a ponta em produtos SaaS. Backends Node.js com Docker, FinOps na AWS com ~30% de redução de custos e interfaces React orientadas a conversão.",
          tags: ["NODE.JS", "AWS", "DOCKER", "TYPESCRIPT", "FINOPS"],
          active: true,
          imageKey: "korven",
        },
        {
          id: "inss",
          company: "INSS",
          role: "Analista de Suporte e Infraestrutura",
          period: "jan 2025 — presente",
          description:
            "Sustentação de ambientes críticos com cultura DevOps. Automação em Python e Shell Script reduziu o tempo de resposta a incidentes em ~40%.",
          tags: ["DEVOPS", "PYTHON", "SHELL SCRIPT", "AUTOMAÇÃO"],
          active: true,
          imageKey: "inss",
        },
        {
          id: "appen",
          company: "Appen",
          role: "Analista de QA",
          period: "jan 2024 — dez 2024",
          description:
            "Testes E2E automatizados com Selenium e Python. Garantia de zero regressões antes do deploy em colaboração com times globais.",
          tags: ["SELENIUM", "QA", "E2E", "PYTHON"],
          imageKey: "appen",
        },
      ],
      freelance: {
        id: "freelance",
        company: "Desenvolvimento Autônomo",
        role: "Full Stack Developer | UI/UX Designer",
        period: "mar 2019 — dez 2023",
        description:
          "Construção de aplicações web e produtos SaaS próprios (Wagoo, 2AVendas, Papufy). Stack JavaScript/TypeScript, integrações de pagamento, arquitetura serverless e design de interfaces em Figma.",
        tags: ["REACT", "NODE.JS", "SAAS", "FIGMA", "STRIPE", "OWASP"],
        logoText: "KA",
      },
    },
    certifications: {
      title: "Top Certificações",
      comingSoon: "Em breve",
      items: [
        {
          institution: "AMAZON WEB SERVICES",
          title: "Developer Associate (DVA)",
          status: "Ativo",
          statusColor: "green",
          logo: "AWS",
        },
        {
          institution: "ADAPTA / NVIDIA",
          title: "Engenharia de Prompt & IA Generativa",
          status: "Ativo",
          statusColor: "green",
          logo: "AI",
        },
        {
          institution: "MICROCAMP",
          title: "WebDesign & UI/UX",
          status: "Ativo",
          statusColor: "green",
          logo: "MC",
        },
        {
          institution: "MICROSOFT AZURE",
          title: "Azure Fundamentals (AZ-900)",
          status: "Em breve",
          statusColor: "yellow",
          logo: "AZ",
        },
      ],
    },
    contact: {
      title: "Vamos construir algo juntos?",
      subtitle: "Aberto a projetos freelance e oportunidades CLT",
      footer: "© 2026 Kleidson Almeida. Feito com React, Tailwind CSS e Motion.",
      links: [
        {
          platform: "LinkedIn",
          username: "linkedin.com/in/kleidsonadesign",
          url: "https://linkedin.com/in/kleidsonadesign",
        },
        {
          platform: "GitHub",
          username: "github.com/kleidsonadesign",
          url: "https://github.com/kleidsonadesign",
        },
        {
          platform: "Portfólio",
          username: "almeida.korvenlab.com",
          url: "https://almeida.korvenlab.com/",
        },
        {
          platform: "Telefone",
          username: "(82) 99945-0453",
          url: "https://wa.me/5582999450453",
        },
      ],
    },
  },
  en: {
    nav: {
      content: "Content",
      trajectory: "Trajectory",
      certifications: "Certifications",
      contact: "Contact",
      language: "EN",
    },
    hero: {
      title: "KLEIDSON ALMEIDA",
      subtitle: "@almeida1r.dev",
      badges: [
        "Mid-Level Software Engineer",
        "AWS & DevOps",
        "Unifacisa (In Progress)",
        "Campina Grande, PB",
      ],
      headline: "Full Stack Software Engineer.",
      headlineAccent: "Specialist in Cloud, SaaS, and AI.",
      summary:
        "6 years of experience: 4+ in freelance and independent development (2019–2024) and 2+ in corporate environments. Specialist in TypeScript, Node.js, React, AWS, and DevOps — focused on scalable SaaS, business impact, and highly available delivery.",
      featuredProjects: "Featured Projects",
      cv: "Resume",
      location: "Campina Grande, PB",
      timezone: "GMT-3",
      projects: [
        { name: "Wagoo", url: "https://wagoobot.com/" },
        { name: "Korven Lab", url: "https://korvenlab.com" },
        { name: "Papufy", url: "https://papufy.com/" },
        { name: "2AVendas", url: "https://2avendas.com/" },
        { name: "INSS Automation" },
      ],
    },
    trajectory: {
      title: "Professional Trajectory",
      educationTitle: "Academic Background",
      experienceTitle: "Corporate Experience",
      freelanceTitle: "Freelance & Independent Work",
      education: [
        {
          id: "unifacisa",
          institution: "Unifacisa",
          degree: "Bachelor's in Information Systems",
          period: "Jan 2023 — Jan 2027",
          description:
            "In progress. Training in software development, system architecture, databases, and software engineering focused on scalable solutions.",
          tags: ["ARCHITECTURE", "SOFTWARE ENGINEERING", "DATABASES", "DEVOPS"],
          active: true,
          logoText: "UF",
        },
        {
          id: "microcamp",
          institution: "Microcamp",
          degree: "Technical Course in Web Development",
          period: "2018 — 2019",
          description:
            "Technical foundation in web development, UI/UX, and programming fundamentals that preceded independent work on digital products.",
          tags: ["WEB", "UI/UX", "HTML", "CSS", "JAVASCRIPT"],
          logoText: "MC",
        },
      ],
      corporate: [
        {
          id: "korven",
          company: "Korven Lab",
          role: "Full Stack Software Engineer | Tech Lead",
          period: "Dec 2025 — Present",
          description:
            "End-to-end technical leadership on SaaS products. Node.js backends with Docker, AWS FinOps with ~30% cost reduction, and conversion-oriented React interfaces.",
          tags: ["NODE.JS", "AWS", "DOCKER", "TYPESCRIPT", "FINOPS"],
          active: true,
          imageKey: "korven",
        },
        {
          id: "inss",
          company: "INSS",
          role: "Infrastructure & Support Analyst",
          period: "Jan 2025 — Present",
          description:
            "Support for critical environments with a DevOps mindset. Python and Shell Script automation reduced incident response time by ~40%.",
          tags: ["DEVOPS", "PYTHON", "SHELL SCRIPT", "AUTOMATION"],
          active: true,
          imageKey: "inss",
        },
        {
          id: "appen",
          company: "Appen",
          role: "QA Analyst",
          period: "Jan 2024 — Dec 2024",
          description:
            "Automated E2E testing with Selenium and Python. Zero-regression releases before production deploys with global engineering teams.",
          tags: ["SELENIUM", "QA", "E2E", "PYTHON"],
          imageKey: "appen",
        },
      ],
      freelance: {
        id: "freelance",
        company: "Independent Development",
        role: "Full Stack Developer | UI/UX Designer",
        period: "Mar 2019 — Dec 2023",
        description:
          "Built web applications and owned SaaS products (Wagoo, 2AVendas, Papufy). JavaScript/TypeScript stack, payment integrations, serverless architecture, and Figma UI design.",
        tags: ["REACT", "NODE.JS", "SAAS", "FIGMA", "STRIPE", "OWASP"],
        logoText: "KA",
      },
    },
    certifications: {
      title: "Top Certifications",
      comingSoon: "Coming soon",
      items: [
        {
          institution: "AMAZON WEB SERVICES",
          title: "Developer Associate (DVA)",
          status: "Active",
          statusColor: "green",
          logo: "AWS",
        },
        {
          institution: "ADAPTA / NVIDIA",
          title: "Prompt Engineering & Generative AI",
          status: "Active",
          statusColor: "green",
          logo: "AI",
        },
        {
          institution: "MICROCAMP",
          title: "WebDesign & UI/UX",
          status: "Active",
          statusColor: "green",
          logo: "MC",
        },
        {
          institution: "MICROSOFT AZURE",
          title: "Azure Fundamentals (AZ-900)",
          status: "Coming soon",
          statusColor: "yellow",
          logo: "AZ",
        },
      ],
    },
    contact: {
      title: "Let's build something together?",
      subtitle: "Open to freelance projects and full-time opportunities",
      footer: "© 2026 Kleidson Almeida. Built with React, Tailwind CSS, and Motion.",
      links: [
        {
          platform: "LinkedIn",
          username: "linkedin.com/in/kleidsonadesign",
          url: "https://linkedin.com/in/kleidsonadesign",
        },
        {
          platform: "GitHub",
          username: "github.com/kleidsonadesign",
          url: "https://github.com/kleidsonadesign",
        },
        {
          platform: "Portfolio",
          username: "almeida.korvenlab.com",
          url: "https://almeida.korvenlab.com/",
        },
        {
          platform: "Phone",
          username: "(82) 99945-0453",
          url: "https://wa.me/5582999450453",
        },
      ],
    },
  },
};
