import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from "../configs/api";

export const signIn = createAsyncThunk(
  "user/signIn",
  async (userData) => {
    const response = await api.post(`/login`, userData)
    return response.data
  }
)

export const signInSlice = createSlice({
  name: 'user',
  initialState: {
      userSignIn: {},
      isLogin: false,
      status: null,
      error: true,
  },

  reducers: {
    logOut: (state) => {
      state.userSignIn = {}
      state.isLogin = false;
    },
    clearError: (state) => {
      state.error = false
    }
  },

  extraReducers: {
    [signIn.pending]: (state) => {
      state.status = "loading";
      state.error = true
    },
    [signIn.fulfilled]: (state, action) => {
      state.error = false;
      state.status = "resolved";
      state.isLogin = true;
      state.userSignIn = action.payload;
    },
    [signIn.rejected]: (state) => {
      state.error = true
    },
  }

})

export const { logOut, clearError } = signInSlice.actions
export default signInSlice.reducer