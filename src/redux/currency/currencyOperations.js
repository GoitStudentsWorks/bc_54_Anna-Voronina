import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCurrencyRates } from "services/api/api";
// import { fetchCurrencyRates} from "services/api/api";


// export const fetchCurrencyData = createAsyncThunk('currency/fetchData', async (_, { rejectedWithValue }) => {
//     try {
//       const { data } = await getCurrencyData();
//       return data;
//     } catch (error) {
//       return rejectedWithValue(error.message);
//     }
//   });

export const fetchCurrencyRatesAsync = createAsyncThunk(
  'currency/fetchCurrencyRates',
  async () => {
    const response = await fetchCurrencyRates();
    return response;
  }
);