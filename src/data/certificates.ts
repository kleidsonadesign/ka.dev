/**
 * CONFIGURAÇÃO DE CERTIFICADOS
 *
 * Este arquivo contém todos os dados dos certificados.
 * Para adicionar ou editar um certificado, basta modificar este arquivo.
 *
 * Estrutura de cada certificado:
 * - id: Identificador único do certificado
 * - title: Nome do certificado
 * - institution: Instituição emissora
 * - date: Data de conclusão
 * - image: URL da imagem do certificado
 * - credentialUrl: Link para verificação do certificado
 * - skills: Array de habilidades adquiridas
 */

export interface CertificateData {
  id: string;
  title: string;
  institution: string;
  date: string;
  image: string;
  credentialUrl: string;
  skills: string[];
}

export const certificatesData: CertificateData[] = [
  {
    id: "cert-1",
    title: "IA Regenerativa e Engenharia de Prompt",
    institution: "Adapta",
    date: "2025",
    image:
      "https://images.unsplash.com/photo-1744640326166-433469d102f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcHJvbXB0JTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzYwNjQ3MDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    credentialUrl: "#",
    skills: ["IA", "Prompt Engineering", "AI Tools"],
  },
  {
    id: "cert-2",
    title: "UX/UI Design",
    institution: "Microcamp",
    date: "2020",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHVpJTIwZGVzaWduJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MDY0NzA5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    credentialUrl: "#",
    skills: ["Photoshop", "HTML", "CSS"],
  },
  {
    id: "cert-3",
    title: "Getting Started with AI on Jetson Nano",
    institution: "Nvidia",
    date: "2025",
    image:"/images/ianvidia.jpeg"
      ,
    credentialUrl: "#",
    skills: ["IA", "Jetson Nano", "Deep Learning"],
  },

  {
    id: "cert-4",
    title: "Design de Interfaces UI/UX com Adobe XD",
    institution: "Cursa",
    date: "2025",
    image:
      "/images/crfcursa.png",
    credentialUrl: "#",
    skills: ["UI/UX", "Adobe XD", "Interface"],
  },
{
    id: "cert-5",
    title: "Codando com IA",
    institution: "Unifacisa",
    date: "2025",
    image:
      "/images/codandocomia.jpeg",
    credentialUrl: "#",
    skills: ["IA", "Vibe Coding", "Engenharia de Prompt"],
  },
  {
    id: "cert-6",
    title: "Introdução a UI/UX",
    institution: "Le Wagon",
    date: "2025",
    image:
      "/images/crflew.png",
    credentialUrl: "#",
    skills: ["UI/UX", "Interface", "Figma"],
  }
];

/**
 * FUNÇÃO DE ATUALIZAÇÃO DE CERTIFICADO
 */
export function updateCertificate(
  certificateId: string,
  updates: Partial<Omit<CertificateData, "id">>,
): void {
  if (updates.image) {
    const imgElement = document.querySelector(
      `#${certificateId}-image`,
    ) as HTMLImageElement;
    if (imgElement) imgElement.src = updates.image;
  }

  if (updates.title) {
    const titleElement = document.querySelector(
      `#${certificateId}-title`,
    );
    if (titleElement) titleElement.textContent = updates.title;
  }

  if (updates.institution) {
    const instElement = document.querySelector(
      `#${certificateId}-institution`,
    );
    if (instElement)
      instElement.textContent = updates.institution;
  }

  if (updates.date) {
    const dateElement = document.querySelector(
      `#${certificateId}-date`,
    );
    if (dateElement) dateElement.textContent = updates.date;
  }

  if (updates.credentialUrl) {
    const linkElement = document.querySelector(
      `#${certificateId}-link`,
    ) as HTMLAnchorElement;
    if (linkElement) linkElement.href = updates.credentialUrl;
  }

  if (updates.skills) {
    const skillsContainer = document.querySelector(
      `#${certificateId}-skills`,
    );
    if (skillsContainer) {
      skillsContainer.innerHTML = updates.skills
        .map(
          (skill) => `
          <span class="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
            ${skill}
          </span>
        `,
        )
        .join("");
    }
  }
}
