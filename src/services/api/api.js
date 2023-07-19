import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://wallet.goit.ua/docs/api',
});

// Set token
export const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

// Get current user info
export const fetchCurrentUser = async () => {
  const { data } = await instance.get('/users/current');
  return data;
};

// Create new transaction for logged in user
export const addNewTransaction = async transaction => {
  const { data } = await instance.post('/transactions', transaction);
  return data;
};

// Get all transactions for logged in user
export const getTransaction = async user => {
  const { data } = await instance.get('/transactions', user);
  return data;
};

// Update transaction
export const updateTransaction = async transactionId => {
  const { data } = await instance.post(`/transactions/${transactionId}`);
  return data;
};

// Delete Transaction
export const deleteTransaction = transactionId => {
  instance.delete(`/transactions/${transactionId}`);
};

// Transaction Categories
export const fetchCategories = async () => {
  const { data } = await instance.get('/transaction-categories');
  return data;
};

// Auth Controller
// Sign up new user
export const signUp = async user => {
  const { data } = await instance.post('/auth/sign-up', user);
  setAuthHeader(data.token);
  return data;
};

// Sign in existing user
export const signIn = async user => {
  const { data } = await instance.post(`/auth/sign-in`, user);
  setAuthHeader(data.token);
  return data;
};

// Sign out existing user
export const signOut = id => {
  instance.delete(`/auth/sign-out/${id}`);
  clearAuthHeader();
};

// Get transactions summary for period
export const fetchTransactionsSummary = async ({ month, year }) => {
  const { data } = await instance.get('/api/transactions-summary', {
    params: {
      month,
      year,
    },
  });
  return data;
};

export const getCurrencyData = async () => {
  const start_date = '2023-01-01';
  const end_date = '2023-07-19';

  const { data } = await axios.get(
    `https://api.monobank.ua/bank/currency?date=${Math.floor(
      new Date(start_date).getTime() / 1000
    )}&end_date=${Math.floor(new Date(end_date).getTime() / 1000)}`
  );
  return data;
};
