import { createSlice } from '@reduxjs/toolkit/dist';
import {
  addTransaction,
  getTransactionsCategories,
  getAllTransactions,
  delTransaction,
  getSummary,
  editTransaction,
} from './operation';

const initialState = {
  transactions: [],
  categories: [],
  categoriesSummary: [],
  incomeSummary: 0,
  expenseSummary: 0,
  periodTotal: 0,
  year: 0,
  month: 0,
  isLoading: false,
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
};
const handleAllTransactions = (state, { payload }) => {
  state.transactions = payload;
  state.isLoading = false;
};
const handlePending = state => {
  state.isLoading = true;
};
const handleAdd = (state, { payload }) => {
  state.transactions.push(payload);
  state.isLoading = false;
};
const handleEdit = (state, { payload }) => {
  state.transactions = state.transactions.map(e =>
    e.id === payload.id ? payload : e
  );
  state.isLoading = false;
};
const handleDelete = (state, { payload }) => {
  state.isLoading = false;
  state.transactions = state.transactions.filter(e => e.id !== payload);
};
const handleCategories = (state, { payload }) => {
  state.categories = payload;
  state.isLoading = false;
};
const handleSummary = (state, { payload }) => {
  state.categoriesSummary = payload.categoriesSummary;
  state.expenseSummary = payload.expenseSummary;
  state.incomeSummary = payload.incomeSummary;
  state.periodTotal = payload.periodTotal;
  state.year = payload.year;
  state.month = payload.month;
  state.isLoading = false;
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllTransactions.pending, handlePending)
      .addCase(getAllTransactions.fulfilled, handleAllTransactions)
      .addCase(getAllTransactions.rejected, handleRejected)
      .addCase(editTransaction.pending, handlePending)
      .addCase(editTransaction.fulfilled, handleEdit)
      .addCase(editTransaction.rejected, handleRejected)
      .addCase(addTransaction.pending, handlePending)
      .addCase(addTransaction.fulfilled, handleAdd)
      .addCase(addTransaction.rejected, handleRejected)
      .addCase(delTransaction.pending, handlePending)
      .addCase(delTransaction.fulfilled, handleDelete)
      .addCase(delTransaction.rejected, handleRejected)
      .addCase(getTransactionsCategories.pending, handlePending)
      .addCase(getTransactionsCategories.fulfilled, handleCategories)
      .addCase(getTransactionsCategories.rejected, handleRejected)
      .addCase(getSummary.pending, handlePending)
      .addCase(getSummary.fulfilled, handleSummary)
      .addCase(getSummary.rejected, handleRejected);
  },
});

export const transactionsReducer = transactionSlice.reducer;
