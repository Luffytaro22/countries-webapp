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
          const newState = { ...state };
          newState.region[action.payload[0].subregion].map((country) => {
            country.flagName = 'https://flagcdn.com/' + country.alpha2code.toLowerCase() + '.svg';
          });
        } else {
          state.region[action.payload[0].region] = [...action.payload];
          const newState = { ...state };
          newState.region[action.payload[0].region].map((country) => {
            country.flagName = 'https://flagcdn.com/' + country.alpha2code.toLowerCase() + '.svg';
          });
        }
      })
  }
})

export default detailsReggionSlice.reducer;
