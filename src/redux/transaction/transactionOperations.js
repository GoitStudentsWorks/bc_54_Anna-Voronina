import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addNewTransaction,
  deleteTransaction,
  fetchCategories,
  fetchTransactionsSummary,
  getTransaction,
  updateTransaction,
} from 'services/api/api';

export const getTransactionsCategoriesThunk = createAsyncThunk(
  'transactions/fetchCategories',
  async (_, { rejectedWithValue }) => {
    try {
      const data = await fetchCategories();
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const getAllTransactionsThunk = createAsyncThunk(
  'transactions/fetchAll',
  async (_, { rejectedWithValue }) => {
    try {
      const data = await getTransaction();
      console.log(data);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'transactions/addTransaction',
  async (_, { rejectedWithValue }) => {
    try {
      const data = await addNewTransaction();
      console.log(data);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const editTransactionThunk = createAsyncThunk(
  'transactions/editTransaction',
  async (id, { rejectedWithValue }) => {
    try {
      const data = await updateTransaction(id);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const delTransactionThunk = createAsyncThunk(
  'transactions/delTransaction',
  async (id, { rejectedWithValue }) => {
    try {
      const data = await deleteTransaction(id);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const getSummaryThunk = createAsyncThunk(
  'transactions/getSummary',
  async ({ month, year }, { rejectedWithValue }) => {
    try {
      const data = await fetchTransactionsSummary({ month, year });
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);
