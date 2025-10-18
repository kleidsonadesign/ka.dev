/**
 * CONFIGURAÇÃO DE PROJETOS
 *
 * Este arquivo contém todos os dados dos cards de projeto.
 * Para adicionar ou editar um projeto, basta modificar este arquivo.
 *
 * Estrutura de cada projeto:
 * - id: Identificador único do projeto (usado para IDs HTML)
 * - title: Título do projeto
 * - description: Descrição curta do projeto
 * - image: URL da imagem do projeto (use Unsplash ou outra fonte)
 * - tags: Array de tecnologias/tags do projeto
 * - link: Link para o projeto ao vivo
 * - github: Link para o repositório no GitHub
 */

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "projeto-1",
    title: "SaaS para Coworking",
    description:
      "Sistema de Gerenciamento de Coworking moderno e estilizado focado na produtividade.",
    image:
      "/images/saascw.png",
    tags: ["Figma", "Node.js", "JavaScript"],
    link: "https://www.figma.com/make/JdheE1Iw1DbEoHqY8yKmz7/CW-Coworking?node-id=0-1&p=f&t=cqZB9xCIhHmgeP8U-0&fullscreen=1",
    github: "#",
  },
  {
    id: "projeto-2",
    title: "Vila do Artesão WebSite",
    description:
      "Site feito para divulgar trabalhos da vila do artesão de Campina Grande.",
    image:
      "/images/vila.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://kleidsonadesign.github.io/viladoartesao3.github.io/",
    github:
      "https://kleidsonadesign.github.io/viladoartesao3.github.io/",
  },

  {
    id: "projeto-4",
    title: "Python com Streamlit para Analise de dados",
    description:
      "O objetivo principal é carregar dados de uma planilha Excel e permitir que o usuário explore diferentes aspectos para BI.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MDU4NTEwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Streamlit", "Excel"],
    link: "https://github.com/kleidsonadesign/PintegradorSL",
    github: "https://github.com/kleidsonadesign/PintegradorSL",
  },
  {
    id: "projeto-5",
    title: "App Mobile",
    description:
      "Aplicativo mobile desenvolvido com React Native com integração de APIs e design responsivo.",
    image:
      "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjA1OTczMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Mobile", "API"],
    link: "#",
    github: "#",
  },
  {
    id: "projeto-6",
    title: "Sistema de compra e vendas",
    description: "Sistema de gerenciamento de Mercado.",
    image:
      "https://images.unsplash.com/photo-1752057119009-b6784a9d8dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMG1hcmtldHxlbnwxfHx8fDE3NjA2NDYyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Django", "React", "MySQL"],
    link: "https://github.com/kleidsonadesign/DISPOSITIVOS-M-VEIS-E-IOT-fase1",
    github:
      "https://github.com/kleidsonadesign/DISPOSITIVOS-M-VEIS-E-IOT-fase1",
  },
];

/**
 * FUNÇÃO DE ATUALIZAÇÃO DE PROJETO
 *
 * Use esta função para atualizar um projeto dinamicamente no DOM.
 *
 * Exemplo de uso:
 * updateProject("projeto-1", {
 *   title: "Novo Título",
 *   description: "Nova descrição do projeto",
 *   image: "https://nova-imagem-url.com/imagem.jpg"
 * });
 *
 * @param projectId - ID do projeto a ser atualizado
 * @param updates - Objeto com os campos a serem atualizados
 */
export function updateProject(
  projectId: string,
  updates: Partial<Omit<ProjectData, "id">>,
): void {
  // Atualizar imagem
  if (updates.image) {
    const imgElement = document.querySelector(
      `#${projectId}-image`,
    ) as HTMLImageElement;
    if (imgElement) {
      imgElement.src = updates.image;
    }
  }

  // Atualizar título
  if (updates.title) {
    const titleElement = document.querySelector(
      `#${projectId}-title`,
    );
    if (titleElement) {
      titleElement.textContent = updates.title;
    }
  }

  // Atualizar descrição
  if (updates.description) {
    const descElement = document.querySelector(
      `#${projectId}-description`,
    );
    if (descElement) {
      descElement.textContent = updates.description;
    }
  }

  // Atualizar tags
  if (updates.tags) {
    const tagsContainer = document.querySelector(
      `#${projectId}-tags`,
    );
    if (tagsContainer) {
      tagsContainer.innerHTML = updates.tags
        .map(
          (tag) => `
          <span class="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
            ${tag}
          </span>
        `,
        )
        .join("");
    }
  }

  // Atualizar links
  if (updates.link) {
    const linkElement = document.querySelector(
      `#${projectId}-link`,
    ) as HTMLAnchorElement;
    if (linkElement) {
      linkElement.href = updates.link;
    }
  }

  if (updates.github) {
    const githubElement = document.querySelector(
      `#${projectId}-github`,
    ) as HTMLAnchorElement;
    if (githubElement) {
      githubElement.href = updates.github;
    }
  }
}

/**
 * FUNÇÃO PARA ADICIONAR NOVO PROJETO
 *
 * Para adicionar um novo projeto, basta adicionar um novo objeto ao array projectsData acima.
 * O projeto será automaticamente renderizado no site.
 */
