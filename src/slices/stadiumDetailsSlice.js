import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from "../configs/api";

export const getStadiumDetails = createAsyncThunk(
  "stadium/details",
  async (id) => {
    const response = await api.get(`/map/${id}`);
    return response.data
  }
)

// export const addPlayer = createAsyncThunk(
//   "stadium/addPlayer",
//   async (id, player) => {
//     const teamUpdate = { "players": player }
//     await api.patch(`/map/${id}`, teamUpdate);
//   }
// )

export const stadiumDetailsSlice = createSlice({
  name: 'details',
  initialState: {
      details: {},
  },

  reducers: {
    clearDetails: (state) => {
      state.details = {}
    }
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

    // [addPlayer.fulfilled]: (state, action) => {
    //   state.status = "resolved";
    //   console.log(action.payload);
    //   // state.details.players = action.payload;
    // },
  }

})

export const { clearDetails } = stadiumDetailsSlice.actions
export default stadiumDetailsSlice.reducer