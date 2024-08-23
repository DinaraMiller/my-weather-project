function weatherInCity(event) {
  event.preventDefault();
  let searchCityElement = document.querySelector("#search-city-input");
  let currentCityElement = document.querySelector("#city");
  currentCityElement.innerHTML = searchCityElement.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", weatherInCity);
