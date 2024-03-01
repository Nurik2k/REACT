import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    city: '',
    weatherData: {},
    status: ''
}

export const getWeatherData = createAsyncThunk('city/getWeatherData', async (city) => {
    response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=25c495dfff01ff23dd42721de5b638bd')
                    .then(response => response.json())
    return response;
});

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeatherData.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(getWeatherData.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.weatherData = action.payload;
            })
            .addCase(getWeatherData.rejected, (state, action) => {
                state.status = 'rejected';
            })
            
    }
});

export default citySlice.reducer;
