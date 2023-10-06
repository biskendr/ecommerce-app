import {
  dispatchDecreaseItemCart,
  dispatchIncreaseItemCart,
  dispatchRemoveItemCart,
} from '@/utils/cartUtils'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

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
        {cart.length === 0 && <h1>There are no products in the cart.</h1>}
        <table className="profile-cart-table">
          {cart.map((item) => {
            const { id, image, size, title, price, quantity, stock } = item
            const { url, name } = image.data[0].attributes.formats.medium

            return (
              <tbody key={id + size}>
                <tr>
                  <td>
                    <img src={url} alt={name} />
                  </td>
                  <td>
                    <div className="description-inner">
                      <h1>{title}</h1>
                      <p>Color: {title.split(' ')[0]}</p>
                      <p>Size: {size}</p>
                    </div>
                  </td>
                  <td>
                    <h1>Each</h1>
                    <p className="bold">${price}</p>
                  </td>
                  <td>
                    <h1>Quantity</h1>
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
                    <h1>Total</h1>
                    <p className="bold">${quantity * price}</p>
                  </td>
                  <td className="remove">
                    <button
                      className="remove-button"
                      type="button"
                      onClick={() => dispatchRemoveItemCart({ id, size })}
                    >
                      <span className="material-symbols-sharp">close</span>
                    </button>
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
        <button type="button" className="buy">
          Buy
        </button>
      </div>
    </div>
  )
}
