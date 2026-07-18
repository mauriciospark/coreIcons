# CoreIcons Library

Uma biblioteca profissional de ícones para linguagens, frameworks e ferramentas de desenvolvimento.

![CoreIcons](/favicon/coreicons.png)
![CoreIcons](/favicon/187.png)
![CoreIcons](/favicon/186.png)

## Sobre

**CoreIcons Library** é um catálogo público de ícones técnicos para stacks e ferramentas dev. Inclui recursos de pesquisa, pré-visualização 3D e URLs para uso em documentação e projetos.

- **Versão:** 1.0.4
- **Proprietário:** Maurício Spark
- **Marca:** Spark
- **Linhagem:** SPARK

## Características

- **654+ ícones** para linguagens, frameworks e ferramentas
- **Interface 3D** com efeitos de perspectiva e inclinação
- **Pesquisa em tempo real** com filtros inteligentes
- **Visualização em grade ou lista**
- **URLs públicas** para uso em documentação
- **API JavaScript** para integração em projetos
- **Suporte a atalhos de teclado** (Ctrl+K para pesquisa)

## Estrutura do Projeto

```
coreIcons/
├── index.html          # Página principal
├── style.css           # Estilos e animações 3D
├── script.js           # Lógica da interface
├── data.js             # Dados dos ícones
├── core-icons.js       # API JavaScript
├── docs/               # Documentação
├── fotos/              # Arquivos de ícones PNG
├── favicon/            # Favicons e manifest
└── css/                # Estilos adicionais
```

## Documentação

- [API Reference](docs/API.md) - Documentação completa da API JavaScript
- [Guia de Uso](docs/USAGE.md) - Como usar os ícones em seus projetos
- [Contribuição](docs/CONTRIBUTING.md) - Diretrizes para contribuidores
- [Changelog](docs/CHANGELOG.md) - Histórico de versões
- [Estrutura](docs/STRUCTURE.md) - Arquitetura do projeto

## Uso Rápido

### Catálogo Online

Acesse o catálogo em: `https://mauriciospark.github.io/coreicons`

### API JavaScript

```html
<script src="data.js"></script>
<script src="core-icons.js"></script>
<script>
  // Buscar todos os ícones
  const icons = CoreIcons.getAll();
  
  // Buscar por slug
  const react = CoreIcons.getBySlug('react');
  
  // Pesquisar
  const results = CoreIcons.search('java');
  
  // Gerar HTML de imagem
  const html = CoreIcons.imgHtml('react', { width: 48, height: 48 });
</script>
```

## Licença

© 2026 Maurício Spark. Todos os direitos reservados.

---

**CoreIcons Library** · ícones para stacks, CI/CD e documentação técnica
