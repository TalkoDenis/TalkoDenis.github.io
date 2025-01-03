// Мировой список стран (общее количество стран в мире)
const totalCountriesInWorld = 195;

// Функция для загрузки данных из файла countries.json
function loadCountryData() {
    fetch('countries.json')  // Путь к файлу JSON
        .then(response => response.json())  // Преобразуем ответ в JSON
        .then(countriesData => {
            // Теперь у нас есть данные, и мы можем работать с ними
            const share = calculateCountryShare(countriesData);
            console.log(`Доля стран в списке: ${share.toFixed(2)}%`);
        })
        .catch(error => {
            console.error('Ошибка загрузки данных:', error);
        });
}

// Функция для вычисления доли стран
function calculateCountryShare(countriesData) {
    // Получаем количество уникальных стран в списке
    const countryNames = [...new Set(countriesData.map(entry => entry.country))];
    const countryCount = countryNames.length; // Количество уникальных стран
    const share = (countryCount / totalCountriesInWorld) * 100; // Вычисляем долю в процентах
    return share;
}

// Вызываем функцию для загрузки и вычисления доли
loadCountryData();

