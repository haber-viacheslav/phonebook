import { createSlice } from '@reduxjs/toolkit';
import { userSignup, userLogin, userLogout, userCurrent } from './authService';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(userSignup.pending, (state, action) => {
        return state;
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userSignup.rejected, (state, action) => {
        return state;
      })
      .addCase(userLogin.pending, (state, action) => {})
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        return state;
      })
      .addCase(userLogout.pending, (state, action) => {})
      .addCase(userLogout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(userLogout.rejected, (state, action) => {})
      .addCase(userCurrent.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      }),
});

export const authReducer = authSlice.reducer;
