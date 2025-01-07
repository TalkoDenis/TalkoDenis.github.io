const totalCountriesInWorld = 195;

function loadCountryData() {
    fetch('countries.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Have problems!');
            }
            return response.json();
        })
        .then(countriesData => {
            const share = calculateCountryShare(countriesData);
            console.log(`Share countries is: ${share.toFixed(2)}%`);
        })
        .catch(error => {
            console.error('Have problems with download:', error);
        });
}

function calculateCountryShare(countriesData) {
    const countryNames = [...new Set(countriesData.map(entry => entry.country))];
    const countryCount = countryNames.length;
    const share = (countryCount / totalCountriesInWorld) * 100;
    return share;
}

document.getElementById('share').textContent = share.toFixed(2)