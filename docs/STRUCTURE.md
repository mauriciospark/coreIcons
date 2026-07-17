# Estrutura do Projeto - CoreIcons Library

Documentação técnica da arquitetura e organização do projeto.

## Índice

- [Visão Geral](#visão-geral)
- [Fluxo de Dados](#fluxo-de-dados)
- [Componentes](#componentes)
- [Arquitetura JavaScript](#arquitetura-javascript)
- [Sistema de Estilos](#sistema-de-estilos)
- [Performance](#performance)

## Visão Geral

```
coreIcons/
├── index.html              # Entry point, estrutura da página
├── style.css               # Estilos globais, animações, tema
├── script.js               # Controlador da UI, eventos
├── data.js                 # Fonte de dados dos ícones
├── core-icons.js           # API JavaScript pública
├── docs/                   # Documentação
├── fotos/                  # Assets de ícones (370+ PNGs)
├── favicon/                # Favicons e manifest PWA
├── css/                    # Estilos adicionais (vazio)
├── javascript/             # Scripts adicionais (vazio)
└── SPARK_TECH.txt          # Arte ASCII da marca
```

## Fluxo de Dados

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   data.js   │────▶│core-icons.js│────▶│  script.js  │
│  (source)   │     │    (API)    │     │   (UI/UX)   │
└─────────────┘     └─────────────┘     └──────┬──────┘
                                                │
                     ┌──────────────────────────┘
                     ▼
              ┌─────────────┐
              │ index.html  │
              │   (DOM)     │
              └─────────────┘
```

### 1. data.js
- **Propósito:** Fonte única de verdade para dados dos ícones
- **Formato:** String multiline com nomes de arquivos
- **Saída:** Array `coreIconsData` com objetos `{name, file}`

### 2. core-icons.js
- **Propósito:** API JavaScript para acesso programático
- **Dependências:** `data.js` (opcional)
- **Saída:** Objeto global `CoreIcons` com métodos utilitários

### 3. script.js
- **Propósito:** Controlador da interface do usuário
- **Dependências:** `core-icons.js` ou `data.js`
- **Funções:**
  - Inicialização
  - Eventos de interação
  - Renderização dinâmica
  - Gestão de estado (busca, visualização)

## Componentes

### HTML (index.html)

#### Estrutura Semântica

```html
<body>
  <header>        <!-- Brand e logo -->
  <main>          <!-- Busca, grid, resultados -->
    <div class="search-section">
    <div class="toolbar">
    <div id="icons-grid">
    <div id="no-results">
  </main>
  <div id="toast">      <!-- Notificações -->
  <div id="icon-modal"> <!-- Modal detalhes -->
  <footer>        <!-- Copyright -->
</body>
```

#### Pontos de Inserção JavaScript

| ID | Propósito |
|----|-----------|
| `icons-grid` | Container para cards de ícones |
| `search-input` | Campo de busca |
| `results-count` | Contador de resultados |
| `no-results` | Mensagem de busca vazia |
| `toast` | Notificações temporárias |
| `icon-modal` | Modal com detalhes do ícone |

### CSS (style.css)

#### Sistema de Design

```css
:root {
  /* Cores */
  --color-bg: #0a0f1a;
  --color-surface: #0f172a;
  --color-surface-2: #162033;
  --color-text: #e2e8f0;
  --color-text-secondary: #94a3b8;
  --color-primary: #0ea5e9;
  --color-secondary: #6366f1;
  
  /* Sombras 3D */
  --shadow-3d: 0 20px 40px rgba(0,0,0,0.4), ...;
  
  /* Animações */
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

#### Componentes Principais

| Classe | Descrição |
|--------|-----------|
| `.icon-card` | Card individual do ícone |
| `.icon-card-inner` | Container interno para efeito 3D |
| `.search-box` | Campo de busca estilizado |
| `.view-toggle` | Botões de alternância de visualização |
| `.modal` | Overlay de detalhes |
| `.toast` | Notificação flutuante |

### JavaScript (script.js)

#### Módulos Funcionais

```javascript
// Configuração
function getPublicSiteBase()
function publicImageUrl(icon)

// Estado
let icons = [];
let currentView = 'grid';
let searchQuery = '';

// Inicialização
function init()
function loadIcons()

// Eventos
function setupEventListeners()
function setupModalListeners()

// Renderização
function renderIcons()
function createIconCard(icon)
function bindCardTilt(card, inner)

// Interatividade
function openIconModal(icon)
function copyText(text, toastMsg)
function handleSearch(e)
function setView(view)

// Utilidades
function debounce(func, wait)
function formatIconName(name)
```

## Arquitetura JavaScript

### Padrão: IIFE (Immediately Invoked Function Expression)

```javascript
(function () {
  'use strict';
  
  // Escopo privado
  // Não polui namespace global exceto CoreIcons
  
})();
```

### Encadeamento de Fontes de Dados

```javascript
function loadIcons() {
  // Tentativa 1: API CoreIcons
  if (typeof CoreIcons !== 'undefined' && CoreIcons.getAll().length > 0) {
    icons = CoreIcons.getAll().map(...);
  } 
  // Tentativa 2: Dados brutos
  else if (typeof coreIconsData !== 'undefined') {
    icons = coreIconsData.map(...);
  } 
  // Fallback: array vazio
  else {
    console.error('coreIconsData not found');
    icons = [];
  }
}
```

### Event Delegation

Eventos são registrados diretamente em elementos específicos devido à natureza estática do DOM após renderização.

## Sistema de Estilos

### Metodologia BEM

```css
/* Block */
.icon-card { }

/* Element */
.icon-card__image { }
.icon-card__name { }

/* Modifier */
.icon-card--selected { }
.icon-card--large { }
```

### Animações 3D

```css
.icon-card-inner {
  transition: transform 0.3s var(--ease-spring);
  transform-style: preserve-3d;
}

/* Efeito de inclinação via JavaScript */
.icon-card-inner.tilted {
  transform: rotateX(10deg) rotateY(15deg) translateZ(12px);
}
```

### Responsividade

```css
/* Mobile First */
.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}

/* Tablet */
@media (min-width: 640px) {
  .icons-grid { gap: 1.25rem; }
}

/* Desktop */
@media (min-width: 1024px) {
  .icons-grid { gap: 1.5rem; }
}
```

## Performance

### Otimizações Implementadas

| Técnica | Implementação |
|---------|---------------|
| Lazy Loading | `loading="lazy"` em todas as imagens |
| Debounce | Busca com atraso de 200ms |
| Virtualização | Renderização condicional (não implementada ainda) |
| Caching | Dados carregados uma única vez |
| Minificação | CSS e JS podem ser minificados para produção |

### Métricas de Referência

- **Tamanho de data.js:** ~5KB
- **Tamanho de core-icons.js:** ~4KB
- **Tamanho de script.js:** ~13KB
- **Total JS:** ~22KB (minified: ~8KB)
- **Total CSS:** ~13KB (minified: ~4KB)

### Boas Práticas

1. **Evite layout thrashing:** Leituras e escritas em batch
2. **Use transform/opacity:** Para animações GPU-accelerated
3. **Debounce em eventos:** Limitar frequência de handlers
4. **will-change:** Aplicado apenas durante animações

## Segurança

### Sanitização

```javascript
// Escape de atributos HTML
function escapeAttr(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}
```

### CSP (Content Security Policy)

Recomenda-se configurar CSP headers ao hospedar:

```
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src https://fonts.gstatic.com;
  img-src 'self' data:;
```

## Extensibilidade

### Pontos de Extensão

1. **Dados customizados:**
   ```javascript
   CoreIcons.useData([...]);
   ```

2. **Caminho base customizado:**
   ```javascript
   window.CORE_ICONS_PUBLIC_BASE = 'https://...';
   ```

3. **Hooks de renderização:**
   ```javascript
   // Sobrescrever createIconCard no script.js
   ```

### Módulos Futuros

```
plugins/
├── vscode-extension/      # Plugin VS Code
├── figma-plugin/          # Plugin Figma
├── cli/                   # Ferramenta de linha de comando
└── api/                   # API REST
```

---

Para mais detalhes sobre implementação, consulte a [API Reference](API.md).
