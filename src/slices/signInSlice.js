import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import usersServices from "../services/Users";



export const signIn = createAsyncThunk(
  "user/signIn",
  async (userData) => {
    const response = await usersServices.signIn(userData)
    return console.log(response); //можно добавить catch
  }
)






export const signInSlice = createSlice({


  name: 'user', //пишется в store?
  initialState: {
      user: {},
      status: null,
      error: null,
  },
  reducers: {
    increment: (state, action) => { //state это то что лежит в initialstate action это мы передаем данные из компонента
        //action.payload.text - пример

      state.value += 1
    },

  },
  extraReducers: {
    [signIn.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [signIn.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.user = action.payload;
    },
    [signIn.rejected]: (state, action) => {},
  }
})

// Action creators are generated for each case reducer function
export const { increment } = signInSlice.actions //сюда пишутся функции из reducers
//counterSlice ЭТО НАЗВАНИЕ ФАЙЛА

export default signInSlice.reducer //вставляется в store хранит в себе все из reduserS