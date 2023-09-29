import store from '@/context/store'
import {
  addToWishlist,
  clearWishlist,
  removeToWishlist,
} from '@/context/wishlistSlice'

export function dispatchAddItemWishlist(item) {
  store.dispatch(addToWishlist(item))
}

export function dispatchRemoveItemWishlist(item) {
  store.dispatch(removeToWishlist(item))
}
export function dispatchClearWishlist() {
  store.dispatch(clearWishlist())
}
