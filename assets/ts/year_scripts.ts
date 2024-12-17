// Получаем текущий год
const year: number = new Date().getFullYear();

// Получаем элемент с id 'year' и проверяем его тип
const yearElement: HTMLElement | null = document.getElementById('year');

// Проверяем, существует ли элемент с таким id
if (yearElement) {
    yearElement.textContent = year.toString(); // Устанавливаем текстовое содержимое
}
