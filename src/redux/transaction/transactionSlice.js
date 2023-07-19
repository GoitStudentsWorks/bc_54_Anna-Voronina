import { createSlice } from '@reduxjs/toolkit/dist';
import {
  addTransactionThunk,
  getTransactionsCategoriesThunk,
  getAllTransactionsThunk,
  delTransactionThunk,
  getSummaryThunk,
  editTransactionThunk,
} from './transactionOperations';

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
      .addCase(getAllTransactionsThunk.pending, handlePending)
      .addCase(getAllTransactionsThunk.fulfilled, handleAllTransactions)
      .addCase(getAllTransactionsThunk.rejected, handleRejected)
      .addCase(editTransactionThunk.pending, handlePending)
      .addCase(editTransactionThunk.fulfilled, handleEdit)
      .addCase(editTransactionThunk.rejected, handleRejected)
      .addCase(addTransactionThunk.pending, handlePending)
      .addCase(addTransactionThunk.fulfilled, handleAdd)
      .addCase(addTransactionThunk.rejected, handleRejected)
      .addCase(delTransactionThunk.pending, handlePending)
      .addCase(delTransactionThunk.fulfilled, handleDelete)
      .addCase(delTransactionThunk.rejected, handleRejected)
      .addCase(getTransactionsCategoriesThunk.pending, handlePending)
      .addCase(getTransactionsCategoriesThunk.fulfilled, handleCategories)
      .addCase(getTransactionsCategoriesThunk.rejected, handleRejected)
      .addCase(getSummaryThunk.pending, handlePending)
      .addCase(getSummaryThunk.fulfilled, handleSummary)
      .addCase(getSummaryThunk.rejected, handleRejected);
  },
});

export const transactionsReducer = transactionSlice.reducer;
