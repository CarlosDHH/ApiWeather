import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import WeatherDetails from '../components/WeatherDetails';
import ForecastDetails from '../components/ForecastDetails';
import { getWeatherData } from '../api/WeatherApi';

const HomeScreen = () => {
  const [city, setCity] = useState('Huejutla');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = async (city) => {
    const data = await getWeatherData(city);
    setWeatherData(data.current);
    setForecastData(data.forecast.forecastday);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.button} onPress={() => fetchWeather(city)}>
        <Text style={styles.buttonText}>Get Weather</Text>
      </TouchableOpacity>
      {weatherData && <WeatherDetails weatherData={weatherData} />}
      {forecastData && <ForecastDetails forecast={forecastData} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1E8EE',
  },
  input: {
    width: '80%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 20,
    marginBottom: 20,
    color: '#333',
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
