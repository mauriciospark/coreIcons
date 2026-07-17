# Arquitetura Técnica — CoreIcons (Linhagem SPARK)

---

## Design Arquitetural

O CoreIcons adota uma arquitetura **Client-Side Static** com separação clara de responsabilidades. O projeto não possui backend, banco de dados ou dependências externas, operando inteiramente no navegador do usuário.

### Padrão Arquitetural

**Static-First Architecture**
- Todos os recursos são estáticos (HTML, CSS, JavaScript, imagens)
- Sem processamento server-side
- Hospedagem em qualquer servidor estático (CDN, GitHub Pages, Netlify, Vercel)
- Cache-friendly para performance otimizada

**Separation of Concerns**
- **Camada de Apresentação:** HTML5 semântico + CSS3
- **Camada de Lógica:** JavaScript vanilla (ES5+)
- **Camada de Dados:** Arquivo `data.js` com lista de ícones
- **Camada de API:** `core-icons.js` para integração programática

---

## Escolhas Técnicas

### Frontend: HTML5 Semântico

**Justificativa:**
- Acessibilidade nativa e SEO-friendly
- Compatibilidade universal com navegadores
- Leveza e performance sem frameworks
- Facilidade de manutenção e atualização

**Implementação:**
- Uso de tags semânticas (`<header>`, `<main>`, `<section>`, `<footer>`)
- Atributos ARIA para acessibilidade
- Estrutura modular para fácil manutenção

### Estilização: CSS3 Puro

**Justificativa:**
- Zero dependências externas
- Performance superior sem frameworks CSS
- Controle total sobre animações e efeitos 3D
- Compatibilidade com IE11+ através de prefixos

**Implementação:**
- CSS Grid e Flexbox para layout responsivo
- Variáveis CSS para consistência de tema
- Transformações 3D para efeitos de perspectiva
- Media queries para adaptação mobile-first

### Lógica: JavaScript Vanilla ES5+

**Justificativa:**
- Compatibilidade ampla (IE11+)
- Performance sem overhead de frameworks
- Curva de aprendizado baixa para contribuidores
- Facilidade de integração em qualquer projeto

**Implementação:**
- Módulo IIFE para encapsulamento
- Event delegation para performance
- Debouncing em busca para otimização
- LocalStorage para preferências do usuário

### Dados: Arquivo JavaScript Inline

**Justificativa:**
- Zero latência de rede (dados carregados instantaneamente)
- Sem necessidade de API ou backend
- Facilidade de atualização manual
- Versionamento simples via Git

**Implementação:**
- Array de strings com nomes de arquivos
- Função de normalização para slugs
- Cache em memória para performance

---

## Fluxo de Dados

### 1. Carregamento Inicial

```
Usuário acessa index.html
    ↓
Browser carrega HTML
    ↓
CSS e JavaScript são baixados
    ↓
data.js é executado → coreIconsData é populado
    ↓
core-icons.js é carregado → API CoreIcons está disponível
    ↓
script.js é executado → Interface é renderizada
```

### 2. Interação de Busca

```
Usuário digita no campo de busca
    ↓
Evento 'input' é disparado (com debounce de 300ms)
    ↓
script.js chama CoreIcons.search(query)
    ↓
core-icons.js filtra coreIconsData
    ↓
Resultado é retornado como array de objetos
    ↓
script.js atualiza o DOM com os ícones encontrados
    ↓
Interface é re-renderizada com animações CSS
```

### 3. Clique em Ícone

```
Usuário clica em um ícone
    ↓
Evento 'click' é capturado
    ↓
script.js obtém dados do ícone via CoreIcons.getBySlug()
    ↓
Modal é preenchido com informações
    ↓
Modal é exibido com animação CSS
    ↓
Usuário pode copiar URL ou HTML
```

### 4. Integração via API

