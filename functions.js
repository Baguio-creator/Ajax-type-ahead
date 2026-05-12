

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

const data = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
 
let results = "";

var cities = [];
fetch(data)
  .then(res => res.json())
  .then(city => cities.push(...city));


function matchingWords(wordsToMatch, cities ) {
  return cities.filter(place => {
    var regEx = new RegExp(wordsToMatch, 'gi');
    return place.city.match(regEx) || place.state.match(regEx);
  });
}

function displayMatches () {
  const getMatches = matchingWords(this.value, cities);
  const html = getMatches.map(place => {
    const regex = new RegExp(this.value, 'gi')
    const highLights = `<span class="hl">${this.value}</span>`;
    const cityName = place.city.replace(regex, highLights);
    const stateName = place.state.replace(regex, highLights);
    return `
      <li>
        <span class="name">${cityName} - ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `
  }).join('');

  suggestions.innerHTML = html;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}



