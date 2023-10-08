import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { getUser } from '@/services/ApiInstance'
import Error from '~/Error'
import Loading from '~/Loading'

export default function Profile() {
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
    <div className="profile container">
      {user && (
        <>
          <div className="profile-info">
            <span className="material-symbols-sharp">account_circle</span>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
          <hr />
          <div className="profile-address">
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
        </>
      )}
    </div>
  )
}
