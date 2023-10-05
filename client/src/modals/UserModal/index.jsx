import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Error from '~/Error'
import Loading from '~/Loading'

export default function UserModal() {
  const [person, setPerson] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const navigate = useNavigate()

  const handleLogout = () => {
    Cookies.remove('user')
    navigate(0)
  }

  useEffect(() => {
    setLoading(true)
    if (Cookies.get('user')) {
      const userData = JSON.parse(Cookies.get('user'))
      setPerson(userData.user)
      setLoading(false)
    } else {
      setError(true)
    }
  }, [])

  if (!Cookies.get('user')) {
    return (
      <div className="user-login">
        <h1>Sign in to your account</h1>
        <div className="user-login-button">
          <Link to="/login">
            <button type="button">Sign In</button>
          </Link>
          <Link to="/login">
            <button type="button">Sign Up</button>
          </Link>
        </div>
      </div>
    )
  }

  if (error) return <Error />
  if (loading) return <Loading />

  return (
    <div className="user">
      {Cookies.get('user') && person && (
        <>
          <h1>
            <span className="material-symbols-sharp">person</span>Hi{' '}
            {person.username}
          </h1>
          <Link to="/profile">
            <button type="button">Go to Profile</button>
          </Link>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  )
}