```
Desenvolvedor inclui scripts em seu projeto
    ↓
CoreIcons.setBasePath('/caminho/para/ícones/')
    ↓
CoreIcons.getAll() → Retorna todos os ícones
    ↓
CoreIcons.search('react') → Filtra ícones
    ↓
CoreIcons.imgHtml('react', {width: 32}) → Gera HTML
    ↓
HTML é injetado no DOM do projeto
```

---

## Privacidade de Dados

### Zero Coleta de Dados

O CoreIcons Library **não coleta, armazena ou transmite** qualquer dado do usuário:

- **Sem cookies:** Nenhum cookie é definido
- **Sem analytics:** Nenhuma ferramenta de rastreamento
- **Sem backend:** Nenhum servidor processa dados
- **Sem localStorage persistente:** Apenas preferências temporárias

### Processamento Local

Toda a lógica é executada no navegador do usuário:

- Busca e filtragem são locais
- Ordenação é feita em memória
- Animações são renderizadas pelo navegador
- API JavaScript opera completamente client-side

### Segurança

- **HTTPS obrigatório** em produção
- **CSP (Content Security Policy)** recomendado
- **Subresource Integrity** para scripts externos (se aplicável)
- **Sanitização de HTML** ao gerar tags dinamicamente

---

## Estrutura de Arquivos

```
coreIcons/
├── index.html              # Página principal (entry point)
├── css/
│   └── style.css           # Todos os estilos (669 linhas)
├── javascript/
│   ├── data.js             # Lista de 650+ ícones
│   ├── core-icons.js       # API JavaScript (137 linhas)
│   └── script.js           # Lógica da interface (main logic)
├── fotos/                  # 650+ arquivos PNG
├── favicon/                # Favicons e manifest.json
└── docs/                   # Documentação
    ├── ABOUT.md
    ├── ARCHITECTURE.md
    ├── CONTRIBUTING.md
    └── CHANGELOG.md
```

### Responsabilidades por Arquivo

| Arquivo | Responsabilidade |
|---------|-----------------|
| `index.html` | Estrutura semântica, carregamento de recursos |
| `css/style.css` | Estilização, animações 3D, responsividade |
| `javascript/data.js` | Fonte de dados (lista de ícones) |
| `javascript/core-icons.js` | API pública para integração |
| `javascript/script.js` | Lógica da interface (busca, modal, filtros) |

---

## Performance

### Otimizações Implementadas

1. **Debounce na busca:** 300ms de delay para evitar re-renderizações excessivas
2. **Event delegation:** Um listener para múltiplos elementos
3. **CSS transforms:** Aceleração via GPU para animações 3D
4. **Lazy loading:** Ícones são carregados sob demanda
5. **Cache de navegador:** Recursos estáticos com longa duração

### Métricas Alvo

- **First Contentful Paint (FCP):** < 1.0s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.5s
- **Cumulative Layout Shift (CLS):** < 0.1

---

## Escalabilidade

### Adição de Novos Ícones

1. Adicionar arquivo PNG na pasta `fotos/`
2. Adicionar nome do arquivo em `javascript/data.js`
3. Commit e push para o repositório

### Hospedagem em Escala

- **GitHub Pages:** Suporta até 1GB de arquivos estáticos
- **Netlify:** Bandwidth ilimitada no plano gratuito
- **Vercel:** Edge caching global automático
- **CDN próprio:** Configurável via DNS

---

## Manutenibilidade

### Padrões de Código

- **Indentação:** 2 espaços
- **Nomenclatura:** camelCase para JavaScript, kebab-case para arquivos
- **Comentários:** Português para contexto, inglês para código
- **Semântica:** HTML5 tags apropriadas, classes descritivas

### Versionamento

- **SemVer:** Major.Minor.Patch
- **Git Flow:** main (produção), develop (desenvolvimento)
- **Tags:** v1.0.0, v1.1.0, etc.

---

**CoreIcons Library** — Arquitetura técnica documentada

**Marca:** SPARK | **Linhagem:** SPARK | **Projeto:** CoreIcons Library | **Versão:** 1.0.0
