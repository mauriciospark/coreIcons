# Exemplos de Uso

## Exemplo 1: Selector de Ícones Simples

```html
<!DOCTYPE html>
<html>
<head>
  <title>Meu Selector de Ícones</title>
  <style>
    .icon-selector {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      max-height: 300px;
      overflow-y: auto;
      padding: 10px;
      border: 1px solid #ccc;
    }
    .icon-option {
      width: 50px;
      height: 50px;
      cursor: pointer;
      padding: 5px;
      border: 2px solid transparent;
      border-radius: 4px;
    }
    .icon-option:hover {
      border-color: #007acc;
      background: #f0f0f0;
    }
    .icon-option.selected {
      border-color: #007acc;
      background: #e3f2fd;
    }
    .search-box {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h2>Selecione um Ícone</h2>
  <input type="text" id="search" class="search-box" placeholder="Buscar ícone...">
  <div id="icon-container" class="icon-selector"></div>
  <p>Ícone selecionado: <span id="selected">Nenhum</span></p>

  <!-- Inclua o data.js da CoreIcons -->
  <script src="caminho/para/coreIcons/data.js"></script>
  
  <script>
    const container = document.getElementById('icon-container');
    const searchInput = document.getElementById('search');
    const selectedSpan = document.getElementById('selected');
    let selectedIcon = null;

    function renderIcons(icons) {
      container.innerHTML = icons.map(icon => `
        <img 
          src="caminho/para/coreIcons/fotos/${icon.file}" 
          class="icon-option" 
          data-name="${icon.name}"
          title="${icon.name}"
          onclick="selectIcon('${icon.name}')"
        >
      `).join('');
    }

    function selectIcon(name) {
      document.querySelectorAll('.icon-option').forEach(el => {
        el.classList.toggle('selected', el.dataset.name === name);
      });
      selectedIcon = name;
      selectedSpan.textContent = name;
    }

    // Busca
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = coreIconsData.filter(icon =>
        icon.name.toLowerCase().includes(query)
      );
      renderIcons(filtered);
    });

    // Render inicial
    renderIcons(coreIconsData.slice(0, 50)); // Primeiros 50
  </script>
</body>
</html>
```

## Exemplo 2: VS Code Extension

```typescript
// extension.ts
import * as vscode from 'vscode';
import * as path from 'path';

const coreIconsData = [
  { name: "react", file: "react.png" },
  // ... importar ou carregar de arquivo
];

export function activate(context: vscode.ExtensionContext) {
  const provider = vscode.languages.registerCompletionItemProvider(
    'markdown',
    {
      provideCompletionItems(document, position) {
        return coreIconsData.map(icon => {
          const item = new vscode.CompletionItem(
            `icon:${icon.name}`,
            vscode.CompletionItemKind.Text
          );
          item.detail = `Ícone ${icon.name}`;
          item.documentation = new vscode.MarkdownString(
            `![${icon.name}](caminho/para/fotos/${icon.file})`
          );
          return item;
        });
      }
    },
    ':'
  );

  context.subscriptions.push(provider);
}
```

## Exemplo 3: CLI para Listar Ícones

```javascript
#!/usr/bin/env node
// icon-list.js

const fs = require('fs');
const path = require('path');

// Ler data.js e extrair dados
const dataPath = path.join(__dirname, 'data.js');
const dataContent = fs.readFileSync(dataPath, 'utf8');

// Extrair array (simplificado)
const icons = eval(dataContent.replace('const coreIconsData = ', ''));

// Comandos
const command = process.argv[2];

switch (command) {
  case 'list':
    icons.forEach(icon => console.log(icon.name));
    break;
    
  case 'count':
    console.log(`Total: ${icons.length} ícones`);
    break;
    
  case 'find':
    const query = process.argv[3];
    const found = icons.filter(i => 
      i.name.includes(query)
    );
    found.forEach(i => console.log(i.name));
    break;
    
  case 'path':
    const name = process.argv[3];
    const icon = icons.find(i => i.name === name);
    if (icon) {
      console.log(path.join(__dirname, 'fotos', icon.file));
    }
    break;
    
  default:
    console.log(`
