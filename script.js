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
    }