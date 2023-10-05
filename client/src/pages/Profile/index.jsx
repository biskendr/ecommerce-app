import { getUser } from '@/services/ApiInstance'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

export default function Profile() {
  const [user, setUser] = useState()
  useEffect(() => {
    const { jwt } = JSON.parse(Cookies.get('user'))
    getUser(jwt).then((res) => setUser(res.data))
  }, [])

  return (
    <div className="profile">
      {user && (
        <div>
          <h1>Name: {user.username}</h1>
          <h1>Email: {user.email}</h1>
          <h1>Addres Information</h1>
          <h1>Country: {user.address[0].country}</h1>
          <h1>City: {user.address[0].city}</h1>
          <h1>Address: {user.address[0].address}</h1>
        </div>
      )}
      <Outlet />
    </div>
  )
}
