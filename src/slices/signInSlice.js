import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import usersServices from "../services/Users";






export const signIn = createAsyncThunk(
  "user/signIn",
  async (userData) => {
    const response = await usersServices.logIn(userData)
    return response.data
  }
)



export const signInSlice = createSlice({
  name: 'user',
  initialState: {
      userSignIn: {},
      isLogin: false,
      status: null,
      error: null,
  },

  extraReducers: {
    [signIn.pending]: (state) => {
      state.status = "loading";
      state.error = "какая-то ошибка";
    },
    [signIn.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.isLogin = true;
      state.userSignIn = action.payload;
    },
    [signIn.rejected]: (state) => {
      state.error = "какая-то ошибка"
    },
  }

})

// Action creators are generated for each case reducer function
// export const { increment } = signInSlice.actions //сюда пишутся функции из reducers
//counterSlice ЭТО НАЗВАНИЕ ФАЙЛА

export default signInSlice.reducer //вставляется в store хранит в себе все из reduserS