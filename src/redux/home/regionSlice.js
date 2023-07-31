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
  regions: [],
}

const regionSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRegions.fulfilled, (state, action) => {
        state.regions = action.payload;
      })
  }
});

export { getRegions };
export default regionSlice.reducer;
