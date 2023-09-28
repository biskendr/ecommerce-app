import { addItem, removeItem, clearList } from '@/context/wishlistSlice'
import store from '@/context/store'

export function dispatchAddItem(item) {
  store.dispatch(addItem(item))
}

export function dispatchRemoveItem(item) {
  store.dispatch(removeItem(item))
}
export function dispatchClearList() {
  store.dispatch(clearList())
}
