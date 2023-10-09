import { getUser } from '@/services/ApiInstance'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Error from '~/Error'
import Loading from '~/Loading'

export default function Payment() {
  const navigate = useNavigate()
  const { cart } = useSelector((state) => state.cart)
  const [user, setUser] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  )

  useEffect(() => {
    const { jwt } = JSON.parse(Cookies.get('user'))
    getUser(jwt)
      .then((res) => setUser(res.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if (error) return <Error />
  if (loading) return <Loading />

  return (
    <div className="payment container">
      <div className="payment-cart">
        <span
          className="material-symbols-sharp"
          role="presentation"
          onClick={() => navigate(-1)}
        >
          arrow_back_ios_new
        </span>
        <h3>Pay Lorem, ipsum.</h3>
        <h1>${cartTotal}</h1>
        <div className="payment-cart-wrapper">
          {cart &&
            cart.map((item) => {
              const { id, size, title, price, quantity } = item
              return (
                <div key={id + size} className="payment-cart-wrapper-item">
                  <div className="left">
                    <h3>{title}</h3>
                    <p>Qty {quantity}</p>
                  </div>
                  <div className="right">
                    <h3>${quantity * price}</h3>
                    <p>${price} Each</p>
                  </div>
                </div>
              )
            })}
        </div>
        <footer>
          <p>
            Powered<strong> Clothes</strong> |
          </p>
          <p>Terms</p>
          <p>Privacy</p>
        </footer>
      </div>
      <div className="payment-credit-card">
        <div className="payment-credit-card-wrapper">
          <h1>Pay With Card</h1>
          <form>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                value={`Email ${user.email}`}
                readOnly="readonly"
                disabled
              />
            </label>
            <div className="form-card-information">
              <h2>Card Information</h2>
              <label htmlFor="card">
                <input
                  type="text"
                  name="card"
                  maxLength={19}
                  placeholder="4242 4242 4242 4242"
                />
              </label>
              <div className="both">
                <label htmlFor="date">
                  <input
                    type="text"
                    name="date"
                    placeholder="MM / YY"
                    maxLength={5}
                  />
                </label>
                <label htmlFor="cvc">
                  <input
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    maxLength={3}
                  />
                </label>
              </div>
            </div>
            <div className="form-address-information">
              <h2>Address Information</h2>
              <label htmlFor="country">
                <input
                  type="text"
                  name="country"
                  value={user.address[0].country}
                  readOnly
                  disabled
                />
              </label>
              <label htmlFor="city">
                <input
                  type="text"
                  name="city"
                  value={user.address[0].city}
                  readOnly
                  disabled
                />
              </label>
              <label htmlFor="address">
                <input
                  type="text"
                  name="address"
                  value={user.address[0].address}
                  readOnly
                  disabled
                />
              </label>
            </div>
            <button type="submit">Pay</button>
          </form>
        </div>
      </div>
    </div>
  )
}
