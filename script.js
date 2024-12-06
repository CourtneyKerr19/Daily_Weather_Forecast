const apiKey = '61c3c3b2ea79768d54718ba82bbcbf6d';

async function getWeatherData(city) {
  try {
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const weatherData = await response.json();

    if (weatherResponse.ok) {
      displayWeather(weatherData);
    } else {
      throw new Error(weatherData.message || 'Something went wrong');
    } 

    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
    const forecastData = await forecastResponse.json();

    if (forecastResponse.ok) {
      displayHourlyForecast(forecastData.list);
    } else {
      throw new Error(forecastData.message || 'Something went wrong');
    } catch (error) {
      console.error('Error:', error.message );
      alert(`Error: ${error.message}`);
    }
    

    

function displayWeather(data) {
  document.getElementById('date-time').textContent = `${new Date().toLocaleTimeString()}`;
  const city = `${data.name}, ${data.sys.country}`;
  document.getElementById('weather-info').innerHTML = `<p>${city}</p>`;

  const weatherIcon = data.weather[0].icon;
  const description = data.weather[0].description;
  const temp = data.main.temp;
  document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  document.getElementById('weather-icon').style.display = 'block';
  document.getElementById('temp-div').textContent = `${temp}°C - ${description}`;

  displayAdditionalInfo(data);
}

function displayAdditionalInfo(data) {
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const pressure = data.main.pressure;

  const additionalInfoDiv = document.getElementById('additional-info');
  additionalInfoDiv.innerHTML = 
  `<p>Humidity: ${humidity}%</p>
  <p>Wind Speed: ${windSpeed} m/s</p><
  p>Pressure: ${pressure} hPa</p>`;
} 

function displayHourlyForecast(hourlyData) {
  const hourlyForecastDiv = document.getElementById('hourly-forecast');
  hourlyForecastDiv.innerHTML = '';

  hourlyData.forEach((data) => {
    const date = new Date(data.dt * 1000);
    const time = date.toLocaleTimeString();
    const temp = data.main.temp;
    const weatherIcon = data.weather[0].icon;

    const hourlyForecast = document.createElement('div');
    hourlyForecast.classList.add('hourly-forecast');
    hourlyForecast.innerHTML = 
    `<p>${time}</p>
    <img src="http://openweathermap.org/img/wn/${weatherIcon}.png" />
    <p>${temp}°C</p>`;

    hourlyForecastDiv.appendChild(hourlyForecast);
  });
}

document.getElementById('search-button').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  fetchWeatherData(city);
});

document.getElementById('city').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const city = document.getElementById('city').value;
    fetchWeatherData(city);
  };
