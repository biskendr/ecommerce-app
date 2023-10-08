import store from '@/context/store'
import {
  addToCart,
  decreaseQuantityToCart,
  removeToCart,
  clearCart,
  increaseQuantityToCart,
} from '@/context/cartSlice'

export function dispatchAddItemCart(item) {
  store.dispatch(addToCart(item))
}
export function dispatchDecreaseItemCart(item) {
  store.dispatch(decreaseQuantityToCart(item))
}
export function dispatchIncreaseItemCart(item) {
  store.dispatch(increaseQuantityToCart(item))
}

export function dispatchRemoveItemCart(item) {
  store.dispatch(removeToCart(item))
}
export function dispatchClearCart() {
  store.dispatch(clearCart())
}
