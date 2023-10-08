import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export default function PrivateRoute({ children }) {
  if (!Cookies.get('user')) return <Navigate to="/login" />
  return children
}
