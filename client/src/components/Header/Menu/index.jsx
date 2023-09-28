import { dispatchOpenModal } from '@/utils/modalUtils'

export default function Menu() {
  const menuItems = [
    { id: 1, icon: 'search', modalName: 'search-modal' },
    { id: 2, icon: 'favorite', modalName: 'wishlist-modal' },
    { id: 3, icon: 'person', modalName: 'user-modal' },
    { id: 4, icon: 'shopping_bag', modalName: 'cart-modal' },
  ]
  const handleModal = (modal) => {
    dispatchOpenModal({ name: modal })
  }

  return (
    <div className="header-actions">
      <ul className="header-actions-menu">
        {menuItems.map(({ icon, modalName }) => (
          <li key={icon}>
            <button
              type="button"
              className="material-symbols-sharp"
              onClick={() => handleModal(modalName)}
            >
              {icon}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
