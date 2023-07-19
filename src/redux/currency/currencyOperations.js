import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrencyData } from "services/api/api";


export const fetchCurrencyData = createAsyncThunk('currency/fetchData', async (_, { rejectedWithValue }) => {
    try {
      const { data } = await getCurrencyData();
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  });