import './css/styles.css';
import debounce from 'lodash.debounce';
import {fetchCountries} from './fetchCountries.js';
import { Notify } from 'notiflix';
import { countriesMarkup, countryMarkup } from './templates/countriesMarkup.js';

const DEBOUNCE_DELAY = 300;
let searchQuery = '';
const refs = {
    input: document.querySelector('#search-box'),
    countiesList: document.querySelector('.country-list'),
    countryCard: document.querySelector('.country-info')
}

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput () {
searchQuery = refs.input.value.trim();
clearSearch ();
if (searchQuery === '') {
    return;
}
fetchCountries(searchQuery)
.then(res => onSearch(res))
.catch((err) =>
    Notify.failure("Oops, there is no country with that name"))
}

function onSearch (res) {
if (res.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.')
} else if (res.length <= 10 && res.length >= 2) {
    createCountriesMarkup (res);
} else 
createCountryCard (res[0]);
}

function createCountriesMarkup (countries) {
    refs.countiesList.innerHTML = countriesMarkup(countries);
}

function createCountryCard (country) {
    refs.countryCard.innerHTML = countryMarkup(country);
}

function clearSearch () {
    refs.countiesList.innerHTML = '';
    refs.countryCard.innerHTML = '';
}
