# API Reference - Core Icons Library

Documentação completa da API JavaScript CoreIcons.

## Índice

- [Inicialização](#inicialização)
- [Métodos](#métodos)
- [Exemplos](#exemplos)
- [Objeto Ícone](#objeto-ícone)

## Inicialização

A API é carregada automaticamente ao incluir `core-icons.js`. Requer `data.js` ou dados customizados.

```html
<script src="data.js"></script>
<script src="core-icons.js"></script>
```

### Dados Customizados

```javascript
CoreIcons.useData([
  { name: 'react', file: 'react.png' },
  { name: 'vue', file: 'vue.png' }
]);
```

### Caminho Base

```javascript
// Alterar caminho base para ícones
CoreIcons.setBasePath('assets/icons/');

// Obter caminho atual
const path = CoreIcons.getBasePath();
```

## Métodos

### `version`

Retorna a versão da API.

```javascript
console.log(CoreIcons.version); // '1.0.0'
```

---

### `getAll()`

Retorna todos os ícones disponíveis.

**Retorno:** `Array<Object>` - Array de objetos ícone

```javascript
const icons = CoreIcons.getAll();
// [
//   { slug: 'react', name: 'React', file: 'react.png' },
//   { slug: 'angular', name: 'Angular', file: 'angular.png' },
//   ...
// ]
```

---

### `getBySlug(slug)`

Busca um ícone pelo seu identificador (slug).

**Parâmetros:**
- `slug` (string) - Identificador do ícone

**Retorno:** `Object|null` - Objeto ícone ou null

```javascript
const icon = CoreIcons.getBySlug('react');
// { slug: 'react', name: 'React', file: 'react.png' }

const missing = CoreIcons.getBySlug('inexistente');
// null
```

---

### `search(query)`

Pesquisa ícones por termo.

**Parâmetros:**
- `query` (string) - Termo de busca

**Retorno:** `Array<Object>` - Ícones que correspondem à busca

Busca em:
- Slug do ícone
- Nome de exibição
- Nome do arquivo

```javascript
const results = CoreIcons.search('java');
// Retorna: java, javascript, jenkins, etc.

const nodeResults = CoreIcons.search('node');
// Retorna: nodejs, nodemon, etc.
```

---

### `urlFor(iconOrSlug)`

Gera a URL para um ícone.

**Parâmetros:**
- `iconOrSlug` (string|Object) - Slug ou objeto ícone

**Retorno:** `string` - URL do arquivo

```javascript
// Por slug
const url1 = CoreIcons.urlFor('react');
// 'fotos/react.png'

// Por objeto
const icon = CoreIcons.getBySlug('vue');
const url2 = CoreIcons.urlFor(icon);
// 'fotos/vue.png'
```

---

### `imgHtml(iconOrSlug, attrs?)`

Gera uma tag HTML `<img>` para o ícone.

**Parâmetros:**
- `iconOrSlug` (string|Object) - Slug ou objeto ícone
- `attrs` (Object) - Atributos opcionais:
  - `alt` (string) - Texto alternativo
  - `class` (string) - Classes CSS
  - `width` (number|string) - Largura
  - `height` (number|string) - Altura

**Retorno:** `string` - HTML da imagem

```javascript
// Básico
const img1 = CoreIcons.imgHtml('react');
// '<img src="fotos/react.png" alt="React">'

// Com atributos
const img2 = CoreIcons.imgHtml('angular', {
  width: 48,
  height: 48,
  class: 'icon',
  alt: 'Angular Framework'
});
// '<img src="fotos/angular.png" alt="Angular Framework" class="icon" width="48" height="48">'
```

---

### `setBasePath(path)`

Define o caminho base para os arquivos de ícones.

**Parâmetros:**
- `path` (string) - Novo caminho base

```javascript
CoreIcons.setBasePath('assets/icons/');
CoreIcons.setBasePath('https://cdn.exemplo.com/icons/');
```

---

### `getBasePath()`

Retorna o caminho base atual.

**Retorno:** `string` - Caminho base

```javascript
const path = CoreIcons.getBasePath();
// 'fotos/'
```

---

### `useData(data)`

Carrega dados de ícones customizados.

**Parâmetros:**
- `data` (Array) - Array de objetos `{ name: string, file: string }`

```javascript
CoreIcons.useData([
  { name: 'custom-icon', file: 'custom.png' },
  { name: 'another', file: 'subdir/another.png' }
]);
```

## Objeto Ícone

Estrutura do objeto retornado pelos métodos da API:

```typescript
{
  slug: string,    // Identificador único (ex: 'react')
  name: string,    // Nome formatado (ex: 'React')
  file: string     // Nome do arquivo (ex: 'react.png')
}
```

## Exemplos

### Renderizar Lista de Ícones

```javascript
const container = document.getElementById('icons');
const icons = CoreIcons.getAll();

icons.forEach(icon => {
  const div = document.createElement('div');
  div.innerHTML = `
    ${CoreIcons.imgHtml(icon, { width: 32, height: 32 })}
    <span>${icon.name}</span>
  `;
  container.appendChild(div);
});
```

### Busca com Autocomplete

```javascript
const searchInput = document.getElementById('search');
const resultsDiv = document.getElementById('results');

searchInput.addEventListener('input', (e) => {
  const query = e.target.value;
  const results = CoreIcons.search(query);
  
  resultsDiv.innerHTML = results
    .map(icon => `<div>${icon.name}</div>`)
    .join('');
});
```

### Gerar Markdown com Ícones

```javascript
function generateIconTable() {
  const icons = CoreIcons.getAll();
  
  return icons.map(icon => {
    const url = CoreIcons.urlFor(icon);
    return `| ![${icon.name}](${url}) | ${icon.name} | \`${icon.slug}\` |`;
  }).join('\n');
}
```

### Uso com Frameworks

#### React

```jsx
function Icon({ slug, size = 32 }) {
  const html = CoreIcons.imgHtml(slug, { 
    width: size, 
    height: size 
  });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
```

#### Vue

```vue
<template>
  <span v-html="iconHtml"></span>
</template>

<script>
export default {
  props: ['slug', 'size'],
  computed: {
    iconHtml() {
      return CoreIcons.imgHtml(this.slug, {
        width: this.size || 32,
        height: this.size || 32
      });
    }
  }
}
</script>
```

---

## Notas

- A API é exposta globalmente como `window.CoreIcons`
- Compatível com navegadores modernos e IE11+
- Sem dependências externas
- Caracteres especiais em nomes de arquivo são codificados automaticamente
