import {
  getProductVariations,
  getUser,
  putProductVariations,
} from '@/services/ApiInstance'
import { dispatchClearCart } from '@/utils/cartUtils'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

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

  const handlePayment = async (e) => {
    e.preventDefault()
    try {
      const { data } = await getProductVariations()
      const updatePromises = cart.map(async (item) => {
        const variation = data.data.find(
          (dataItem) => dataItem.attributes.product.data.id === item.id
        )
        if (variation) {
          const updatedStockQuantity = {
            ...variation.attributes.stock_quantity,
          }
          updatedStockQuantity[item.size] -= item.quantity
          await putProductVariations(variation.id, {
            stock_quantity: updatedStockQuantity,
          })
        }
      })
      await Promise.all(updatePromises)
      dispatchClearCart()
      navigate('?success=true', { state: { paymentSuccess: true } })
    } catch (err) {
      navigate('?success=false', { state: { paymentSuccess: false } })
    }
  }

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
      <div className="payment-credit-card">
        <div className="payment-credit-card-wrapper">
          <h1>Pay With Card</h1>
          <form onSubmit={handlePayment}>
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
            <button type="submit" disabled={cart.length < 1}>
              Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
