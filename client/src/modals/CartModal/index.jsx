import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  dispatchAddItemCart,
  dispatchClearCart,
  dispatchDecreaseItemCart,
  dispatchRemoveItemCart,
} from '@/utils/cartUtils'

export default function CartModal() {
  const { cart } = useSelector((state) => state.cart)
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <div className="cart-wrapper">
          {cart.map((item) => {
            const { id, title, image, quantity, size, stock } = item
            const { url, name } = image.data[0].attributes.formats.thumbnail
            return (
              <div key={id + size} className="cart-wrapper-item">
                <Link to={`/products/${id}`}>
                  <img src={url} alt={name} />
                </Link>
                <p>{title}</p>
                <p>{size}</p>
                <button
                  type="button"
                  className="cart-wrapper-item-button increase"
                  onClick={() => dispatchDecreaseItemCart({ id, size })}
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  type="button"
                  className="cart-wrapper-item-button decrease"
                  onClick={() => dispatchAddItemCart({ id, size, quantity: 1 })}
                  disabled={stock === quantity}
                >
                  +
                </button>
                <span
                  role="presentation"
                  className="material-symbols-sharp remove"
                  onClick={() => dispatchRemoveItemCart({ id, size })}
                >
                  close
                </span>
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
        <>
          <div className="cart-wrapper-item">
            <span
              role="presentation"
              className="material-symbols-sharp clear"
              onClick={() => dispatchClearCart()}
            >
              delete
            </span>
          </div>
          <Link to="/profile/cart" className="button">
            <button type="button">Go to Cart</button>
          </Link>
        </>
      )}
    </div>
  )
}
