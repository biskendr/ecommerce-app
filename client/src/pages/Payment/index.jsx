import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  getProductVariations,
  getUser,
  putProductVariations,
} from '@/services/ApiInstance'
import { dispatchClearCart } from '@/utils/cartUtils'
import Error from '~/Error'
import Loading from '~/Loading'
import CartContent from './Content/Cart'
import CreditCardForm from './Content/Form'

export default function Payment() {
  const navigate = useNavigate()
  const { cart } = useSelector((state) => state.cart)
  const [user, setUser] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const { id } = JSON.parse(Cookies.get('user')).user

  const fetchUserData = () => {
    const { jwt } = JSON.parse(Cookies.get('user'))
    getUser(jwt)
      .then((res) => setUser(res.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }

  const findVariation = (variations, cartItem) =>
    variations.find(
      (dataItem) => dataItem.attributes.product.data.id === cartItem.id
    )

  const updateProductVariations = async (variationId, data) =>
    putProductVariations(variationId, data)

  const clearAndNavigate = (success) => {
    if (success === true) dispatchClearCart()
    navigate(`?success=${success}`, { state: { paymentSuccess: success } })
  }

  const handlePayment = async (e) => {
    e.preventDefault()
    try {
      const { data } = await getProductVariations()
      const updatePromises = cart.map(async (item) => {
        const variation = findVariation(data.data, item)
        if (variation) {
          const updatedStockQuantity = {
            ...variation.attributes.stock_quantity,
          }
          updatedStockQuantity[item.size] -= item.quantity
          await updateProductVariations(variation.id, {
            stock_quantity: updatedStockQuantity,
          })
        }
      })
      await Promise.all(updatePromises).finally(setLoading(true))
      clearAndNavigate(true)
    } catch (err) {
      clearAndNavigate(false)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  if (error) return <Error />
  if (loading) return <Loading />

  return (
    <div className="payment container">
      <CartContent cart={cart} />
      <CreditCardForm
        handlePayment={handlePayment}
        user={user}
        cart={cart}
        userID={id}
      />
    </div>
  )
}
