import { configureStore } from "@reduxjs/toolkit";
import flightReducer from './Slices/Flight.Slice';
export const store = configureStore({
    reducer:{
        flight: flightReducer,
    }
});