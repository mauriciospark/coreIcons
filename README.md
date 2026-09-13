# CoreIcons Library

Uma biblioteca profissional de ícones para linguagens, frameworks e ferramentas de desenvolvimento.

![CoreIcons](favicon/coreicons.png)
![CoreIcons](favicon/187.png)
![CoreIcons](favicon/186.png)

## Sobre

**CoreIcons Library** é um catálogo público de ícones técnicos para stacks e ferramentas dev. Inclui recursos de pesquisa, pré-visualização 3D e URLs para uso em documentação e projetos.

- **Versão:** 1.1.0
- **Proprietário:** Maurício Spark
- **Marca:** Spark
- **Linhagem:** SPARK

## Características

- **1067 ícones** para linguagens, frameworks e ferramentas
- **Suporte a duplo formato** - PNG e SVG para cada ícone
- **Interface 3D** com efeitos de perspectiva e inclinação
- **Pesquisa em tempo real** com filtros inteligentes
- **Visualização em grade** com cards interativos
- **URLs públicas** para uso em documentação
- **Modal com opções de cópia** para PNG e SVG
- **API JavaScript** para integração em projetos
- **Suporte a atalhos de teclado** (Ctrl+K para pesquisa)
- **Botão de estrelas do GitHub** com contagem em tempo real
- **SEO otimizado** com meta tags e Open Graph

## Categorias Cobertas

- 💻 **Linguagens de programação** - Python, JavaScript, Java, C++, Go, Rust, TypeScript, PHP, Ruby, Swift, Kotlin, e muitas mais
- 🧩 **Frameworks e bibliotecas** - React, Vue, Angular, Laravel, Django, Spring, Express, Next.js, Nuxt.js, e outras
- 🗄️ **Bancos de dados** - PostgreSQL, MySQL, MongoDB, Redis, SQLite, MariaDB, Oracle, e mais
- 🖥️ **Sistemas operacionais** - Linux, Windows, macOS, Android, iOS, Ubuntu, Debian, CentOS, e outros
- 🛠️ **Softwares e ferramentas** - Docker, Kubernetes, Git, VS Code, GitHub, GitLab, AWS, Azure, Google Cloud, e diversas ferramentas DevOps
- 🤖 **Inteligência Artificial** - TensorFlow, PyTorch, Keras, OpenAI, scikit-learn, Hugging Face, e frameworks de ML/DL
- ⌨️ **Terminais** - PowerShell, Bash, Zsh, Fish, CMD, iTerm2, Hyper, e outros emuladores de terminal
- 🌐 **Navegadores** - Chrome, Firefox, Safari, Edge, Brave, Opera, e navegadores web modernos

## Estrutura do Projeto

```
coreIcons/
├── index.html          # Página principal
├── css/                # Estilos e animações 3D
│   └── style.css
├── javascript/         # Scripts da aplicação
│   ├── data.js         # Dados dos ícones (PNG)
│   ├── datasvg.js      # Dados dos ícones (SVG)
│   ├── core-icons.js   # API JavaScript
│   └── script.js       # Lógica da interface
├── docs/               # Documentação
├── fotos/              # Arquivos de ícones PNG e SVG (1067+ ícones)
├── favicon/            # Favicons e manifest
└── LICENSE             # Licença MIT
```

## Documentação

- [API Reference](docs/API.md) - Documentação completa da API JavaScript
- [Guia de Uso](docs/USAGE.md) - Como usar os ícones em seus projetos
- [Contribuição](docs/CONTRIBUTING.md) - Diretrizes para contribuidores
- [Changelog](docs/CHANGELOG.md) - Histórico de versões
- [Estrutura](docs/STRUCTURE.md) - Arquitetura do projeto

## Uso Rápido

### Catálogo Online

Acesse o catálogo em: `https://mauriciospark.github.io/coreIcons`

### Usando Ícones

No modal do ícone, você encontrará:

- **URL PNG** - Link direto para a imagem PNG
- **URL SVG** - Link direto para a imagem SVG
- **Nome do ícone** - Nome formatado para referência

Basta clicar em "Copiar URL" para copiar o link desejado.

### API JavaScript

```html
<script src="javascript/data.js"></script>
<script src="javascript/datasvg.js"></script>
<script src="javascript/core-icons.js"></script>
<script>
  // Buscar todos os ícones
  const icons = CoreIcons.getAll();

  // Buscar por slug
  const react = CoreIcons.getBySlug("react");

  // Pesquisar
  const results = CoreIcons.search("java");

  // Gerar HTML de imagem
  const html = CoreIcons.imgHtml("react", { width: 48, height: 48 });
</script>
```

### Formatos Disponíveis

- **PNG** - Formato raster, ideal para uso em interfaces web
- **SVG** - Formato vetorial, ideal para escalabilidade e impressão

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

**CoreIcons Library** · ícones para stacks, CI/CD e documentação técnica
