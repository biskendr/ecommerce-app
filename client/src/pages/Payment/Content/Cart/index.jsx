import { Link, useNavigate } from 'react-router-dom'

export default function CartContent({ cart }) {
  const navigate = useNavigate()

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  )

  return (
    <div className="payment-cart">
      <span
        className="material-symbols-sharp"
        role="presentation"
        onClick={() => navigate(-1)}
      >
        arrow_back_ios_new
      </span>
      <h3>Pay with card.</h3>
      <h1>${cartTotal}</h1>
      <div className="payment-cart-wrapper">
        {cart.length < 1 ? (
          <>
            <p>Your cart is look empty.</p>
            <p>
              Discover our products from{' '}
              <Link to="/" className="link">
                shop
              </Link>
            </p>
          </>
        ) : (
          cart.map((item) => {
            const { id, size, title, price, quantity } = item
            return (
              <div key={id + size} className="payment-cart-wrapper-item">
                <div className="left">
                  <h3>
                    {title} {size}
                  </h3>
                  <p>Qty {quantity}</p>
                </div>
                <div className="right">
                  <h3>${quantity * price}</h3>
                  <p>${price} Each</p>
                </div>
              </div>
            )
          })
        )}
      </div>
      <footer>
        <p>
          Powered<strong> Clothes</strong> |
        </p>
        <p>Terms</p>
        <p>Privacy</p>
      </footer>
    </div>
  )
}
