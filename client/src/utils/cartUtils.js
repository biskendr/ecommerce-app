import { addItem, removeItem, clearCart } from '@/context/cartSlice'
import store from '@/context/store'

export function dispatchAddItem(item) {
  store.dispatch(addItem(item))
}

export function dispatchRemoveItem(item) {
  store.dispatch(removeItem(item))
}
export function dispatchClearCart() {
  store.dispatch(clearCart())
}
