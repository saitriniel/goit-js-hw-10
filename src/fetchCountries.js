const BASE_URL = 'https://restcountries.com/v3.1';
const FILTER_URL = '?fields=name,capital,population,flags,languages'

function fetchCountries(name) {
    return fetch(`${BASE_URL}/name/${name}${FILTER_URL}`)
    .then((res) => { return res.json()})
    .catch(err => {
        console.log(err)
      });
}

export {fetchCountries};