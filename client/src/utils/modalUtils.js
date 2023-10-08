import store from '@/context/store'
import { closeModal, openModal } from '@/context/modalSlice'

export function dispatchOpenModal(modal) {
  store.dispatch(openModal(modal))
}

export function dispatchCloseModal() {
  store.dispatch(closeModal())
}
