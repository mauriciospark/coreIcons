# Guia de Contribuição

Obrigado por querer contribuir com a CoreIcons!

## Como Adicionar Novos Ícones

### 1. Preparar o Ícone

- **Formato**: PNG
- **Tamanho**: Mínimo 128x128px, ideal 256x256px ou maior
- **Fundo**: Transparente (preferencial) ou adequado ao ícone
- **Qualidade**: Imagem nítida e reconhecível

### 2. Nomear o Arquivo

Regras para nomes de arquivo:

```
✅ react.png
✅ react-native.png
✅ next-js.png

❌ React.png        (minúsculas)
❌ react icon.png    (espaços - use hífens)
❌ react_icon.png    (underscores - use hífens)
❌ react.jpg         (deve ser PNG)
```

### 3. Adicionar à Pasta

Copie o arquivo PNG para a pasta `fotos/`.

### 4. Registrar em data.js

Abra `data.js` e adicione uma nova entrada ao array:

```javascript
{ name: "nome-do-icone", file: "nome-do-icone.png" }
```

**Importante**: O `name` é o identificador usado na busca. O `file` deve corresponder exatamente ao nome do arquivo (case-sensitive).

### 5. Ordenação

Adicione o ícone na posição alfabética apropriada dentro do array para manter a organização.

### 6. Testar

1. Abra `index.html` no navegador
2. Busque pelo nome do ícone
3. Clique no ícone para verificar se o modal abre corretamente
4. Verifique se não há erros no console (F12)

## Exemplo Completo

Quer adicionar um ícone para "TurboRepo":

1. Salve o arquivo como `turborepo.png` em `fotos/`
2. Em `data.js`, encontre a seção "T" e adicione:
   ```javascript
   { name: "turborepo", file: "turborepo.png" },
   ```
3. Teste a busca por "turbo" ou "turborepo"

## Checklist

- [ ] Arquivo em formato PNG
- [ ] Nome do arquivo em minúsculas
- [ ] Sem espaços no nome (use hífens)
- [ ] Adicionado à pasta `fotos/`
- [ ] Registrado em `data.js`
- [ ] Posição alfabética correta
- [ ] Testado na interface
- [ ] Sem erros no console

## Reportar Problemas

Encontrou um ícone que não aparece?

1. Verifique se o arquivo existe em `fotos/`
2. Compare o nome em `data.js` com o nome do arquivo (case-sensitive!)
3. Abra o console do navegador (F12) e procure por erros 404
4. Reporte com detalhes do erro

## Sugestões

Tem uma sugestão de ícone para adicionar?

- Abra uma issue descrevendo o ícone
- Ou envie diretamente seguindo este guia

---

Agradecemos sua contribuição!
