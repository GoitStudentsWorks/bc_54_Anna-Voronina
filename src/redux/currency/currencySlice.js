import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrencyRatesAsync } from "./currencyOperations";
// import { fetchCurrencyRatesAsync } from "./currencyOperations";
// import { fetchCurrencyRates } from "services/api/api";

const initialState = {
  rates: [],
  loading: false,
  error: null,
};

// export const fetchCurrencyRatesAsync = createAsyncThunk(
//   'currency/fetchCurrencyRates',
//   async () => {
//     const response = await fetchCurrencyRates();
//     return response;
//   }
// );

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyRatesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrencyRatesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.rates = action.payload;
      })
      .addCase(fetchCurrencyRatesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const currencyReducer = currencySlice.reducer;