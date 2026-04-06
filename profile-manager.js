// ================================
// GERENCIADOR DE PERFIL
// ================================

class ProfileManager {
    constructor() {
        this.initProfileButtons();
    }

    initProfileButtons() {
        const profileButtons = document.querySelectorAll('.profile button');
        profileButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.selectProfile(button);
            });
        });
    }

    selectProfile(button) {
        const figure = button.querySelector('figure');
        const img = figure.querySelector('img');
        const figcaption = figure.querySelector('figcaption');
        
        const perfilNome = figcaption.textContent;
        const perfilImagem = img.src;
        
        localStorage.setItem('perfilAtivoNome', perfilNome);
        localStorage.setItem('perfilAtivoImagem', perfilImagem);
        window.location.href = './catalogo/catalogo.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ProfileManager();
});