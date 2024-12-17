// Функция для добавления анимации
function addHoverAnimation() {
    const elements = document.querySelectorAll('.animated'); // Все элементы с классом .animated
    elements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.classList.add('hovered'); // Добавляем класс для анимации
        });

        element.addEventListener('mouseleave', () => {
            element.classList.remove('hovered'); // Убираем класс, когда курсор уходит
        });
    });
}

// Вызываем функцию при загрузке страницы
window.addEventListener('DOMContentLoaded', addHoverAnimation);
