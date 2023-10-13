import useFetch from '@/hooks/useFetch'
import Cookies from 'js-cookie'
import Error from '~/Error'
import Loading from '~/Loading'

export default function ProfileOrders() {
  const { id } = JSON.parse(Cookies.get('user')).user
  const { data, loading, error } = useFetch(
    `/orders?filters[user][id][$eq]=${id}`
  )

  if (error) return <Error />
  if (loading) return <Loading />

  return (
    <div className="profile-orders container">
      <div className="profile-orders-wrapper">
        <h1>Orders</h1>
        {data &&
          data.map((order) => (
            <div key={order.id}>
              <h1>{order.attributes.createdAt.slice(0, 10)}</h1>
              {order.attributes.orderDetail.map((orderProduct) => {
                const { id: productID, title, size } = orderProduct
                return (
                  <div key={productID + size}>
                    <h2>{title}</h2>
                  </div>
                )
              })}
              <br />
            </div>
          ))}
      </div>
    </div>
  )
}
