import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import stadiumDetailsServices from "../services/StadiumDetails";


export const getStadiumDetails = createAsyncThunk(
  "stadium/details",
  async (id) => {
    const response = await stadiumDetailsServices.getDetails(id)
    return response;
  }
)








export const stadiumDetailsSlice = createSlice({
  name: 'details',
  initialState: {
      details: {},
  },

  extraReducers: {
    [getStadiumDetails.pending]: (state) => {
      state.status = "loading";
      state.error = "какая-то ошибка";
    },
    [getStadiumDetails.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.details = action.payload;
    },
    [getStadiumDetails.rejected]: (state) => {
      state.error = "какая-то ошибка"
    },
  }

})

export default stadiumDetailsSlice.reducer