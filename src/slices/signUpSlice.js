import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import usersServices from "../services/Users";

export const signUp = createAsyncThunk(
  "user/signUp",
  async (newUser) => {
    const response = await usersServices.signUp(newUser)
    return console.log(response); //можно добавить catch
  }
)

export const signUpSlice = createSlice({

  name: 'user',
  initialState: {

      status: null,
      error: null,
  },

  extraReducers: {
    [signUp.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [signUp.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.user = action.payload;
    },
    [signUp.rejected]: (state, action) => {
      
    },
  }

})

// Action creators are generated for each case reducer function
// export const { increment } = signInSlice.actions //сюда пишутся функции из reducers
//counterSlice ЭТО НАЗВАНИЕ ФАЙЛА

export default signUpSlice.reducer 