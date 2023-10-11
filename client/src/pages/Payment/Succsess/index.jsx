export default function PaymentSuccess() {
  return (
    <div className="payment-success">
      <div className="payment-success-content">
        <div className="payment-success-content-text">
          <h1>Your payment has been successfully. </h1>
          <span className="material-symbols-sharp">done</span>
        </div>
        <h3>You will be directed to the profile page.</h3>
      </div>
      <div className="progress">
        <div className="progress-wrapper">
          <div className="progress-wrapper-bar" />
        </div>
      </div>
    </div>
  )
}
