# Changelog - CoreIcons Library

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

## [1.0.5] - 2026-07-19

### Adicionado

- **Botão de estrelas do GitHub** no header com contagem em tempo real
- Design com ícone do GitHub e estrela dourada
- Integração com API do GitHub para busca de estrelas
- Click no botão abre o repositório no GitHub

### Alterado

- Atualização do README.md para documentar nova funcionalidade

---

## [1.0.4] - 2026-07-17

### Adicionado

- **Novo ícone de automação:**
  - n8n

### Removido

- **Ícones removidos do catálogo:**
  - flex
  - daggerio
  - darcula
  - denyhosts
- **Total atualizado:** 655+ ícones

### Alterado

- Atualização do README.md para refletir novo total de ícones (655+)
- Atualização da versão para 1.0.4

---

## [1.0.3] - 2026-07-14

### Adicionado

- **Novos ícones de linguagens e ferramentas de desenvolvimento:**
  - Aegis, Aix, Alloy, Amiga, Android NDK, Android SDK, Ansible Tower, Antlr, Apex, Appium, Arc, Arduino IDE, Asciidoctor, Asm.js, Asp.net, Atlassian, Aurelia, Autodesk, Awk, Azul
  - Backbone.js, Bamboo, Basecamp, Bash, Behat, Bintray, Bitbucket Pipeline, Blazor, BluePrism, Blueprint, Bower, Broccoli, Brunch, Bucklescript, Buildbot, Bunny
  - C#, C++, Cabal, Caddy, Caffe, CakePHP, Calabash, Capacitor, Carbon, Carto, Cassandra, Celery, CentOS, Ceylon, Chakra, Chai, Chalk, Checkstyle, Chef, Chruby, Cilium, Cirrus, ClamAV, Clang, ClickHouse, Cljs, Clojure, ClojureScript, CloudFoundry, CloudStack, CMake, Coala, Cobol, Cocoapods, CoffeeScript, ColdFusion, CommonLisp, Composer, Conan, Concourse, Consul, Cordova, Couchbase, CouchDB, Coveralls, Cppcheck, Crystal, Ctags, Cucumber
  - D3.js, Dapr, Darcula, Darwin, Dask, Datomic, Db2, DBeaver, Delphi, Denyhosts, Dependency-Check, DevOps, DigitalOcean, Direnv, Django, Dnsmasq, Docker, Doctrine, Dojo, Doxygen, Drush, Drupal, DVC, DynamoDB
  - Eclipse, Ecto, Ember.js, Emacs, Erlang, Esbuild, Etcd, EVM, Exim, Express
  - F#, Fabric, Falcon, Fantom, FastAPI, Fastlane, FaunaDB, Feathers, Fedora, FFmpeg, Figma, Firebase, Firebird, Flask, Flatpak, Flex, Flow, Flutter, Flux, Fossil, FreeBSD, FreeRTOS, FuseBox
- **Novos ícones de infraestrutura cloud e DevOps:**
  - Aiven, Akv2k8s, Altinity, Apache Airflow, Apache Druid, Apache Flink, Apache Kyuubi, Apache Pinot, Appsmith, Aquasec, Argo Workflows, Atlantis, Authelia, Axway
  - Backstage, Benthos, Bigpanda, Blumira, Buddy, Buildpacks, Calico, Canonical, Ceph, Checkmk, Chronograf, Cirrus CI, Cloudhealth, Cloudposse, CockroachDB, Confluent, Coralogix, Cortex, Crossplane, Dagger.io, Deepfence, Devtron, Digitalocean App Platform, Doks, Drone, Dynatrace, Elastic Cloud, Exoscale, Falco, Fargate, Fastly, Fluentd, Fly.io, Gitea, Gitlab CI, Glowroot
- **Total atualizado:** 650+ ícones

### Alterado

- Atualização do README.md para refletir novo total de ícones (650+)
- Atualização da versão para 1.0.3

---

## [1.0.2] - 2026-07-11

### Adicionado

- **Novos ícones de linguagens e ferramentas:**
  - Clojure, Coconut, Diff
- **Novos ícones de build e ferramentas de desenvolvimento:**
  - Meson
- **Novos ícones do ecossistema de IA:**
  - Meta Llama
- **Correção de dados:** Adicionados 5 ícones que estavam faltando no arquivo data.js
- **Total atualizado:** 503+ ícones

### Alterado

- Atualização do README.md para refletir novo total de ícones (503+)
- Atualização da versão para 1.0.2

---

## [1.0.1] - 2026-07-10

### Adicionado

- **Novos ícones de virtualização e infraestrutura:**
  - Proxmox, VMware Workstation, Podman, Multipass, Hyper-V, QEMU, KVM, Nutanix, OpenStack, Citrix
- **Novos frameworks e ferramentas de desenvolvimento:**
  - Hono, Effect, TanStack Query, TanStack Router, Nuxt
- **Novos ícones do ecossistema de IA e dados:**
  - Groq, DuckDB, Turso, Tavily, ScyllaDB, LocalAI
- **Novas ferramentas de produtividade (Developer Experience):**
  - Zed, Ghostty, Dev Containers
- **Total atualizado:** 400+ ícones

### Alterado

- Atualização do README.md para refletir novo total de ícones

---

## [1.0.0] - 2026-06-21

### Adicionado

- **Lançamento inicial** do CoreIcons Library
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

**CoreIcons Library** · © 2026 Maurício Spark
