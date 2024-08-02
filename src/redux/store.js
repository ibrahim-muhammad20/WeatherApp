import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice'; 

// Configure the store with the weatherReducer
const store = configureStore({
  reducer: {
    weather: weatherReducer, 
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development mode

});

export default store;
