import { createSlice } from '@reduxjs/toolkit';
import { getRegions } from '../home/regionSlice';

const initialState = {
  region: {
    'Asia': [],
    'Oceania': [],
    'Europe': [],
    'Africa': [],
    'Northern America': [],
    'South America': [],
  },
}

const detailsReggionSlice = createSlice({
  name: 'regions details',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRegions.fulfilled, (state, action) => {
        if (action.payload[0].region === 'Americas') {
          state.region[action.payload[0].subregion] = [...action.payload];
        } else {
          state.region[action.payload[0].region] = [...action.payload];
        }
      })
  }
})

export default detailsReggionSlice.reducer;
