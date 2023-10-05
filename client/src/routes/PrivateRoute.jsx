import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
  if (!Cookies.get('user')) return <Navigate to="/login" />
  return children
}
