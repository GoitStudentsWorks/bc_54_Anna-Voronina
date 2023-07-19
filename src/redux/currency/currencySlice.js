import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrencyData } from "./currencyOperations";

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
      data: [],
      isLoading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCurrencyData.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchCurrencyData.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data = action.payload;
        })
        .addCase(fetchCurrencyData.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const currencyReducer = currencySlice.reducer;
