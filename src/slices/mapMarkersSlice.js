import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import mapServices from "../services/Map";

export const mapMarkers = createAsyncThunk(
  "map/markers",
  async () => {
    const response = await mapServices.getMarkers()
    return response
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