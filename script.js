const apiKey = '61c3c3b2ea79768d54718ba82bbcbf6d';

async function getWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    displayWeather(data);

    const hourlyResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);

    const hourlyData = await hourlyResponse.json();
    displayHourlyWeather(hourlyData.list.slice(0, 5));
  } catch (error) {
    console.log('Error fetching data', error);
  }
  }