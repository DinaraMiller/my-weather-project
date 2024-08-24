function weatherData(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let currentCityElement = document.querySelector("#city");
  currentCityElement.innerHTML = response.data.city;
}

function searchCityTemp(city) {
  let apiKey = "b15d302eb82b9077a2o5t35a3bcfcf4f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(weatherData);
}

function weatherInCity(event) {
  event.preventDefault();
  let searchCityElement = document.querySelector("#search-city-input");

  searchCityTemp(searchCityElement.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", weatherInCity);

searchCityTemp("Denver");
