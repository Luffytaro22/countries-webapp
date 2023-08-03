import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://api.apilayer.com/geo/country/region/';

const config = {
  headers: {
    'apikey': 'ndkfTV5a2gUtSe9qUJ6I24UUypza2iR8',
  }
};

const getRegions = createAsyncThunk('home/getRegions', async (region) => {
  try {
    const regionName = region.replace(' ', '%20');
    const response = await axios.get(API + regionName, config);
    return response.data;
  } catch (error) {
    throw new Error('Region not found');
  }
});

const initialState = {
  regions: {
    'Asia': 0,
    'Oceania': 0,
    'Europe': 0,
    'Africa': 0,
    'Northern America': 0,
    'South America': 0,
  },
}

const regionSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRegions.fulfilled, (state, action) => {
        const sum = action.payload.reduce((acc, region) => acc + region.population, 0);
        const formattedNumber = sum.toLocaleString('en');
        if (action.payload[0].region === 'Americas') {
          state.regions[action.payload[0].subregion] = formattedNumber;
        } else {
          state.regions[action.payload[0].region] = formattedNumber;
        }
      })
  }
});

export { getRegions };
export default regionSlice.reducer;
