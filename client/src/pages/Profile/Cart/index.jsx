import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  dispatchDecreaseItemCart,
  dispatchIncreaseItemCart,
  dispatchRemoveItemCart,
} from '@/utils/cartUtils'

export default function ProfileCart() {
  const { cart } = useSelector((state) => state.cart)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const cartTotal = cart.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    )
    setTotal(cartTotal)
  }, [cart])

  return (
    <div className="profile-cart">
      <div className="profile-cart-wrapper">
        <h1>
          <span className="material-symbols-sharp">shopping_bag</span>
          Cart
        </h1>
        {cart.length === 0 && <h2>There are no products in the cart.</h2>}
        <table className="profile-cart-table">
          {cart.map((item) => {
            const { id, image, size, title, price, quantity, stock } = item
            const { url, name } = image.data[0].attributes.formats.medium
            return (
              <tbody key={id + size}>
                <tr>
                  <td>
                    <Link to={`/products/${id}`}>
                      <img src={url} alt={name} />
                    </Link>
                  </td>
                  <td>
                    <div className="description-inner">
                      <h2>{title}</h2>
                      <p>Color: {title.split(' ')[0]}</p>
                      <p>Size: {size}</p>
                    </div>
                  </td>
                  <td>
                    <h2>Each</h2>
                    <p className="bold">${price}</p>
                  </td>
                  <td>
                    <h2>Quantity</h2>
                    <div className="quantity">
                      <button
                        type="button"
                        onClick={() => dispatchDecreaseItemCart({ id, size })}
                      >
                        -
                      </button>
                      <p>{quantity}</p>
                      <button
                        type="button"
                        onClick={() => dispatchIncreaseItemCart({ id, size })}
                        disabled={stock === quantity}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <h2>Total</h2>
                    <p className="bold">${quantity * price}</p>
                  </td>
                  <td className="remove">
                    <span
                      className="material-symbols-sharp remove"
                      role="presentation"
                      onClick={() => dispatchRemoveItemCart({ id, size })}
                    >
                      close
                    </span>
                  </td>
                </tr>
              </tbody>
            )
          })}
          <tfoot>
            <tr>
              <th>Total Cart</th>
              <th>${total}</th>
            </tr>
          </tfoot>
        </table>
        {cart.length > 0 && (
          <Link to="/payment">
            <button type="button" className="buy">
              Buy
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}
