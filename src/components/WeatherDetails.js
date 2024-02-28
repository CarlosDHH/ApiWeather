import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherDetails = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Details</Text>
      <View style={styles.detailRow}>
        <Text style={styles.text}>Temperature:</Text>
        <Text style={styles.value}>{weatherData.temp_c}°C</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.text}>Condition:</Text>
        <Text style={styles.value}>{weatherData.condition.text}</Text>
      </View>
      {/* Agrega más detalles según necesites */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
  loadingText: {
    fontSize: 18,
    color: '#007BFF',
  },
});

export default WeatherDetails;
