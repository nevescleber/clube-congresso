# Troubleshooting - Modais Fancybox

## ✅ Problema Resolvido: Botões quebrando ao fechar modal

**Sintoma:** Quando a modal fecha, há um delay e o botão que foi clicado fica quebrado ou desaparece.

**Causa:** O Fancybox estava movendo o elemento DOM original ao invés de cloná-lo.

**Solução Aplicada:**
1. ✅ Configurado `Html: { clone: true }` para clonar o conteúdo
2. ✅ Adicionado `hideDelay: 0` para remover delay ao fechar
3. ✅ CSS com `will-change: transform` e `backface-visibility: hidden` nos botões
4. ✅ Animações personalizadas mais rápidas (0.2s abrir, 0.15s fechar)

---

## Problema: Modais não abrem ao clicar nos botões

### ✅ Checklist de Verificação

1. **Verifique o Console do Navegador (F12)**
   - Abra o DevTools (F12)
   - Vá na aba "Console"
   - Procure por mensagens de erro
   - Deve aparecer: "Fancybox inicializado com sucesso"
   - Deve mostrar: "Botões institucionais encontrados: 4"
   - Deve mostrar: "Modais encontradas: 4"

2. **Verifique se o Fancybox está carregando**
   - No console, digite: `typeof Fancybox`
   - Deve retornar: `"function"` ou `"object"`
   - Se retornar `"undefined"`, o CDN não está carregando

3. **Verifique se os botões têm os atributos corretos**
   - Inspecione um botão (clique direito > Inspecionar)
   - Deve ter: `data-fancybox`
   - Deve ter: `data-src="#modal-estatuto"` (ou outro modal)

4. **Verifique se as modais existem no HTML**
   - Procure por: `<div id="modal-estatuto" style="display:none;">`
   - Devem existir 4 divs com IDs:
     - `modal-estatuto`
     - `modal-acesso`
     - `modal-convites`
     - `modal-churrasqueira`

### 🔧 Soluções Comuns

#### Problema: CDN bloqueado ou lento
**Solução:** Baixe os arquivos do Fancybox localmente

1. Baixe: https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css
2. Baixe: https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js
3. Coloque em `wwwroot/lib/fancybox/`
4. Atualize as referências em `_Layout.cshtml`

#### Problema: Conflito com outros scripts
**Solução:** Verifique se não há outros lightbox/modal plugins carregados

#### Problema: Ordem de carregamento dos scripts
**Solução:** Certifique-se que a ordem está correta no `_Layout.cshtml`:
```html
1. Swiper
2. Fancybox
3. script.js (seu código customizado)
```

### 🧪 Teste Manual

Abra o console do navegador e execute:

```javascript
// Teste se o Fancybox está disponível
console.log('Fancybox:', typeof Fancybox);

// Teste se os elementos existem
console.log('Botões:', document.querySelectorAll('.institutional-btn[data-fancybox]').length);
console.log('Modais:', document.querySelectorAll('[id^="modal-"]').length);

// Teste abrir modal manualmente
Fancybox.show([{
    src: '#modal-estatuto',
    type: 'inline'
}]);
```

### 📞 Debug Adicional

Se os botões ainda não funcionarem, adicione este código temporariamente no final de `script.js`:

```javascript
// Debug adicional - abrir modal ao clicar
document.querySelectorAll('.institutional-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-src');
        console.log('Tentando abrir:', modalId);
        
        if (typeof Fancybox !== 'undefined') {
            Fancybox.show([{
                src: modalId,
                type: 'inline'
            }]);
        } else {
            alert('Fancybox não está carregado!');
        }
    });
});
```

### 🌐 Alternativa: Usando o CDN correto

Se estiver usando ASP.NET e o `@@` está causando problemas, você tem duas opções:

**Opção 1:** Usar `@@` (escaping do Razor)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@@fancyapps/ui@5.0/dist/fancybox/fancybox.css">
```

**Opção 2:** Usar `@` dentro de uma tag de script literal
```html
@{
    var fancyboxCss = "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css";
}
<link rel="stylesheet" href="@fancyboxCss">
```

### ✨ Mensagens de Console Esperadas

Quando tudo estiver funcionando corretamente, você deve ver:

```
Fancybox inicializado com sucesso
Botões institucionais encontrados: 4
Modais encontradas: 4
Botão clicado: #modal-estatuto (quando clicar)
Modal aberta: #modal-estatuto (quando abrir)
```

### 📱 Teste em Diferentes Navegadores

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile (Chrome/Safari)

### 🆘 Ainda não funciona?

1. Limpe o cache do navegador (Ctrl+Shift+Delete)
2. Faça um hard refresh (Ctrl+F5)
3. Teste em modo anônimo/privado
4. Verifique se há erros de CORS no console
5. Verifique se o firewall/antivírus está bloqueando
