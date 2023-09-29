import { configureStore } from '@reduxjs/toolkit'
import modal from './modalSlice'
import wishlist from './wishlistSlice'
import cart from './cartSlice'

const store = configureStore({
  reducer: {
    modal,
    wishlist,
    cart,
  },
})

export default store
