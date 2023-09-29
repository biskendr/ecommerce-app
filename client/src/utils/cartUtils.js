import {
  addToCart,
  decreaseQuantityToCart,
  removeToCart,
  clearCart,
} from '@/context/cartSlice'

import store from '@/context/store'

export function dispatchAddItemCart(item) {
  store.dispatch(addToCart(item))
}
export function dispatchDecreaseItemCart(item) {
  store.dispatch(decreaseQuantityToCart(item))
}

export function dispatchRemoveItemCart(item) {
  store.dispatch(removeToCart(item))
}
export function dispatchClearCart() {
  store.dispatch(clearCart())
}
