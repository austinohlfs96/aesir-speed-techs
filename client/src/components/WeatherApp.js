import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherApp = () => {
  // Sample weather data
  const weatherData = [
    { time: '12:00 PM', temperature: 25 },
    { time: '3:00 PM', temperature: 27 },
    { time: '6:00 PM', temperature: 22 },
    // Add more weather data as needed
  ];

  return (
    <div>
      <WeatherCard data={weatherData} />
    </div>
  );
};

export default WeatherApp;
