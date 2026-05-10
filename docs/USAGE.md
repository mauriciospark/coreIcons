# Guia de Uso - Core Icons Library

Como usar os ícones em diferentes cenários e plataformas.

## Índice

- [Catálogo Online](#catálogo-online)
- [Uso em HTML](#uso-em-html)
- [Uso em Markdown](#uso-em-markdown)
- [Uso em CSS](#uso-em-css)
- [Uso com API JavaScript](#uso-com-api-javascript)
- [Hospedagem Própria](#hospedagem-própria)

## Catálogo Online

A maneira mais simples de usar é acessando o catálogo online:

```
https://mauriciospark.github.io/coreicons
```

### Como Obter URLs

1. Abra o catálogo
2. Pesquise o ícone desejado
3. Clique no ícone para abrir o modal
4. Copie a URL ou o nome

**Dica:** Segure `Shift` e clique para copiar o HTML diretamente.

## Uso em HTML

### URL Pública (GitHub Pages)

```html
<img src="https://mauriciospark.github.io/coreicons/fotos/react.png" 
     alt="React" 
     width="48" 
     height="48">
```

### URL Relativa (Mesmo Servidor)

```html
<img src="fotos/react.png" alt="React" width="48" height="48">
```

### Usando a API

```html
<script src="data.js"></script>
<script src="core-icons.js"></script>
<script>
  document.write(CoreIcons.imgHtml('react', { 
    width: 48, 
    height: 48 
  }));
</script>
```

### Múltiplos Ícones

```html
<div class="tech-stack">
  <img src="fotos/react.png" alt="React" width="32" height="32">
  <img src="fotos/typescript.png" alt="TypeScript" width="32" height="32">
  <img src="fotos/nodejs.png" alt="Node.js" width="32" height="32">
</div>
```

## Uso em Markdown

### README.md

```markdown
## Tecnologias

![React](https://mauriciospark.github.io/coreicons/fotos/react.png)
![TypeScript](https://mauriciospark.github.io/coreicons/fotos/typescript.png)
![Node.js](https://mauriciospark.github.io/coreicons/fotos/nodejs.png)
```

### Com Tamanho Específico (HTML)

```markdown
<img src="https://mauriciospark.github.io/coreicons/fotos/react.png" width="48">
```

### Tabela de Tecnologias

```markdown
| Tecnologia | Ícone |
|------------|-------|
| React | ![React](https://mauriciospark.github.io/coreicons/fotos/react.png) |
| Angular | ![Angular](https://mauriciospark.github.io/coreicons/fotos/angular.png) |
| Vue | ![Vue](https://mauriciospark.github.io/coreicons/fotos/vue.png) |
```

## Uso em CSS

### Background Image

```css
.tech-badge {
  background-image: url('https://mauriciospark.github.io/coreicons/fotos/react.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
}
```

### Pseudo-elementos

```css
.tech-tag::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url('fotos/javascript.png') no-repeat center;
  background-size: contain;
  margin-right: 4px;
}
```

## Uso com API JavaScript

### Configuração Inicial

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://mauriciospark.github.io/coreicons/data.js"></script>
  <script src="https://mauriciospark.github.io/coreicons/core-icons.js"></script>
</head>
<body>
  <div id="app"></div>
  
  <script>
    // Agora CoreIcons está disponível
    console.log(CoreIcons.getAll().length + ' ícones carregados');
  </script>
</body>
</html>
```

### Renderizar Grid de Ícones

```javascript
function renderIconGrid() {
  const container = document.getElementById('icon-grid');
  const icons = CoreIcons.getAll();
  
  container.innerHTML = icons.map(icon => `
    <div class="icon-item" data-slug="${icon.slug}">
      <img src="${CoreIcons.urlFor(icon)}" 
           alt="${icon.name}" 
           width="48" 
           height="48">
      <span>${icon.name}</span>
    </div>
  `).join('');
}
```

### Busca Dinâmica

```javascript
const searchInput = document.getElementById('search');
const resultsContainer = document.getElementById('results');

searchInput.addEventListener('input', debounce((e) => {
  const query = e.target.value;
  const results = CoreIcons.search(query);
  
  resultsContainer.innerHTML = results.map(icon =>
    CoreIcons.imgHtml(icon, { width: 32, height: 32, class: 'search-result' })
  ).join('');
}, 200));

function debounce(fn, ms) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };
}
```

### Dropdown de Seleção

```javascript
function createIconSelect() {
  const select = document.createElement('select');
  const icons = CoreIcons.getAll();
  
  icons.forEach(icon => {
    const option = document.createElement('option');
    option.value = icon.slug;
    option.textContent = icon.name;
    select.appendChild(option);
  });
  
  select.addEventListener('change', (e) => {
    const selected = CoreIcons.getBySlug(e.target.value);
    console.log('Selecionado:', selected);
  });
  
  return select;
}
```

## Hospedagem Própria

### Passos

1. **Clone ou baixe** o repositório
2. **Hospede** em qualquer servidor estático:
   - GitHub Pages
   - Netlify
   - Vercel
   - Surge.sh
   - Apache/Nginx

### GitHub Pages

```bash
# Configurar GitHub Pages nas configurações do repositório
# Branch: main
# Pasta: / (root)
```

### Netlify

```bash
# Drag and drop a pasta do projeto
# Ou conecte o repositório Git
```

### URLs Customizadas

Após hospedar, configure o caminho base:

```javascript
// Antes de usar a API
window.CORE_ICONS_PUBLIC_BASE = 'https://seu-dominio.com/coreicons';
```

### Estrutura de Arquivos Necessária

```
public_html/
├── index.html
├── style.css
├── script.js
├── data.js
├── core-icons.js
├── fotos/
│   ├── react.png
│   ├── angular.png
│   └── ... (370+ ícones)
└── favicon/
    └── coreicons.png
```

## Integrações

### React

```jsx
import { useEffect } from 'react';

function TechIcon({ slug, size = 32 }) {
  useEffect(() => {
    // Carregar scripts dinamicamente
    const loadScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        document.head.appendChild(script);
      });
    };
    
    loadScript('https://mauriciospark.github.io/coreicons/data.js')
      .then(() => loadScript('https://mauriciospark.github.io/coreicons/core-icons.js'));
  }, []);
  
  const getIconHtml = () => {
    if (typeof CoreIcons === 'undefined') return '';
    return CoreIcons.imgHtml(slug, { width: size, height: size });
  };
  
  return <span dangerouslySetInnerHTML={{ __html: getIconHtml() }} />;
}
```

### Vue 3

```vue
<template>
  <span v-html="iconHtml" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  slug: String,
  size: { type: Number, default: 32 }
});

const loaded = ref(false);

const iconHtml = computed(() => {
  if (!loaded.value || typeof CoreIcons === 'undefined') return '';
  return CoreIcons.imgHtml(props.slug, {
    width: props.size,
    height: props.size
  });
});

onMounted(async () => {
  await loadCoreIcons();
  loaded.value = true;
});

async function loadCoreIcons() {
  await loadScript('https://mauriciospark.github.io/coreicons/data.js');
  await loadScript('https://mauriciospark.github.io/coreicons/core-icons.js');
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
</script>
```

### Next.js

```jsx
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <script src="https://mauriciospark.github.io/coreicons/data.js" async />
        <script src="https://mauriciospark.github.io/coreicons/core-icons.js" async />
      </Head>
      <div id="icons-container" />
    </>
  );
}
```

## Dicas

1. **Cache:** Use CDN ou configure cache headers para melhor performance
2. **Lazy Loading:** Adicione `loading="lazy"` em imagens
3. **Alt Text:** Sempre forneça texto alternativo para acessibilidade
4. **Tamanhos:** Use tamanhos múltiplos de 8 para melhor renderização
5. **Formato:** Os ícones estão em PNG com fundo transparente

---

Para mais informações, consulte a [API Reference](API.md).
