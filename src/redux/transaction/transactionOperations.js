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
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, { rejectedWithValue }) => {
    try {
      const data = await addNewTransaction(transaction);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const editTransactionThunk = createAsyncThunk(
  'transactions/editTransaction',
  async ({ transactionId, transaction }, { rejectedWithValue }) => {
    try {
      console.log(transaction);
      const data = await updateTransaction({ transactionId, transaction });

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
      await deleteTransaction(id);
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      // console.log(getState().transaction.isLoading);
      const loading = getState().transaction.isLoading;
      if (loading) {
        return false;
      }
    },
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
