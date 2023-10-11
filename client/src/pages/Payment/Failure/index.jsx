import { Link } from 'react-router-dom'

export default function PaymentFailure() {
  return (
    <div className="payment-failure">
      <div className="payment-failure-content">
        <div className="payment-failure-content-text">
          <h1>There was a problem while your payment proccess.</h1>
          <span className="material-symbols-sharp">close</span>
        </div>
        <div>
          <h3>Please try again the payment process</h3>
          <span className="material-symbols-sharp">arrow_forward_ios</span>
          <Link to="/payment">Payment</Link>
        </div>
      </div>
    </div>
  )
}
