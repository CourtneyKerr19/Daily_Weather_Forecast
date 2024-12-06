const apiKey = '61c3c3b2ea79768d54718ba82bbcbf6d';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';

function getWeather() {
  const cityName = document.getElementById('city').value;

  if(!cityName) {
    alert('Please enter a city name');
    return;
  }
}