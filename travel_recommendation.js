const btnSearch = document.getElementById('button');
const btnClear = document.getElementById('clear');

const resetForm = () => {
    document.getElementById("textarea").value = "";
}

btnClear.addEventListener('click', resetForm);

const searchCountry= () => {
    const input = document.getElementById('textarea').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {

            const country = data.countries.find(item => item.name.toLowerCase() === input);
            const city = data.cities.find(item => item.name.toLowerCase() === input);
            const temple = data.temples.find(item => item.name.toLowerCase() === input);
            const beach = data.beaches.find(item => item.name.toLowerCase() === input);

            if (country) {
                const city = cities.city.join(', ');
                const city_description = cities.city_description.join(', ');

                resultDiv.innerHTML += `<h2>${country.name}, ${cities.name}</h2>`;
                resultDiv.innerHTML += `<img src="${cities.imageUrl}" alt="hjh">`;
                resultDiv.innerHTML += `<p>${city_description}</p>`;
                
            }
            else if (temple) {
                const temple_description = temple.temple_description.join(', ');
                resultDiv.innerHTML += `<h2>${temple.name}</h2>`;

                resultDiv.innerHTML += `<h2>${temple.imageUrl}</h2>`;
                resultDiv.innerHTML += `<p>${temple_description}</p>`;
                
            }

            else if (beach) {
                const beach_description = beach.beach_description.join(', ');
                resultDiv.innerHTML += `<h2>${beach.name}</h2>`;

                resultDiv.innerHTML += `<h2>${beach.imageUr}</h2>`;
                resultDiv.innerHTML += `<p>${beach_description}</p>`;
            }

            else {
                resultDiv.innerHTML = 'Condition not found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

btnSearch.addEventListener('click', searchCountry);
