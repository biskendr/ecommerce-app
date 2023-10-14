import useFetch from '@/hooks/useFetch'
import Cookies from 'js-cookie'
import { useState } from 'react'
import Error from '~/Error'
import Loading from '~/Loading'

export default function ProfileOrders() {
  const [openOrderID, setOpenOrderID] = useState(null)
  const { id } = JSON.parse(Cookies.get('user')).user
  const { data, loading, error } = useFetch(
    `/orders?filters[user][id][$eq]=${id}`
  )

  if (error) return <Error />
  if (loading) return <Loading />

  return (
    <div className="profile-orders container">
      <h1>Orders</h1>
      {data && data.length === 0 && <p>You don&apos;t have any orders yet.</p>}
      {data &&
        data.map((order) => {
          const totalPrice = order.attributes.orderDetail.reduce(
            (acc, item) => acc + item.quantity * item.price,
            0
          )
          return (
            <div
              key={order.id}
              className={`profile-orders-disclosure ${
                openOrderID === order.id ? 'open' : ''
              }`}
            >
              <h1>
                {order.attributes.createdAt.slice(0, 10)}
                <span
                  className="material-symbols-sharp"
                  role="presentation"
                  onClick={() =>
                    setOpenOrderID(openOrderID === order.id ? null : order.id)
                  }
                >
                  arrow_forward_ios
                </span>
              </h1>
              {order.attributes.orderDetail.map((orderProduct) => {
                const {
                  id: productID,
                  title,
                  size,
                  image,
                  price,
                  quantity,
                } = orderProduct
                const { name, url } = image
                return (
                  <div
                    key={productID + size}
                    className="profile-orders-disclosure-content"
                  >
                    <img src={url} alt={name} />
                    <div className="profile-orders-disclosure-content-info">
                      <h2>{title}</h2>
                      <p>Size: {size}</p>
                      <p>Each: ${price}</p>
                      <p>Amount: x{quantity}</p>
                      <p>Total: ${quantity * price}</p>
                    </div>
                  </div>
                )
              })}
              <h3 className="profile-orders-disclosure-content total">
                Total: ${totalPrice}
              </h3>
            </div>
          )
        })}
    </div>
  )
}
