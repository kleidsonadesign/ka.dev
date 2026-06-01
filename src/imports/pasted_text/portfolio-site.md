# Portfolio Website inspired by Kauã Miguel's style

Build a personal portfolio website in Portuguese with a single-page layout, structured in distinct, modular sections with a "grid" or "bento box" design, directly inspired by the design system, layout, colors, and technology stack of [https://kc1t.com/pt-br](https://kc1t.com/pt-br).

The primary goal is to replicate the professional, dark-themed, data-driven, and interactive user experience.

## Design Principles and Styling
- **Overall Style:** Ultra-modern, dark theme, clean typography, emphasis on information hierarchy, modular grid layout ("Bento Box").
- **Theme:** Strict Dark Mode. Background is very dark gray/black (#000000 to #111111).
- **Primary Color:** High-contrast white for text and titles.
- **Accent Color:** Use **Vibrant Purple** (like #7C3AED or #8B5CF6) and **Vibrant Teal/Cyan** (like #14B8A6) for subtle glow effects, borders, and interactive elements, matching the original site's feel.
- **Card Design:** All sections should be contained within rounded-corner cards (`rounded-3xl` or `rounded-2xl`). Cards should have a slightly lighter dark background than the main page (e.g., #1A1A1A), a subtle dark border, and potentially a very soft shadow/glow.
- **Typography:**
  - Headings: Elegant, semi-serif or sophisticated sans-serif (like Playfair Display or Inter).
  - Body: Modern, legible sans-serif (like Inter or Roboto).
  - Use large font sizes for main titles (e.g., in the Hero card).
- **Interactivity:**
  - Subtle micro-interactions on hover (e.g., scale-up, color shift, borders getting slightly brighter).
  - Animated progress bars (circular or linear).
  - Smooth page transitions.

## Tech Stack (as used in the target site)
- **Framework:** Next.js (app router preferred).
- **CSS:** Tailwind CSS.
- **Interactions/Animations:** Framer Motion (or similar for smooth, orchestrated animations).
- **Icons:** A modern, consistent icon set (like React Icons - Phosphor or Lucide).

## Page Structure and Content Modules
Replicate the section order from the original site:

### 1. Main Navigation Bar (Persistent at the top)
- **Left:** Small personal logo/initials (e.g., "K" in a circle).
- **Center:** Main section links: "Conteúdo", "Projetos", "Trajetória", "Certificações".
- **Right:** Tech version indicator (e.g., "v1"), Language switcher (PT/EN with flags), Dark/Light mode toggle (initially only dark mode implemented), and a prominent "Contatar" button with a arrow down icon.

### 2. Hero Section (Header Grid)
This is a grid of interconnected cards, not a single banner:
- **Left Big Card (Identity):** Large elegant font for the name (e.g., "Kaua Miguel"), a smaller username (@username), and the full job title ("Fullstack Developer").
- **Top Right Card (Summary):** A one-liner title ("Desenvolvedor Fullstack. Estudando cloud e IA.") and a paragraph of personal description. List tech tags below (NEXT.JS, TYPESCRIPT, NODE.JS, POSTGRESQL, etc.).
- **Middle Right Card (Profile Data):** List key roles/locations ("Fullstack Dev / AWS Certified / C2 English / FIAP / São Paulo"). Have a prominent green "Disponível" tag.
- **Bottom Left Card (Location/Links):** Current location (icon + city, e.g., São Paulo GMT-3) and current time (animated, ticking). Below, list main contact links: CV, GitHub, LinkedIn, YouTube.
- **Bottom Right (Project Showcase):** A group of thumbnail cards for featured projects (image + title, like 'Can I run it?', 'Análises Automáticas').

### 3. "Projetos Destaque" Section
- Large Elegant Title: "Projetos Destaque".
- Right: A "Ver todos os projetos" button with an arrow.
- A horizontal list or two-column grid of detailed project cards.
- **Each Project Card:**
  - Large thumbnail image/browser frame of the project's UI.
  - An hover effect that shows an arrow (`->`) to visit the project.
  - Project title ("Simplify the management...").
  - Description paragraph.
  - A horizontal list of technology tags (e.g., [NEXT.JS], [IA], [SAAS], [FULLSTACK]).

### 4. "Trajetória Profissional" Section
- Large Elegant Title: "Trajetória Profissional".
- Two columns/main cards within this section:
- **Left Card: "Formação Acadêmica"** (with icon).
  - List entries: Institution (e.g., FIAP), type of degree, specific area, a brief description, date range (e.g., fev 2026 - fev 2027), and technology/topic tags (e.g., ARQUITETURA, MICROSERVIÇOS).
- **Right Card: "Experiência Profissional"** (with icon).
  - Similar entries for jobs: Company name, job title, a detailed list of responsibilities/technologies, date range (e.g., out 2024 - presente), and tags. Include company logos.

### 5. "Top Certificações" Section
- Large Elegant Title: "Top Certificações".
- A grid of card-based certification entries (e.g., 3 columns).
- **Each Certification Card:**
  - Organization logo (EF, Cambridge, AWS, etc.).
  - Title of certification (e.g., "EF SET C2 Proficient").
  - Level/Score (e.g., "81/100" or "Ativo").
  - Date.

### 6. "Vamos construir algo juntos?" (Contact/Footer) Section
- Large Elegant Title: "Vamos construir algo juntos?".
- Subtitle for open to projects ("ABERTO A PROJETOS...").
- **Central Card:** Major contact email ("contato@kc1t.com") with a large hover arrow to copy/email.
- **Bottom Row of Small Cards:** Link cards for main platforms: LinkedIn, GitHub, YouTube, Curriculo. Each with the icon, platform name, username, and an arrow link.

## Detailed Placement
Replicate the exact visual placement and grouping of elements seen in the attached screenshots of the portfolio. Maintain the spacing between cards and sections.

## Placeholders
Use the actual names and structural text from the target site as placeholders (e.g., "Kaua Miguel", "FIAP", "contato@kc1t.com") so the generated structure is correct. I will replace this content with my own.

---