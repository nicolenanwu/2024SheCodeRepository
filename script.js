function currentTemp(response) {
  console.log(response.data);
  let temperature = response.data.temperature.current;
  let pageTemp = document.querySelector("#current-temperature-value");
  console.log(pageTemp);
  pageTemp.innerHTML = temperature;
  console.log(temperature);
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");

  let apiKey = "33d9b4tf90ef10d3o4b9f0f54d6a01b5";
  let city = searchInputElement.value;
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiURL).then(currentTemp);
  cityElement.innerHTML = city;
  console.log(city);
  console.log(apiURL);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
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

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
