import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } from '../redux/weatherSlice';
import config from '../config'; // Import the config
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const SearchBar = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async () => {
    dispatch(fetchWeatherStart()); //dispatch as soon as you search

    
    console.log('API Key:', config.API_KEY); //testing

    try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.API_KEY}&units=metric`);
      console.log(response.data);
      dispatch(fetchWeatherSuccess(response.data)); //Pass that response to the sucessfunction layed out in redux.
      
    } catch (error) {
      dispatch(fetchWeatherFailure(error.message));
    }
  }; //hitting API

  return (
    <SearchContainer>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <Button onClick={handleSearch}>Search</Button>
      </SearchContainer>
  );
};

export default SearchBar;
