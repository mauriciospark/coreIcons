# Guia de Contribuição - Core Icons Library

Obrigado pelo interesse em contribuir com o Core Icons Library!

## Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Adicionando Ícones](#adicionando-ícones)
- [Padrões de Código](#padrões-de-código)
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

### Pull Requests

1. Fork o repositório
2. Crie uma branch: `git checkout -b feature/nome-da-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona nova feature'`
4. Push para a branch: `git push origin feature/nome-da-feature`
5. Abra um Pull Request

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
  PROJETO: Core Icons Library
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
