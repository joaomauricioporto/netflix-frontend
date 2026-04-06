# 🎬 Netflix Clone - Frontend Completo

Um clone interativo e responsivo da interface da Netflix, desenvolvido com tecnologias web clássicas (HTML, CSS e JavaScript Vanilla). O projeto engloba desde a clássica tela de seleção de perfis até um catálogo dinâmico de filmes e séries, com direito a reprodução de trailers diretamente nos cards.

## ✨ Funcionalidades

- **Seleção de Perfis com Persistência**: Escolha entre diferentes perfis na tela inicial. A seleção é salva no localStorage e o perfil ativo (nome e avatar) é refletido no cabeçalho do catálogo.
- **Catálogo Dinâmico e Modular**: Os trilhos de filmes (carrosséis) são gerados dinamicamente via JavaScript (data.js), permitindo fácil escalabilidade para adicionar novos títulos e categorias.
- **Reprodução de Trailers (Hover)**: Ao passar o mouse sobre a capa de um filme, a interface carrega e exibe o trailer correspondente integrado via iframe do YouTube.
- **Alternância de Tema (Dark/Light Mode)**: Sistema global de temas controlado por variáveis CSS (:root) e gerenciado por uma classe JavaScript (ThemeManager), com as preferências do usuário salvas no navegador.
- **Suporte a PWA**: Configuração inicial de Progressive Web App com manifest.json, permitindo a instalação do projeto como um aplicativo autônomo.
- **Design Responsivo e Animações**: Interface adaptada para diferentes tamanhos de tela, com microinterações suaves, efeitos de transição e animações de entrada (fadeIn, slideUp).

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica.
- **CSS3**: Layouts com Flexbox/Grid, variáveis globais para temas e animações.
- **JavaScript (ES6+)**:
  - Manipulação de DOM.
  - Estrutura baseada em Módulos (import/export).
  - Lógica orientada a objetos (Classes).
  - Consumo de localStorage para persistência de estado.

## 📂 Estrutura do Projeto

A arquitetura do código foi pensada para ser modular e de fácil manutenção:

├── index.html                 # Tela de "Quem está assistindo?"
├── style.css                  # Estilos da tela de perfis
├── theme.js                   # Lógica global de troca de temas
├── profile-manager.js         # Lógica de seleção e persistência de perfil
├── manifest.json              # Configurações do PWA
├── assets/                    # Imagens e avatares
└── catalogo/
    ├── catalogo.html          # Interface principal de filmes/séries
    ├── catalogo.css           # Estilos específicos do catálogo
    └── js/
        ├── main.js            # Ponto de entrada (inicializa a renderização)
        ├── data.js            # Base de dados simulada (JSON) dos títulos
        ├── utils.js           # Funções auxiliares (IDs do YouTube, cálculos)
        └── components/
            ├── Card.js        # Lógica de criação e hover dos filmes (Trailers)
            └── Carousel.js    # Estruturação dos trilhos horizontais

## 🚀 Como rodar o projeto localmente

Como o projeto utiliza JavaScript Modules, não é possível abri-lo apenas dando um duplo clique no arquivo index.html (devido a políticas de segurança dos navegadores). Siga os passos abaixo:

1. Clone o repositório usando o comando no terminal:
   git clone https://github.com/joaomauricioporto/netflix-frontend.git

2. Abra a pasta do projeto em seu editor de código (como o VS Code).

3. Utilize uma extensão de servidor local, como o Live Server, para rodar a aplicação a partir do index.html.

4. Selecione um perfil e explore o catálogo!

---
Desenvolvido por [João Maurício Medeiros Porto](https://github.com/joaomauricioporto/netflix-frontend) 💻🚀
