import CartModal from './CartModal'
import SearchModal from './SearchModal'
import UserModal from './UserModal'
import WishlistModal from './WishlistModal'

const modals = [
  {
    name: 'search-modal',
    element: SearchModal,
  },
  {
    name: 'wishlist-modal',
    element: WishlistModal,
  },
  {
    name: 'user-modal',
    element: UserModal,
  },
  {
    name: 'cart-modal',
    element: CartModal,
  },
]

export default modals
