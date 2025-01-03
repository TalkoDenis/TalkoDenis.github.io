// Мировой список стран (общее количество стран в мире)
const totalCountriesInWorld = 195;

// Функция для загрузки данных из файла countries.json
function loadCountryData() {
    fetch('countries.json')  // Путь к файлу JSON
        .then(response => {
            if (!response.ok) {
                throw new Error('Сетевой ответ не ок!');
            }
            return response.json();  // Преобразуем ответ в JSON
        })
        .then(countriesData => {
            // Логируем загруженные данные
            console.log('Данные загружены:', countriesData);
            
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

document.getElementById('share').textContent = share.toFixed(2)