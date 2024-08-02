import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import LoadingSpinner from './Loader'; // Ensure this component exists and works

const Container = styled.div`
  display: flex;
  justify-content: center; // Center horizontally
  padding: 20px; // Optional: Add padding if needed
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
`;

const Temperature = styled.h2`
  font-size: 48px;
  margin: 10px 0;
  color: #000;
`;

const Description = styled.p`
  font-size: 24px;
  margin: 5px 0;
`;

const Humidity = styled.p`
  font-size: 18px;
  margin: 5px 0;
`;

const Error = styled.p`
  color: red;
  font-size: 18px;
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const WeatherDisplay = () => {
  const { data: weather, loading, error } = useSelector((state) => state.weather); //to access redux data

  if (loading) return <LoadingSpinner />; //if loading=true load the loader
  if (error) return <Error>{error}</Error>; 
  if (!weather) return <p>Search for a city to get weather information</p>;

  const { main, weather: weatherDetails } = weather; //for name ambuigity
  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`; //for accessing logo.

  return (
    <Container>
      <Card>
        <WeatherIcon src={weatherIconUrl} alt={weatherDetails[0].description} />
        <Temperature>{Math.round(main.temp)}°C</Temperature>
        <Description>Description:{weatherDetails[0].description}</Description>
        <Humidity>Humidity: {main.humidity}%</Humidity>
      </Card>
    </Container>
  );
};

export default WeatherDisplay;
