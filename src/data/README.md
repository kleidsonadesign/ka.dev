# 📁 Sistema de Customização de Projetos

Este diretório contém o sistema de gerenciamento de conteúdo dos Cards de Projeto do portfólio.

## 📝 Como Usar

### Opção 1: Editar os Dados Diretamente (Recomendado)

Para adicionar ou editar projetos, edite o arquivo `projects.ts`:

```typescript
export const projectsData: ProjectData[] = [
  {
    id: "meu-projeto",           // ID único (sem espaços)
    title: "Meu Projeto",        // Título do projeto
    description: "Descrição...", // Descrição curta
    image: "https://...",        // URL da imagem
    tags: ["React", "Node"],     // Array de tecnologias
    link: "https://...",         // Link do projeto
    github: "https://...",       // Link do GitHub
  },
  // Adicione mais projetos aqui...
];
```

### Opção 2: Atualização Dinâmica via JavaScript

Para atualizar um projeto dinamicamente (via console do navegador ou script):

```javascript
// Importar a função (no console do navegador, use o objeto window)
import { updateProject } from './data/projects';

// Atualizar título e imagem do projeto
updateProject("projeto-1", {
  title: "Novo Título do Projeto",
  image: "https://nova-imagem.com/imagem.jpg"
});

// Atualizar descrição
updateProject("projeto-2", {
  description: "Nova descrição detalhada do projeto."
});

// Atualizar tags
updateProject("projeto-3", {
  tags: ["Vue.js", "Firebase", "TypeScript"]
});

// Atualizar múltiplos campos
updateProject("projeto-4", {
  title: "Dashboard Completo",
  description: "Sistema de analytics com gráficos interativos",
  tags: ["React", "D3.js", "Node.js"],
  link: "https://dashboard.exemplo.com",
  github: "https://github.com/usuario/dashboard"
});
```

## 🔑 IDs dos Elementos HTML

Cada card de projeto possui IDs únicos para seus elementos:

- **Card completo**: `{id}` (ex: `projeto-1`)
- **Imagem**: `{id}-image` (ex: `projeto-1-image`)
- **Título**: `{id}-title` (ex: `projeto-1-title`)
- **Descrição**: `{id}-description` (ex: `projeto-1-description`)
- **Container de Tags**: `{id}-tags` (ex: `projeto-1-tags`)
- **Link do Projeto**: `{id}-link` (ex: `projeto-1-link`)
- **Link do GitHub**: `{id}-github` (ex: `projeto-1-github`)

## 🎨 Estrutura de Dados

```typescript
interface ProjectData {
  id: string;           // Identificador único (usado para IDs HTML)
  title: string;        // Título exibido no card
  description: string;  // Descrição curta do projeto
  image: string;        // URL da imagem de capa
  tags: string[];       // Array de tecnologias/tags
  link: string;         // URL do projeto ao vivo
  github: string;       // URL do repositório GitHub
}
```

## 💡 Dicas

1. **IDs únicos**: Sempre use IDs únicos sem espaços (use hífens ou underscores)
2. **Imagens**: Use Unsplash ou URLs de imagens de alta qualidade (recomendado 1080px de largura)
3. **Descrições**: Mantenha descrições concisas (2-3 linhas) para melhor aparência
4. **Tags**: Use 2-4 tags por projeto para evitar excesso visual
5. **Links**: Use "#" para projetos sem link ativo ainda

## 🚀 Adicionar Novo Projeto

Basta adicionar um novo objeto ao array `projectsData` no arquivo `projects.ts`:

```typescript
export const projectsData: ProjectData[] = [
  // ... projetos existentes ...
  {
    id: "novo-projeto-7",
    title: "Meu Novo Projeto",
    description: "Uma descrição incrível do projeto.",
    image: "https://images.unsplash.com/photo-...",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://meu-projeto.com",
    github: "https://github.com/usuario/projeto",
  },
];
```

O projeto será automaticamente renderizado no site! 🎉
