# CoreIcons

Biblioteca completa de ícones para linguagens de programação e tecnologias.

## Visão Geral

CoreIcons é uma coleção organizada de mais de 300 ícones representando linguagens de programação, frameworks, ferramentas de desenvolvimento e tecnologias diversas.

## Estrutura do Projeto

```
coreIcons/
├── index.html          # Interface principal da biblioteca
├── data.js            # Array com metadados dos ícones
├── script.js          # Lógica da aplicação
├── style.css          # Estilos da interface
├── fotos/             # Pasta com todos os arquivos PNG
│   ├── react.png
│   ├── angular.png
│   └── ...
└── Docs/              # Documentação
    └── README.md      # Este arquivo
```

## Como Usar

### 1. Acesso Local

Abra o arquivo `index.html` diretamente no navegador ou use um servidor local:

```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .
```

Acesse: `http://localhost:8080`

### 2. Uso dos Ícones em Projetos

Cada ícone está disponível na pasta `fotos/` em formato PNG.

**Referenciando localmente:**
```html
<img src="caminho/para/coreIcons/fotos/react.png" alt="React">
```

**Após hospedar online (GitHub Pages, Netlify, Vercel):**
```html
<img src="https://seu-usuario.github.io/coreicons/fotos/react.png" alt="React">
```

## Formato dos Dados

O arquivo `data.js` contém um array de objetos com a seguinte estrutura:

```javascript
const coreIconsData = [
  { name: "react", file: "react.png" },
  { name: "angular", file: "angular.png" },
  // ...
];
```

### Campos:
- `name`: Nome identificador do ícone
- `file`: Nome do arquivo correspondente na pasta `fotos/`

## Funcionalidades da Interface

- **Busca**: Filtre ícones por nome em tempo real
- **Modal de Detalhes**: Clique em qualquer ícone para ver URL completa e nome
- **Copiar**: Botões para copiar URL ou nome do ícone
- **Lazy Loading**: Carregamento otimizado das imagens
- **Fallback**: Imagem padrão para ícones não encontrados

## Lista de Ícones Disponíveis

### Linguagens de Programação
- C, C++, C#, Java, Python, JavaScript, TypeScript
- Go, Rust, Ruby, PHP, Swift, Kotlin
- Haskell, Scala, Clojure, Elixir, Elm
- E muitas outras...

### Frameworks e Bibliotecas
- React, Angular, Vue, Svelte
- Next.js, Nuxt.js, NestJS
- Django, Laravel, Rails

### Ferramentas e Tecnologias
- Docker, Kubernetes, Terraform
- AWS, Azure, GCP
- Git, GitHub, GitLab
- VS Code, Vim, Sublime Text

### E muito mais...

Veja a lista completa em `data.js` ou na interface web.

## Hospedando Online

### GitHub Pages

1. Crie um repositório no GitHub
2. Envie os arquivos (exceto `Docs/` se desejar)
3. Vá em **Settings > Pages**
4. Selecione a branch `main` e pasta `/ (root)`
5. Acesse `https://seu-usuario.github.io/nome-do-repo`

### Netlify

1. Arraste a pasta do projeto para [netlify.com](https://netlify.com)
2. Ou conecte com GitHub para deploy automático

### Vercel

```bash
npx vercel
```

## Contribuindo

Para adicionar novos ícones:

1. Adicione o arquivo PNG à pasta `fotos/`
2. Adicione a entrada correspondente em `data.js`:
   ```javascript
   { name: "nome-icone", file: "nome-icone.png" }
   ```
3. Certifique-se de que o nome do arquivo corresponde exatamente (incluindo maiúsculas/minúsculas)

## Nomenclatura de Arquivos

- Use nomes em minúsculas
- Use hífens para espaços: `meu-icone.png`
- Formatos aceitos: PNG
- Tamanho recomendado: 256x256px ou maior

## Solução de Problemas

### Ícone não aparece
- Verifique se o arquivo existe em `fotos/`
- Confira se o nome no `data.js` corresponde exatamente ao arquivo
- Limpe o cache do navegador (Ctrl+F5)

### Erro no console
- Abra F12 > Console para ver mensagens de erro
- Verifique se `data.js` está sendo carregado antes de `script.js`

## Licença

Ícones de diversas fontes. Verifique a licença de cada ícone individualmente antes de uso comercial.

## Autor

Criado e mantido por Mauricio (Spark Tech).

---

Para dúvidas ou sugestões, entre em contato.
