import './css/styles.css';
import './components/markup';
import Notiflix from 'notiflix';

// import _ from 'lodash.debounce';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 1000;

const inputEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(onTextInput, DEBOUNCE_DELAY));

function clearMarkup() {
  countryListEl.innerHTML = '';
  countryInfoEl.innerHTML = '';
}

function onTextInput(e) {
  clearMarkup();
  fetchCountries();
}

function fetchCountries() {
  const SEARCH = inputEl.value.trim();
  const BASE_URL = 'https://restcountries.com/v3.1/';
  const URL = `${BASE_URL}name/${SEARCH}`;
  fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.length > 5) {
        throw new Error(
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          )
        );
      } else if ((data.length >= 2) & (data.length <= 10)) {
        insertContent(data);
      } else if (data.length === 1) {
        insertDescription(data);

        console.log('🔥 Країна знайдена!!!');
      } else if (data.status === 404) {
        throw new Error(
          Notiflix.Notify.failure('Oops, there is no country with that name')
        );
      }
    })
    .catch(error => {});
}
const createListItem = item => {
  return `<li class="countri-item">
    <img
      src="${item.flags.svg}"
      alt="flag of${item.name.official}"
      width="100"
    />
    <p>${item.name.official}</p>
  </li>
     `;
};
const generateContent = data =>
  data.reduce((acc, item) => acc + createListItem(item), '');

const insertContent = data => {
  clearMarkup();
  const result = generateContent(data);
  countryListEl.insertAdjacentHTML('beforeend', result);
};

function createDescription(item) {
  return `
 
  <p class="countri-item"><img
      src="${item.flags.svg}"
      alt="flag of${item.name.official}"
      width="100"
    /></p>
  <p class="countri-item">${item.name.official}</p>
  <p class="capital">Capital: <span>${item.capital}</span></p>
  <p class="population">Population: <span>${item.population}</span></p>
  <p class="languages">Languages: <span>${Object.values(
    item.languages
  )}</span></p>`;
}
const generateDescription = data =>
  data.reduce((acc, item) => acc + createDescription(item), '');

function insertDescription(item) {
  clearMarkup();
  countryInfoEl.insertAdjacentHTML('beforeend', generateDescription(item));
}
