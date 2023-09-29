import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      )
      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity
      } else {
        state.cart.push({ ...action.payload })
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    decreaseQuantityToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      )
      if (itemInCart && itemInCart.quantity > 0) {
        itemInCart.quantity -= 1
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    removeToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex !== -1) {
        state.cart.splice(itemIndex, 1)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    clearCart: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.cart = []
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
  },
})

export const { addToCart, decreaseQuantityToCart, removeToCart, clearCart } =
  cartSlice.actions
export default cartSlice.reducer
