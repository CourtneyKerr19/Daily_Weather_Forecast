
function getWeather() {
  const city = document.getElementById('city').value;

  if (!city) {
    alert('Please enter a city name');
    return;
  }
}

//displayDateTime

const apiKey = "90e31457c590fb94d64bb309f1166eba";
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
const forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;