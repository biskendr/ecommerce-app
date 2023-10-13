import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { getUser } from '@/services/ApiInstance'
import Loading from '~/Loading'
import Error from '~/Error'

export default function ProfileAddress() {
  const [user, setUser] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

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
    <div className="profile-address">
      {user.address[0] && (
        <div className="profile-address-wrapper">
          <h1>Addres Information</h1>
          <label htmlFor="country">
            Country
            <p>{user.address[0].country}</p>
          </label>
          <label htmlFor="city">
            City
            <p>{user.address[0].city}</p>
          </label>
          <label htmlFor="address">
            Address
            <p>{user.address[0].address}</p>
          </label>
        </div>
      )}
    </div>
  )
}
