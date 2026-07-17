# Guia de Contribuição - CoreIcons Library (Linhagem SPARK)

Obrigado pelo interesse em contribuir com o CoreIcons Library!

## Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Histórico de Mudanças](#histórico-de-mudanças)
- [Adicionando Ícones](#adicionando-ícones)
- [Padrões de Código](#padrões-de-código)
- [Regras de Organização](#regras-de-organização)
- [Processo de Review](#processo-de-review)

## Código de Conduta

- Seja respeitoso e inclusivo
- Aceite críticas construtivas
- Foque no que é melhor para a comunidade

## Como Contribuir

### Reportando Bugs

1. Verifique se o bug já foi reportado
2. Use o template de issue
3. Inclua passos para reproduzir
4. Forneça screenshots se aplicável

### Sugerindo Funcionalidades

1. Abra uma issue com label `enhancement`
2. Descreva o caso de uso
3. Explique por que seria útil

## Histórico de Mudanças

### Versão 1.0.3 (2026-07-14)

[Added]
- Novos ícones de linguagens e ferramentas de desenvolvimento: Aegis, Aix, Alloy, Amiga, Android NDK, Android SDK, Ansible Tower, Antlr, Apex, Appium, Arc, Arduino IDE, Asciidoctor, Asm.js, Asp.net, Atlassian, Aurelia, Autodesk, Awk, Azul
- Novos ícones de frameworks e build tools: Backbone.js, Bamboo, Basecamp, Bash, Behat, Bintray, Bitbucket Pipeline, Blazor, BluePrism, Blueprint, Bower, Broccoli, Brunch, Bucklescript, Buildbot, Bunny
- Novos ícones de linguagens C/C++: C#, C++, Cabal, Caddy, Caffe, CakePHP, Calabash, Capacitor, Carbon, Carto, Cassandra, Celery, CentOS, Ceylon, Chakra, Chai, Chalk, Checkstyle, Chef, Chruby, Cilium, Cirrus, ClamAV, Clang, ClickHouse, Cljs, Clojure, ClojureScript, CloudFoundry, CloudStack, CMake, Coala, Cobol, Cocoapods, CoffeeScript, ColdFusion, CommonLisp, Composer, Conan, Concourse, Consul, Cordova, Couchbase, CouchDB, Coveralls, Cppcheck, Crystal, Ctags, Cucumber
- Novos ícones de linguagens D/E/F: D3.js, Dapr, Darcula, Darwin, Dask, Datomic, Db2, DBeaver, Delphi, Denyhosts, Dependency-Check, DevOps, DigitalOcean, Direnv, Django, Dnsmasq, Docker, Doctrine, Dojo, Doxygen, Drush, Drupal, DVC, DynamoDB
- Novos ícones de ferramentas E/F: Eclipse, Ecto, Ember.js, Emacs, Erlang, Esbuild, Etcd, EVM, Exim, Express, F#, Fabric, Falcon, Fantom, FastAPI, Fastlane, FaunaDB, Feathers, Fedora, FFmpeg, Figma, Firebase, Firebird, Flask, Flatpak, Flex, Flow, Flutter, Flux, Fossil, FreeBSD, FreeRTOS, FuseBox
- Novos ícones de infraestrutura cloud e DevOps: Aiven, Akv2k8s, Altinity, Apache Airflow, Apache Druid, Apache Flink, Apache Kyuubi, Apache Pinot, Appsmith, Aquasec, Argo Workflows, Atlantis, Authelia, Axway
- Novos ícones de DevOps: Backstage, Benthos, Bigpanda, Blumira, Buddy, Buildpacks, Calico, Canonical, Ceph, Checkmk, Chronograf, Cirrus CI, Cloudhealth, Cloudposse, CockroachDB, Confluent, Coralogix, Cortex, Crossplane, Dagger.io, Deepfence, Devtron, Digitalocean App Platform, Doks, Drone, Dynatrace, Elastic Cloud, Exoscale, Falco, Fargate, Fastly, Fluentd, Fly.io, Gitea, Gitlab CI, Glowroot
- Total atualizado para 650+ ícones

[Changed]
- Atualização do README.md para refletir novo total de ícones (650+)
- Atualização da versão para 1.0.3

### Versão 1.0.1 (2026-07-10)

[Added]
- Novos ícones de virtualização e infraestrutura: Proxmox, VMware, Podman, Multipass, Hyper-V, QEMU, KVM, Nutanix, OpenStack, Citrix
- Novos frameworks e ferramentas: Hono, Effect, TanStack Query, TanStack Router, Nuxt
- Novos ícones de IA e dados: Groq, DuckDB, Turso, Tavily, ScyllaDB, LocalAI
- Novas ferramentas de produtividade: Zed, Ghostty, Dev Containers
- Total atualizado para 400+ ícones

[Changed]
- Atualização do README.md para refletir novo total de ícones

### Versão 1.0.0 (2026-06-21)

[Added]
- Catálogo inicial com 370+ ícones
- Interface 3D com animações CSS
- Pesquisa em tempo real
- API JavaScript para integração
- Modal de detalhes com cópia de URL
- Dupla visualização (grade/lista)
- Atalhos de teclado (Ctrl+K, Shift+Click, Escape)
- Responsividade completa

[Changed]
- N/A (versão inicial)

[Fixed]
- N/A (versão inicial)

## Adicionando Ícones

### Requisitos

- **Formato:** PNG
- **Tamanho:** 128x128px ou maior
- **Fundo:** Transparente
- **Estilo:** Flat, moderno, consistente
- **Nomenclatura:** lowercase, separado por hífen

### Processo

1. Adicione o arquivo PNG em `/fotos/`
2. Atualize `data.js` adicionando o nome do arquivo na lista `FILES`
3. Atualize `fotos-list.txt` (gerado automaticamente)
4. Teste no catálogo

### Exemplo

Adicionando ícone para "Flutter":

```javascript
// data.js - adicionar na lista FILES
flutter.png
```

```
/fotos/
  flutter.png    <-- novo arquivo
```

### Convenções de Nome

| Tecnologia | Arquivo | Slug Gerado |
|------------|---------|-------------|
| React | `react.png` | `react` |
| Node.js | `nodejs.png` | `nodejs` |
| C++ | `c++.png` | `c++` |
| TypeScript | `typescript.png` | `typescript` |
| VS Code | `visualstudiocode.png` | `visualstudiocode` |

### Casos Especiais

- **Siglas:** Mantenha em caixa alta se for marca (ex: `AWS`, `GCP`)
- **Pontos:** Remova ou substitua (ex: `node.js` → `nodejs`)
- **Símbolos:** `c++`, `c#` mantêm os símbolos
- **Espaços:** Substitua por hífen ou remova

## Regras de Organização

### Nomenclatura de Branches

Utilize o padrão `tipo/descricao`:

- `feature/nome-da-feature` — novas funcionalidades
- `bugfix/descricao-do-bug` — correção de bugs
- `hotfix/correcao-urgente` — correções críticas em produção
- `docs/atualizacao-documentacao` — atualizações na documentação
- `refactor/melhoria-codigo` — refatoração sem mudança de comportamento

**Exemplos:**
- `feature/adicionar-icone-kubernetes`
- `bugfix/corrigir-pesquisa-mobile`
- `docs/atualizar-readme`
- `refactor/otimizar-busca`

### Estilo de Escrita de Código

**JavaScript:**
- Indentação: 2 espaços
- Variáveis: camelCase
- Constantes: UPPER_SNAKE_CASE
- Funções: camelCase com verbos descritivos
- Comentários: Português para contexto, inglês para código técnico

**CSS:**
- Indentação: 2 espaços
- Classes: kebab-case
- Variáveis CSS: kebab-case
- Comentários: Português

**HTML:**
- Indentação: 2 espaços
- Atributos: ordem alfabética
- Tags: lowercase
- Comentários: Português

### Validações Obrigatórias Antes de Submeter

**Antes de abrir um Pull Request:**

1. **Código:**
   - [ ] Código segue os padrões do projeto
   - [ ] Sem console.log() ou código de debug
   - [ ] Comentários explicativos onde necessário
   - [ ] Cabeçalho de arquivo incluído (se aplicável)

2. **Funcionalidade:**
   - [ ] Feature funciona conforme especificado
   - [ ] Testado manualmente em múltiplos navegadores
   - [ ] Responsividade verificada (mobile, tablet, desktop)
   - [ ] Acessibilidade testada (Tab, Enter, Escape)

3. **Ícones (se aplicável):**
   - [ ] Arquivo PNG adicionado em `/fotos/`
   - [ ] Nome do arquivo adicionado em `data.js`
   - [ ] Ordem alfabética mantida em `data.js`
   - [ ] Ícone segue especificações (128x128px, fundo transparente)

4. **Documentação:**
   - [ ] README.md atualizado (se necessário)
   - [ ] CHANGELOG.md atualizado com [Added]/[Changed]/[Fixed]
   - [ ] Comentários no código explicativos

5. **Git:**
   - [ ] Commits com mensagens claras e descritivas
   - [ ] Branch nomeada corretamente
   - [ ] Sem commits de merge na branch

**Mensagem de Commit Padrão:**

```
tipo: descrição curta

Descrição detalhada opcional.

[Added] lista de adições
[Changed] lista de modificações
[Fixed] lista de correções
```

**Exemplos:**
```
feat: adicionar ícone Kubernetes

Adiciona ícone para Kubernetes ao catálogo.

[Added] kubernetes.png
[Added] entrada em data.js
```

```
fix: corrigir busca em dispositivos móveis

Corrige problema onde a busca não funcionava corretamente em telas pequenas.

[Fixed] debounce em script.js
[Fixed] CSS para mobile
```

## Padrões de Código

### JavaScript

```javascript
// Use strict mode
(function () {
  'use strict';
  
  // Variáveis: camelCase
  var iconCount = 0;
  
  // Constantes: UPPER_SNAKE_CASE
  var MAX_ICONS = 100;
  
  // Funções: verbos descritivos
  function loadIcons() {
    // implementação
  }
  
  // Comentários completos
  /**
   * Busca ícones por termo.
   * @param {string} query - Termo de busca
   * @returns {Array} Resultados da busca
   */
  function searchIcons(query) {
    return icons.filter(/* ... */);
  }
})();
```

### CSS

```css
/* BEM - Block Element Modifier */
.icon-card { }
.icon-card__image { }
.icon-card__name { }
.icon-card--selected { }
.icon-card--large { }

/* Variáveis CSS */
:root {
  --color-primary: #0ea5e9;
  --color-bg: #0a0f1a;
  --spacing-md: 1rem;
}
```

### HTML

```html
<!-- Atributos em ordem alfabética -->
<img alt="React" 
     class="icon" 
     height="48" 
     loading="lazy" 
     src="fotos/react.png" 
     width="48">

<!-- Acessibilidade -->
<button aria-label="Fechar modal" 
        class="close-btn" 
        type="button">×</button>
```

### Cabeçalho de Arquivos

Todos os arquivos devem incluir:

```javascript
/*
  ============================================================================
  PROPRIETÁRIO: Maurício Spark
  MARCA: Spark
  PROJETO: CoreIcons Library
  VERSÃO: 1.0.0
  LINHAGEM: SPARK
  ============================================================================
  COPYRIGHT: © 2026 / Maurício Spark.
  ============================================================================
*/
```

## Processo de Review

### Checklist

- [ ] Código segue os padrões do projeto
- [ ] Testes passam (se houver)
- [ ] Documentação atualizada
- [ ] Ícones seguem as especificações
- [ ] Sem arquivos desnecessários

### Critérios de Aceitação

1. **Qualidade:** Código limpo e bem estruturado
2. **Funcionalidade:** Resolve o problema proposto
3. **Performance:** Não impacta negativamente a performance
4. **Compatibilidade:** Funciona nos navegadores suportados

### Navegadores Suportados

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Opera 67+

## Desenvolvimento Local

### Setup

```bash
# Clone o repositório
git clone https://github.com/mauriciospark/coreicons.git
cd coreicons

# Inicie um servidor local
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### Estrutura de Desenvolvimento

```
coreicons/
├── docs/               # Documentação
├── fotos/              # Ícones PNG
├── css/                # Estilos adicionais
├── javascript/         # Scripts adicionais
├── index.html          # Página principal
├── style.css           # Estilos principais
├── script.js           # Lógica da interface
├── data.js             # Dados dos ícones
└── core-icons.js       # API JavaScript
```

### Testando Mudanças

1. Abra `http://localhost:8000`
2. Verifique o console por erros
3. Teste em diferentes tamanhos de tela
4. Verifique acessibilidade (Tab, Enter, Escape)

## Comunidade

### Canais

- GitHub Issues: bugs e features
- GitHub Discussions: perguntas gerais
- Pull Requests: contribuições de código

### Mantenedores

- Maurício Spark (@mauriciospark)

## Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto.

© 2026 Maurício Spark. Todos os direitos reservados.

---

**Obrigado por contribuir!** 🚀
