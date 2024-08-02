
import React from 'react';
import SearchBar from './components/SearchBar';
import GlobalStyle from './style/Globalstyle';
import WeatherDisplay from './components/weatherDisplay';
import styled from 'styled-components';


const Heading = styled.h1`
  margin: 20px;
  padding: 20px;
  font-size: 36px;
  color: #ffffff; // White text color
  background: linear-gradient(45deg, #ff6f61, #d64d79); // Updated gradient colors
  border-radius: 15px; // Slightly larger radius for a smoother look
  display: inline-block;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); // Slightly larger shadow for a more pronounced effect
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); // Optional: subtle text shadow for better readability
`;
const App = () => {
  return (
    <>
    
    <GlobalStyle />
    <div style={{ textAlign: 'center' }}>
      <Heading>Weather App</Heading>
      <SearchBar />
      <WeatherDisplay/>

    </div>
    </>
  );
};

export default App;
