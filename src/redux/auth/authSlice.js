const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
