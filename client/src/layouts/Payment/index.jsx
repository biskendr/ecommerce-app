import { useLocation, Outlet, useNavigate } from 'react-router-dom'
import PaymentFailure from '@/pages/Payment/Failure'
import PaymentSuccess from '@/pages/Payment/Succsess'
import { useEffect } from 'react'

export default function PaymentLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { search } = location
  const paymentSuccess = location.state?.paymentSuccess

  useEffect(() => {
    setTimeout(() => {
      if (paymentSuccess) {
        navigate('/profile')
      }
    }, 5000)
  }, [paymentSuccess, navigate, search])

  if (paymentSuccess && location.search !== '') return <PaymentSuccess />
  if ((!paymentSuccess && location.search !== '') || paymentSuccess === false)
    return <PaymentFailure />

  return <Outlet />
}
