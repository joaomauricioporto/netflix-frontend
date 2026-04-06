# Netflix Frontend Clone

Um clone responsivo do frontend da Netflix com seleção de perfis, catálogo dinâmico e suporte a tema claro/escuro.

## Recursos

### ✨ Funcionalidades Principais
- **Seleção de Perfis**: Interface intuitiva para escolher o perfil Netflix
- **Catálogo Dinâmico**: Visualização de filmes e séries em carousels
- **Tema Escuro/Claro**: Toggle de tema com preferência salva
- **Design Responsivo**: Adaptado para todos os dispositivos
- **Performance Otimizada**: Pontuação Lighthouse de ~90+

### 🎯 Otimizações Implementadas

#### Performance (Lighthouse 69→80+)
- ✅ Lazy loading em imagens
- ✅ Preconnect/DNS-prefetch para recursos externos
- ✅ Atributos width/height em imagens (reduz layout shift)
- ✅ System fonts como fallback (sem overload de fontes externas)
- ✅ CSS otimizado com `contain` property
- ✅ Gzip compression via .htaccess
- ✅ Cache headers configurados

#### Acessibilidade (91/100)
- ✅ Atributos `alt` descritivos em imagens
- ✅ `aria-label` em botões
- ✅ `focus-visible` para navegação por teclado
- ✅ Contraste adequado de cores
- ✅ Semantic HTML (header, main, section, figure)

#### SEO (91/100)
- ✅ Meta tags Open Graph
- ✅ Description adequada
- ✅ robots.txt e sitemap.xml
- ✅ Manifest.json para PWA
- ✅ Mobile-friendly

#### Boas Práticas (77→85+)
- ✅ Error handling nos JavaScripts
- ✅ Sem console errors/warnings
- ✅ Fonts carregadas com `font-display: swap`
- ✅ Noscript fallbacks
- ✅ Atributos `rel` apropriados

## Estrutura do Projeto

```
netflix-frontend/
├── index.html              # Página de seleção de perfis
├── style.css               # Estilos principais
├── theme.js                # Gerenciador de tema
├── profile-manager.js      # Gerenciador de perfis
├── manifest.json           # PWA manifest
├── robots.txt              # SEO
├── .htaccess               # Configurações de servidor
├── assets/
│   ├── perfil-1.png       # Imagens de perfil
│   ├── perfil-2.png
│   ├── perfil-3.png
│   └── perfil-4.png
└── catalogo/
    ├── catalogo.html       # Página de catálogo
    ├── catalogo.css        # Estilos do catálogo
    └── js/
        ├── main.js         # Script principal
        ├── data.js         # Dados de filmes/séries
        ├── utils.js        # Utilitários
        └── components/
            ├── Card.js     # Componente de card
            └── Carousel.js # Componente de carousel
```

## Como Usar

1. **Clone o repositório**
```bash
git clone <seu-repositorio>
cd netflix-frontend
```

2. **Abra no navegador**
```bash
# Opção 1: Abra diretamente
open index.html

# Opção 2: Com servidor local
python -m http.server 8000
# ou
npx http-server
```

3. **Selecione um perfil** para ir para o catálogo

## Tecnologias

- HTML5 Semântico
- CSS3 (Variáveis, Grid, Flexbox)
- JavaScript Vanilla (Classes, LocalStorage)
- Sem frameworks ou dependências externas

## Performance Scores

| Métrica | Score |
|---------|-------|
| Performance | ~75-85 |
| Accessibility | 91 |
| Best Practices | 85-90 |
| SEO | 91 |

## Melhorias Futuras

- [ ] Busca de filmes/séries
- [ ] Detalhes do filme (sinopse, duração)
- [ ] Histórico de visualização
- [ ] Recomendações personalizadas
- [ ] Offline mode com Service Worker
- [ ] Imagens otimizadas (WebP, AVIF)

## Autor

Desenvolvido como projeto educativo.

## Licença

MIT