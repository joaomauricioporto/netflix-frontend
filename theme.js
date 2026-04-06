// ================================
// GERENCIADOR DE TEMA
// ================================

class ThemeManager {
    constructor() {
        this.theme = this.getStoredTheme() || 'dark';
        this.init();
    }

    init() {
        this.applyTheme(this.theme);
        this.setupToggle();
    }

    getStoredTheme() {
        return localStorage.getItem('theme');
    }

    saveTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    applyTheme(theme) {
        const root = document.documentElement;
        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
            this.theme = 'light';
        } else {
            root.setAttribute('data-theme', 'dark');
            this.theme = 'dark';
        }
        this.saveTheme(this.theme);
        this.updateToggleButton();
    }

    toggleTheme() {
        const newTheme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
    }

    setupToggle() {
        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => this.toggleTheme());
        }
    }

    updateToggleButton() {
        const toggleButton = document.getElementById('theme-toggle');
        if (toggleButton) {
            const icon = toggleButton.querySelector('.toggle-icon');
            if (icon) {
                icon.textContent = this.theme === 'dark' ? '☀️' : '🌙';
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});