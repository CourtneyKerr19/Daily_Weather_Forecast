const apiKey = '61c3c3b2ea79768d54718ba82bbcbf6d';

document.getElementById('search-button').addEventListener('click', () => {
  const city = document.getElementById('cityt').value.trim();
  if(!city) {
    alert('Please enter a city name');
    return;
  }
  fetchWeatherData(city);
}

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
      }
    } catch (error) {
      console.error('Error:', error.message );
      alert(`Error: ${error.message}`);

      const tempDiv = document.getElementById('temp-div');
      const weatherInfo = document.getElementById('weather-info');
      const weatherIcon = document.getElementById('weather-icon');
      const dateTimeDiv = document.getElementById('date-time');

      tempDiv.textContent = '';
      weatherInfo.innerHTML = '';
      dateTimeDiv.innerHTML = '';

      const cityName = date.name
      const temp = Math.round(data.main.temp - 273.15);
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

      const currentTime = new Date().toLocateTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true});

      dateTimeDiv.innerHTML = `<p>Current Time: ${currentTime}</p>`;

      tempDiv.innerHTML = `<p>${temp}°C</p>`;
      weatherInfo.innerHTML = `<p>${cityName}</p><p>${description}</p>`;
      weatherIcon.src = iconUrl;
      weatherIcon.style.display = 'block';

      const hourlyForecastDiv = document.getElementById('hourly-forecast');
      hourlyForecastDiv.innerHTML = '';

      const next24Hours = hourlyData.slice(0, 8); 

      next24Hours.forEach((item) => {
        const time = new Date(item.dt * 1000).toLocaleTimeString([], {hour: '2-digit', hour12: true});
        const temp = Math.round(item.main.temp - 273.15);
        const iconUrl = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

        const hourlyItem = `<div class="hourly-item"><p>${time}</p><img src="${iconUrl}" alt="${item.weather[0].description}"><p>${temp}°C</p></div>`;
        hourlyForecastDiv.innerHTML += hourlyItem;
          });
        }
      }