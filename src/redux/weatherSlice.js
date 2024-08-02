import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {   //all state data initiated
    data: null,
    loading: false,
    error: null,
  },
  reducers: { //all reducers set out
    fetchWeatherStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchWeatherFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } = weatherSlice.actions; //all actions defined

export default weatherSlice.reducer;
