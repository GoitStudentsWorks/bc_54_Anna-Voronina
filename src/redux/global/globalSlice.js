import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
  isLoading: false,
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
} = globalSlice.actions;
