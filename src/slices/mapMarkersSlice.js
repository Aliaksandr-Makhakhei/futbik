import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from "../configs/api";

export const mapMarkers = createAsyncThunk(
  "map/markers",
  async () => {
    const response = await api.get('/map');
    return response.data
  }
)

export const mapMarkersSlice = createSlice({
  name: 'map',
  initialState: {
      markers: [],
      status: null,
      error: null,
  },

  extraReducers: {
    [mapMarkers.pending]: (state) => {
      state.status = "loading";
      state.error = "какая-то ошибка";
    },
    [mapMarkers.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.markers = action.payload;
    },
    [mapMarkers.rejected]: (state) => {
      state.error = "какая-то ошибка"
    },
  }

})

export default mapMarkersSlice.reducer