import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserModal() {
  const [person, setPerson] = useState('')

  useEffect(() => {
    if (Cookies.get('user')) setPerson(JSON.parse(Cookies.get('user')))
  }, [person])

  const handleLogout = () => {
    Cookies.remove('user')
    setPerson('')
  }

  if (!Cookies.get('user')) {
    return (
      <div>
        <h1>Login</h1>
        <button type="button">
          <Link to="/login">Sign Up</Link>
        </button>
        <button type="button" style={{ backgroundColor: 'blue' }}>
          <Link to="/login/register">Sign Up</Link>
        </button>
      </div>
    )
  }

  return (
    <div>
      {person && (
        <>
          <h1>{person.user.username}</h1>
          <h1>{person.user.email}</h1>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  )
}
