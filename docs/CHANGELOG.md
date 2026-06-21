# Changelog - Core Icons Library

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

## [1.0.0] - 2026-06-21

### Adicionado

- **Lançamento inicial** do Core Icons Library
- **370+ ícones** para linguagens, frameworks e ferramentas dev
- **Interface 3D** com efeitos de perspectiva e inclinação nos cards
- **Sistema de busca** em tempo real com filtros por nome, slug e arquivo
- **Dupla visualização:** modo grade e modo lista
- **Modal de detalhes** com URL pública e nome do ícone
- **API JavaScript** completa para integração:
  - `CoreIcons.getAll()` - lista todos os ícones
  - `CoreIcons.getBySlug()` - busca por identificador
  - `CoreIcons.search()` - pesquisa por termo
  - `CoreIcons.urlFor()` - gera URL do ícone
  - `CoreIcons.imgHtml()` - gera tag HTML
  - `CoreIcons.setBasePath()` - configura caminho base
- **Atalhos de teclado:**
  - `Ctrl+K` - focar no campo de busca
  - `Shift+Click` - copiar HTML do ícone
  - `Escape` - fechar modal
  - `Enter/Space` - abrir ícone selecionado
- **Sistema de toast** para feedback de cópia
- **Suporte a acessibilidade:**
  - Atributos ARIA em todos os elementos interativos
  - Navegação por teclado completa
  - Suporte a `prefers-reduced-motion`
- **Responsividade:** adaptável a mobile, tablet e desktop
- **Favicons** em múltiplos formatos
- **Manifest.json** para PWA
- **Documentação completa:**
  - README.md
  - API.md
  - USAGE.md
  - CONTRIBUTING.md
  - CHANGELOG.md
  - STRUCTURE.md

### Ícones Incluídos

#### Linguagens de Programação
- Assembly, C, C++, C#, D, Dart, Delphi, Elixir, Erlang, Fortran, Go, Haskell, Java, JavaScript, Julia, Kotlin, Lisp, Lua, MATLAB, Perl, PHP, Python, R, Ruby, Rust, Scala, Swift, TypeScript, Zig

#### Frameworks Frontend
- Angular, Astro, Ember, Foundation, Gatsby, Gridsome, Next.js, Nuxt.js, React, Remix, SolidJS, Svelte, Vue.js

#### Frameworks Backend
- Adonis, Django, Express, Fastify, Flask, Laravel, NestJS, Next.js, Node.js, Rails, Spring, Strapi

#### Mobile
- Android, Capacitor, Flutter, Ionic, iOS, React Native

#### DevOps & CI/CD
- Ansible, AppVeyor, Azure Pipelines, Buildkite, CircleCI, Docker, Drone CI, GitHub Actions, GitLab CI, Jenkins, Kubernetes, Travis CI, Vercel

#### Cloud
- AWS, Azure, Firebase, GCP, Heroku, Netlify, Vercel

#### Ferramentas
- Babel, ESLint, Git, Gulp, Jest, npm, Prettier, Vite, Webpack, Yarn

#### Bancos de Dados
- MongoDB, MySQL, PostgreSQL, Redis, SQLite, Sequelize

#### E muitos mais...

### Tecnologias Utilizadas

- HTML5 semântico
- CSS3 com Grid, Flexbox e variáveis
- JavaScript ES5+ (compatibilidade IE11+)
- Google Fonts (Plus Jakarta Sans)

### Design

- Tema escuro com acentos neon
- Esquema de cores: `#0a0f1a` (bg), `#0ea5e9` (primary), `#6366f1` (secondary)
- Sombras 3D com múltiplas camadas
- Animações suaves com `cubic-bezier`

---

## [Unreleased]

### Planejado

- [ ] Modo escuro/claro toggle
- [ ] Exportar em múltiplos tamanhos
- [ ] API REST para ícones
- [ ] Suporte a SVG
- [ ] Categorias e tags
- [ ] Favoritos e coleções
- [ ] Integração com VS Code extension
- [ ] CLI para busca de ícones
- [ ] Plugin para Figma

---

## Convenções de Versionamento

Este projeto segue o [Versionamento Semântico](https://semver.org/lang/pt-BR/):

- `MAJOR` - mudanças incompatíveis
- `MINOR` - funcionalidades adicionadas (compatível)
- `PATCH` - correções de bugs (compatível)

---

**Core Icons Library** · © 2026 Maurício Spark
