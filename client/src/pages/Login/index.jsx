import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { postLogin } from '@/services/ApiInstance'

export default function Login() {
  const navigate = useNavigate()
  const [togglePassword, setTogglePassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const setToken = (data) => {
    Cookies.set('user', JSON.stringify(data), { expires: 1 })
    navigate('/')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    postLogin(email, password)
      .then((res) => setToken(res.data))
      .catch((err) => {
        setError(err.response.data.error.message)
      })
  }
  return (
    <div className="login">
      <div className="login-signin">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <span className="material-symbols-sharp">mail</span>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <span className="material-symbols-sharp">lock</span>
            <input
              type={togglePassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {togglePassword ? (
              <span
                className="material-symbols-sharp password"
                onClick={() => setTogglePassword(!togglePassword)}
                role="presentation"
              >
                visibility
              </span>
            ) : (
              <span
                className="material-symbols-sharp password"
                onClick={() => setTogglePassword(!togglePassword)}
                role="presentation"
              >
                visibility_off
              </span>
            )}
          </label>
          {error !== null && <p>*{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
      <hr />
      <div className="login-signup">
        <h1>Create your account</h1>
        <Link to="register">
          <button type="button">Sign Up</button>
        </Link>
        <p>Sign up now and take advantage of the opportunities.</p>
      </div>
    </div>
  )
}
