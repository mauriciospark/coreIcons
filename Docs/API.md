# Documentação da API

## Estrutura de Dados

### coreIconsData

Array global contendo todos os ícones.

```javascript
type Icon = {
  name: string;    // Nome identificador
  file: string;    // Nome do arquivo PNG
};

declare const coreIconsData: Icon[];
```

## Uso Programático

### Acessar todos os ícones

```javascript
console.log(coreIconsData); // Array completo
console.log(coreIconsData.length); // Total de ícones
```

### Buscar ícone específico

```javascript
// Buscar por nome exato
const react = coreIconsData.find(icon => icon.name === "react");

// Buscar por parte do nome
const jsIcons = coreIconsData.filter(icon => 
  icon.name.includes("js")
);

// Busca case-insensitive
const search = (query) => coreIconsData.filter(icon =>
  icon.name.toLowerCase().includes(query.toLowerCase())
);
```

### Obter URL completa

```javascript
const getIconUrl = (filename) => {
  const baseUrl = window.location.origin;
  return `${baseUrl}/fotos/${filename}`;
};

// Uso
const reactIcon = coreIconsData.find(i => i.name === "react");
const url = getIconUrl(reactIcon.file);
// Resultado: http://localhost:8080/fotos/react.png
```

## Integração com Projetos

### React

```jsx
import { useState, useEffect } from 'react';

function IconGallery() {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    // Carregar data.js dinamicamente ou importar
    setIcons(window.coreIconsData || []);
  }, []);

  return (
    <div className="icon-grid">
      {icons.map(icon => (
        <img
          key={icon.name}
          src={`/fotos/${icon.file}`}
          alt={icon.name}
          title={icon.name}
        />
      ))}
    </div>
  );
}
```

### Vue

```vue
<template>
  <div class="icon-grid">
    <div v-for="icon in icons" :key="icon.name">
      <img :src="`/fotos/${icon.file}`" :alt="icon.name" />
      <span>{{ icon.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: window.coreIconsData || []
    };
  }
};
</script>
```

### Angular

```typescript
// icon.service.ts
import { Injectable } from '@angular/core';

declare const coreIconsData: any[];

@Injectable({
  providedIn: 'root'
})
export class IconService {
  getIcons() {
    return coreIconsData || [];
  }

  searchIcons(query: string) {
    return coreIconsData.filter(icon =>
      icon.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}
```

### Vanilla JavaScript

```javascript
// Carregar ícones
document.addEventListener('DOMContentLoaded', () => {
  if (typeof coreIconsData === 'undefined') {
    console.error('coreIconsData não carregado');
    return;
  }

  // Renderizar todos
  coreIconsData.forEach(icon => {
    const img = document.createElement('img');
    img.src = `fotos/${icon.file}`;
    img.alt = icon.name;
    document.body.appendChild(img);
  });
});
```

## Exportando Dados

### Gerar JSON

```javascript
// No console do navegador
const json = JSON.stringify(coreIconsData, null, 2);
console.log(json);

// Copiar para clipboard
copy(JSON.stringify(coreIconsData, null, 2));
```

### Lista de Nomes

```javascript
const names = coreIconsData.map(icon => icon.name);
console.log(names.join('\n'));
```

### Contagem por Letra

```javascript
const countByLetter = coreIconsData.reduce((acc, icon) => {
  const firstLetter = icon.name[0].toUpperCase();
  acc[firstLetter] = (acc[firstLetter] || 0) + 1;
  return acc;
}, {});

console.log(countByLetter);
// { A: 15, B: 12, C: 20, ... }
```

## Eventos da Interface

A interface principal em `index.html` dispara eventos customizados:

```javascript
// Ícone clicado
document.addEventListener('iconClick', (e) => {
  console.log('Ícone selecionado:', e.detail);
  // { name: "react", file: "react.png" }
});

// Busca realizada
document.addEventListener('search', (e) => {
  console.log('Termo buscado:', e.detail.query);
  console.log('Resultados:', e.detail.results);
});
```

## Funções Utilitárias

```javascript
// Verificar se ícone existe
const hasIcon = (name) => 
  coreIconsData.some(icon => icon.name === name);

// Obter ícones aleatórios
const getRandomIcons = (count = 5) => {
  const shuffled = [...coreIconsData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Agrupar por categoria (se prefixado)
const groupByCategory = () => {
  return coreIconsData.reduce((acc, icon) => {
    const category = icon.name.split('-')[0];
    if (!acc[category]) acc[category] = [];
    acc[category].push(icon);
    return acc;
  }, {});
};
```

## CORS e Hospedagem

Para usar em projetos externos, habilite CORS no servidor:

### Apache (.htaccess)
```
Header set Access-Control-Allow-Origin "*"
```

### Nginx
```nginx
location /fotos/ {
    add_header Access-Control-Allow-Origin *;
}
```

### Servidor Node.js/Express
```javascript
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
```

---

Para mais exemplos, veja `EXAMPLES.md`.
