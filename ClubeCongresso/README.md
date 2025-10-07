# 🏊‍♂️ Clube do Congresso - CLASP

Site institucional do Clube de Assistência dos Servidores Públicos Federais, desenvolvido em ASP.NET Core com Razor Pages.

## 📋 Sobre o Projeto

O Clube do Congresso oferece uma experiência completa de lazer e entretenimento para servidores públicos federais e suas famílias, com:

- 🏊 Piscinas adulto e infantil
- 🎾 Quadras esportivas e de tênis  
- 🎉 Salão nobre para eventos
- 🍽️ Restaurantes e churrasqueira
- 🚤 Pier para embarcações
- 👶 Colônia de férias
- 🌳 Contato com a natureza
- 🔒 Ambiente seguro 24h

## 🚀 Tecnologias Utilizadas

- **Backend**: ASP.NET Core 8.0
- **Frontend**: HTML5, CSS3, JavaScript
- **Bibliotecas**:
  - Swiper.js (carrossel de depoimentos)
  - Fancybox 5.0 (galeria de imagens)
  - Inter Font (tipografia)
- **Responsivo**: Design mobile-first

## 📁 Estrutura do Projeto

```
ClubeCongresso/
├── Pages/
│   ├── Shared/
│   │   └── _Layout.cshtml          # Layout principal
│   ├── Index.cshtml                # Página inicial
│   ├── Index.cshtml.cs            # Code-behind
│   ├── Error.cshtml               # Página de erro
│   └── Privacy.cshtml             # Política de privacidade
├── wwwroot/
│   ├── css/
│   │   ├── globals.css            # Variáveis CSS globais
│   │   └── site.css               # Estilos principais
│   ├── js/
│   │   ├── script.js              # JavaScript principal
│   │   └── site.js                # Scripts adicionais
│   ├── imagens/                   # Imagens do site
│   └── lib/                       # Bibliotecas externas
├── Program.cs                     # Configuração da aplicação
└── appsettings.json              # Configurações
```

## 🛠️ Como Executar

### Pré-requisitos
- .NET 8.0 SDK
- Visual Studio 2022 ou VS Code

### Passos
1. Clone o repositório:
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd ClubeCongresso
   ```

2. Restaure as dependências:
   ```bash
   dotnet restore
   ```

3. Execute a aplicação:
   ```bash
   dotnet run
   ```

4. Acesse no navegador:
   ```
   https://localhost:7289
   ```

## 🎨 Funcionalidades

### 🖼️ Galeria Interativa
- Galeria de fotos com Fancybox
- Zoom, rotação e navegação por teclado
- Miniaturas automáticas
- Responsiva para todos os dispositivos

### 📱 Design Responsivo
- Layout adaptável para desktop, tablet e mobile
- Menu hambúrguer em dispositivos móveis
- Imagens otimizadas com lazy loading

### 🎢 Carrossel de Depoimentos
- Depoimentos de associados
- Navegação automática e manual
- Paginação interativa

### 📧 Formulário de Contato
- Validação client-side
- Campos obrigatórios
- Feedback visual para o usuário

## 🎯 Seções do Site

1. **Hero Section**: Apresentação principal com call-to-action
2. **Benefícios**: Cards com os principais benefícios do clube
3. **CongressoHall**: Informações sobre o espaço para eventos
4. **Galeria**: Fotos das instalações
5. **Depoimentos**: Feedback de associados
6. **Contato**: Informações e formulário

## 🔧 Configurações de Desenvolvimento

### CSS
- Variáveis CSS para cores e espaçamentos
- Design system consistente
- Animações suaves e transições

### JavaScript
- Código modular e bem documentado
- Tratamento de erros
- Compatibilidade com navegadores modernos

## 📞 Contato

**Clube do Congresso - CLASP**
- 📍 SHTN Trecho 1, Conjunto 1B - Brasília/DF
- 📞 (61) 3329-1200
- 📧 contato@clubedocongresso.com.br
- 🕒 Terça a Domingo: 8h às 18h

## 📄 Licença

Este projeto é propriedade do Clube de Assistência dos Servidores Públicos Federais.

---

Desenvolvido com ❤️ para a comunidade de servidores públicos federais.
