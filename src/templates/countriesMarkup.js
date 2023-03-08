export function countriesMarkup (countries) {
return countries.map(({flags, name}) => `
    <li>
        <div class ="country-list-container">
        <img src="${flags.svg}" alt="${name.official}" class="country-img">
        <span class="country-list-name">${name.official}</span>
        </div>
    </li>
`).join('');
}

export function countryMarkup ({flags, name, capital, population, languages}) {
    return `<div class ="country-container">
        <img src="${flags.svg}" alt="${name.official}" class="country-img">
        <span class="country-name"> ${name.official} </span>
    </div>
    <ul "country-params-container">
        <li><span class="country-params">Capital: </span>${capital}</li>
        <li><span class="country-params">Population: </span>${population}</li>
        <li><span class="country-params">Languages: </span><span>${Object.values(languages).join(', ')}</span></li>
    </ul>`
}
