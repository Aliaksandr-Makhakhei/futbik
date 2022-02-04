import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  details: {},
}

export const mapDetailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    createDetails: (state, action) => {
      state.details = action.payload
    },
  },
})

export const { createDetails } = mapDetailsSlice.actions

export default mapDetailsSlice.reducer