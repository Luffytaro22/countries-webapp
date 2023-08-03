import { configureStore } from '@reduxjs/toolkit';
import regionReducer from "./home/regionSlice";
import detailsRegionReducer from './details/detailsRegionSlice';

const store = configureStore({
  reducer: {
    regions: regionReducer,
    detailRegions: detailsRegionReducer,
  }
});

export default store;
