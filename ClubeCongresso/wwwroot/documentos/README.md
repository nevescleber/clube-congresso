# Pasta de Documentos

Esta pasta contém os documentos oficiais do Clube do Congresso que podem ser baixados pelos usuários.

## Arquivos Necessários

Para que os links de download funcionem corretamente, adicione os seguintes arquivos nesta pasta:

- `estatuto.pdf` - Estatuto oficial do clube

## Adicionar Mais Documentos

Se precisar adicionar mais documentos para download:

1. Coloque o arquivo PDF nesta pasta
2. Atualize o link no arquivo `Pages/Index.cshtml`
3. Certifique-se de que o nome do arquivo corresponda ao link

## Estrutura

```
wwwroot/
  documentos/
    ├── README.md (este arquivo)
    └── estatuto.pdf (adicionar aqui)
```

## Nota

Os PDFs não são versionados no Git por padrão. Se precisar versioná-los, atualize o `.gitignore`.
