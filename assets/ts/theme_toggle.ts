// Получаем сохраненную тему из localStorage (тип будет string | null)
const savedTheme: string | null = localStorage.getItem('theme');

// Если тема была сохранена как "dark", включаем темную тему
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// Функция для переключения темы
function toggleTheme(): void {
    document.body.classList.toggle('dark-mode');
    const currentTheme: string = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme); // Сохраняем выбор темы в localStorage
}

// Получаем элемент кнопки с id 'themeToggle' и проверяем его тип
const themeToggleButton: HTMLElement | null = document.getElementById('themeToggle');

// Проверяем, существует ли элемент с таким id
if (themeToggleButton) {
    themeToggleButton.addEventListener('click', toggleTheme);
}
