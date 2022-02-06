import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import api from "../configs/api";


// export const addPlayer = createAsyncThunk(
//     "team/player",
//     async (id, player) => {
//       console.log(id);
//       console.log(player);
//         // const teamUpdate = { "players": player }
//         // const response = await api.patch(`/map/${id}`, teamUpdate);
//         // return response.data; 
//     }
//   )
  
  
  
  
  export const addPlayerSlice = createSlice({
    name: 'player',
    initialState: {
        // details: {},
    },
  
    extraReducers: {
      // [addPlayer.pending]: (state) => {
      //   state.status = "loading";
      //   state.error = "какая-то ошибка";
      // },
      // [addPlayer.fulfilled]: (state, action) => {
      //   state.status = "resolved";
      //   state.details = action.payload;
      // },
      // [addPlayer.rejected]: (state) => {
      //   state.error = "какая-то ошибка"
      // },
    }
  
  })
  
  export default addPlayerSlice.reducer