// src/api/WeatherApi.js
const API_KEY = 'a6db6214fc9c42d1950191808231010';
const API_URL = 'http://api.weatherapi.com/v1/forecast.json';

export const getWeatherData = async (city, days = 3) => {
  try {
    const url = `${API_URL}?key=${API_KEY}&q=${city}&days=${days}&aqi=no`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
