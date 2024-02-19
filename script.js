// Активировать темную тему при загрузке страницы
toggleTheme('dark');

function toggleTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
        body.classList.replace('dark-theme', 'light-theme');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
    }
}

