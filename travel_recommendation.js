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

/*
            

            resultDiv.innerHTML = resultHtml;
*/

/*

            if (input === 'country') {
                data.countries.forEach(country => {
                    resultHtml += `<h2>${country.name}</h2>`;
                    country.cities.forEach(city => {
                        resultDiv.innerHTML += `
                        <h3>${city.name}</h3>
                        <img src="${city.imageUrl}" alt="${city.name}">
                        <p>${city.description}</p>`;
                    });
                });
            }

            else if (input === 'temple') {
                data.temples.forEach(temple => {
                    resultDiv.innerHTML += `
                    <h3>${temple.name}</h3>
                    <img src="${temple.imageUrl}" alt="${temple.name}">
                    <p>${temple.description}</p>`;
                });
            }

            else if (input === 'beach') {
                data.beaches.forEach(beach => {
                    resultDiv.innerHTML += `
                    <h3>${beach.name}</h3>
                    <img src="${beach.imageUrl}" alt="${beach.name}" style="width:150px; height:100px;">
                    <p>${beach.description}</p>`;
                });
            }

            else {
                resultDiv.innerHTML = 'Condition not found.';
            }

*/

/*

switch (input) {
                case 'country':
                    data.countries.forEach(country => {
                        resultDiv.innerHTML += `<img src="${city.imageUrl}">`;
                        country.cities.forEach(city => {
                            resultDiv.innerHTML += `
                                <h3>${country.name}, ${city.name}</h3>
                                <p>${city.description}</p>
                            `;
                        });
                    });
                    break;
                case 'temple':
                    data.temples.forEach(temple => {
                        resultDiv.innerHTML += `
                            <img src="${temple.imageUrl}">
                            <h3>${temple.name}</h3>
                            <p>${temple.description}</p>
                        `;
                    });
                    break;
                case 'beach':
                    data.beaches.forEach(beach => {
                        resultDiv.innerHTML += `
                            <img src="${beach.imageUrl}">
                            <h3>${beach.name}</h3>
                            <p>${beach.description}</p>
                        `;
                    });
                    break;
                default:
                    resultDiv.innerHTML = '<p>Please enter "country", "temple", or "beach" to get recommendations.</p>';
                    break;
            }

*/