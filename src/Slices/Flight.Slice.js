import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchParams: null,
  flights: [],
  selectedFlight: null,
  totalPrice: 0,             //  Add total price for payment
  razorpayLoaded: false,     // Flag to track Razorpay script loaded
  paymentStatus: null,       //  Optional: track 'success' or 'failed'
};

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    setSearchParams: (state, action) => {
      state.searchParams = action.payload;
    },
    setFlights: (state, action) => {
      state.flights = action.payload;
    },
    setSelectedFlight: (state, action) => {
      state.selectedFlight = action.payload;
    },
     setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    setRazorpayLoaded: (state, action) => {
      state.razorpayLoaded = action.payload;
    },
    setPaymentStatus: (state, action) => {
      state.paymentStatus = action.payload;
    },
    clearFlightState: () => initialState,
  },
});

export const {
  setSearchParams,
  setFlights,
  setSelectedFlight,
   setTotalPrice,
  setRazorpayLoaded,
  setPaymentStatus,
  clearFlightState,
} = flightSlice.actions;

export default flightSlice.reducer;