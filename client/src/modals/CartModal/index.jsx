import {
  dispatchAddItemCart,
  dispatchClearCart,
  dispatchDecreaseItemCart,
  dispatchRemoveItemCart,
} from '@/utils/cartUtils'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function CartModal() {
  const { cart } = useSelector((state) => state.cart)
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <div className="cart-wrapper">
          {cart.map((item) => {
            const { id, title, image, quantity, size } = item
            const { url, name } = image.data[0].attributes.formats.thumbnail
            return (
              <div key={id + size} className="cart-wrapper-item">
                <Link to={`/products/${id}`}>
                  <img src={url} alt={name} />
                </Link>
                <h2>{title}</h2>
                <h2>{size}</h2>
                <button
                  type="button"
                  className="cart-wrapper-item-button increase"
                  onClick={() => dispatchDecreaseItemCart({ id, size })}
                >
                  -
                </button>
                <h2>{quantity}</h2>
                <button
                  type="button"
                  className="cart-wrapper-item-button decrease"
                  onClick={() => dispatchAddItemCart({ id, size, quantity: 1 })}
                >
                  +
                </button>
                <button
                  type="button"
                  className="cart-wrapper-item-button remove"
                  onClick={() => dispatchRemoveItemCart({ id, size })}
                >
                  <span className="material-symbols-sharp">close</span>
                </button>
              </div>
            )
          })}
        </div>
      ) : (
        <div>
          <p>There are no products in the cart.</p>
        </div>
      )}
      {cart.length > 0 && (
        <button
          type="button"
          className="cart-wrapper-item-button clear"
          onClick={() => dispatchClearCart()}
        >
          <span className="material-symbols-sharp">delete</span>
        </button>
      )}
    </div>
  )
}
