function makeMarkupList(data) {
  console.log(data);
  const markupList = `
  <li class="countri-item">
    <img
      src="${data[0].flags.svg}"
      alt="flag of${data[0].name.official}"
      width="100"
    />
    <p>${data[0].name.official}</p>
  </li>
     `;
  generateContant(markupList);

  console.log(markupList);
  return markupList;
}

function makeMarkupCountryInfo(data) {
  const markupCountryInfo = `
  <p class="capital">Capital:${data[0].capital}</p>
  <p class="population">Population:${data[0].population}</p>
  <p class="languages">Languages:${data[0].languages}</p>`;

  console.log(markupCountryInfo);
  return markupCountryInfo;
}
// function generateContant(array) {
//   return array.reduce((acc, data) => {
//     return acc + makeMarkupList(data);
//   }, '');
// }
