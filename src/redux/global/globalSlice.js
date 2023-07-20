import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
  isLoading: false,
  isModalEditTransactionOpen: false,
  editTransaction: null,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    openModalAddTransaction(state) {
      state.isModalAddTransactionOpen = true;
    },
    closeModalAddTransaction(state) {
      state.isModalAddTransactionOpen = false;
    },
    openModalLogout(state) {
      state.isModalLogoutOpen = true;
    },
    closeModalLogout(state) {
      state.isModalLogoutOpen = false;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    unsetIsLoading(state) {
      state.isLoading = false;
    },
    openModalEditTransaction(state) {
      state.isModalAddTransactionOpen = true;
    },
    closeModalEditTransaction(state) {
      state.isModalAddTransactionOpen = false;
    },
    setUpdatedTransaction: (state, { payload }) => {
      state.editTransaction = payload;
    },
    editTransaction: null,
  },
});

export const globalReducer = globalSlice.reducer;
export const {
  openModalAddTransaction,
  closeModalAddTransaction,
  openModalLogout,
  closeModalLogout,
  setIsLoading,
  unsetIsLoading,
  openModalEditTransaction,
  closeModalEditTransaction,
  setUpdatedTransaction,
} = globalSlice.actions;
