function weatherData(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let currentCityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  console.log(response.data);

  temperatureElement.innerHTML = Math.round(temperature);
  currentCityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`;
  timeElement.innerHTML = formatDate(date);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
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
