import { Link } from 'react-router-dom'

export default function PaymentFailure() {
  return (
    <div className="payment-failure">
      <h1>There was a problem while your payment proccess.</h1>
      <h3>
        Please try again the payment process{' '}
        <span className="material-symbols-sharp">arrow_forward_ios</span>
        <Link to="/payment">Payment</Link>
      </h3>
    </div>
  )
}
