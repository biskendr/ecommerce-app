import {
  dispatchAddItemCart,
  dispatchDecreaseItemCart,
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
              <div key={id} className="cart-wrapper-item">
                <Link to={`/products/${id}`}>
                  <img src={url} alt={name} />
                </Link>
                <h2>{title}</h2>
                <h2>{size}</h2>
                <button
                  type="button"
                  className="cart-wrapper-item-button increase"
                  onClick={() => dispatchDecreaseItemCart({ id })}
                >
                  -
                </button>
                <h3>{quantity}</h3>
                <button
                  type="button"
                  className="cart-wrapper-item-button decrease"
                  onClick={() => dispatchAddItemCart({ id, quantity: 1 })}
                >
                  +
                </button>
              </div>
            )
          })}
        </div>
      ) : (
        <div>
          <h1>Cart no product</h1>
        </div>
      )}
    </div>
  )
}
