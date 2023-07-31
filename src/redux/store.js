import { configureStore } from '@reduxjs/toolkit';
import regionReducer from "./home/regionSlice";

const store = configureStore({
  reducer: {
    regions: regionReducer,
  }
});

export default store;
