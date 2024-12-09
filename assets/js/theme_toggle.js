// Проверяем сохраненный в localStorage выбор темы
const savedTheme = localStorage.getItem('theme');

// Если тема была сохранена как "dark", включаем темную тему
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// Функция для переключения темы
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme); // Сохраняем выбор темы в localStorage
}

// Добавляем слушатель событий для кнопки переключения темы
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
