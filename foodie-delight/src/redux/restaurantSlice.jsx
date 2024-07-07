import { createSlice } from '@reduxjs/toolkit'

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurants: [],
  },
  reducers: {
    addRestaurants: (state, action) => {
      state.restaurants = action.payload
    },
  },
})

export const { addRestaurants } = restaurantSlice.actions

export default restaurantSlice.reducer