Uso: node icon-list.js [comando]

Comandos:
  list        Lista todos os ícones
  count       Mostra total de ícones
  find [term] Busca ícones por termo
  path [nome] Mostra caminho completo do ícone
    `);
}
```

Uso:
```bash
node icon-list.js list
node icon-list.js find react
node icon-list.js path react
```

## Exemplo 4: Figma Plugin

```javascript
// figma-plugin/code.js

const icons = [
  { name: "react", file: "react.png" },
  // ...
];

figma.showUI(__html__, { width: 300, height: 400 });

figma.ui.postMessage({ type: 'icons', icons });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'insert-icon') {
    const icon = icons.find(i => i.name === msg.name);
    if (icon) {
      // Carregar imagem e criar no canvas
      const image = await figma.createImage(
        await fetch(`fotos/${icon.file}`).then(r => r.arrayBuffer())
      );
      
      const node = figma.createRectangle();
      node.fills = [{ type: 'IMAGE', imageHash: image.hash, scaleMode: 'FIT' }];
      node.resize(64, 64);
      
      figma.currentPage.appendChild(node);
      figma.currentSelection = [node];
    }
  }
};
```

```html
<!-- figma-plugin/ui.html -->
<input type="text" id="search" placeholder="Buscar...">
<div id="icons"></div>

<script>
  const container = document.getElementById('icons');
  const search = document.getElementById('search');

  window.onmessage = (event) => {
    if (event.data.pluginMessage.type === 'icons') {
      renderIcons(event.data.pluginMessage.icons);
    }
  };

  function renderIcons(icons) {
    container.innerHTML = icons.map(icon => `
      <div onclick="select('${icon.name}')">
        <img src="fotos/${icon.file}" width="32">
        <span>${icon.name}</span>
      </div>
    `).join('');
  }

  function select(name) {
    parent.postMessage({ pluginMessage: { type: 'insert-icon', name } }, '*');
  }

  search.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    // Filtrar e re-renderizar
  });
</script>
```

## Exemplo 5: Gerador de README Automático

```javascript
// generate-readme.js

const fs = require('fs');

const data = require('./data.js');

const iconsByLetter = data.coreIconsData.reduce((acc, icon) => {
  const letter = icon.name[0].toUpperCase();
  if (!acc[letter]) acc[letter] = [];
  acc[letter].push(icon.name);
  return acc;
}, {});

let markdown = '# Ícones Disponíveis\n\n';

Object.keys(iconsByLetter).sort().forEach(letter => {
  markdown += `## ${letter}\n\n`;
  iconsByLetter[letter].forEach(name => {
    markdown += `- ${name}\n`;
  });
  markdown += '\n';
});

fs.writeFileSync('ICONS_LIST.md', markdown);
console.log('Lista gerada!');
```

## Exemplo 6: API REST Simples (Node.js)

```javascript
// server.js
const express = require('express');
const cors = require('cors');
const icons = require('./data.js').coreIconsData;

const app = express();
app.use(cors());

// Listar todos
app.get('/api/icons', (req, res) => {
  res.json(icons);
});

// Buscar
app.get('/api/icons/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  const results = icons.filter(icon =>
    icon.name.toLowerCase().includes(query)
  );
  res.json(results);
});

// Obter um específico
app.get('/api/icons/:name', (req, res) => {
  const icon = icons.find(i => i.name === req.params.name);
  if (icon) {
    res.json(icon);
  } else {
    res.status(404).json({ error: 'Ícone não encontrado' });
  }
});

// Servir arquivos estáticos
app.use('/fotos', express.static('fotos'));

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});
```

Endpoints:
```
GET /api/icons           # Lista todos
GET /api/icons/search?q=react  # Busca
GET /api/icons/react     # Detalhes de um ícone
GET /fotos/react.png     # Arquivo do ícone
```

---

Para mais informações sobre a estrutura de dados, veja `API.md`.
