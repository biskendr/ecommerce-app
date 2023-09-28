/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    clearList: (state) => {
      state.items = []
    },
  },
})

export const { addItem, removeItem, clearList } = wishlistSlice.actions
export default wishlistSlice.reducer
