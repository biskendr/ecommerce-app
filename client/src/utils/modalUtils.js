import { closeModal, openModal } from '@/context/modalSlice'
import store from '@/context/store'

export function dispatchOpenModal(modal) {
  store.dispatch(openModal(modal))
}

export function dispatchCloseModal() {
  store.dispatch(closeModal())
}
