/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlist: localStorage.getItem('wishlist')
    ? JSON.parse(localStorage.getItem('wishlist'))
    : [],
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload)
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
    },
    removeToWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      )
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
    },
    clearWishlist: (state) => {
      state.wishlist = []
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
    },
  },
})

export const { addToWishlist, removeToWishlist, clearWishlist } =
  wishlistSlice.actions
export default wishlistSlice.reducer
