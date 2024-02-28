import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForecastDetails = ({ forecast }) => {
  return (
    <View style={styles.container}>
      {forecast.map((day, index) => (
        <View key={index} style={styles.dayContainer}>
          <Text style={styles.date}>{day.date}</Text>
          <View style={styles.tempContainer}>
            <Text style={styles.tempText}>Max: {day.day.maxtemp_c}°C</Text>
            <Text style={styles.tempText}>Min: {day.day.mintemp_c}°C</Text>
          </View>
          <Text style={styles.condition}>{day.day.condition.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#E1E8EE',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  dayContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 5,
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tempText: {
    fontSize: 16,
    color: '#555',
    fontWeight: 'bold',
  },
  condition: {
    fontSize: 16,
    color: '#333',
    fontStyle: 'italic',
  },
});

export default ForecastDetails;
