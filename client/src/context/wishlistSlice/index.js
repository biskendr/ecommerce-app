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
      const itemIndex = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex !== -1) {
        state.wishlist.splice(itemIndex, 1)
      }
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
    },
    clearWishlist: (state) => {
      localStorage.removeItem('wishlist')
      return {
        ...state,
        wishlist: [],
      }
    },
  },
})

export const { addToWishlist, removeToWishlist, clearWishlist } =
  wishlistSlice.actions
export default wishlistSlice.reducer
