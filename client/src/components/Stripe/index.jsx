/* eslint-disable react/no-array-index-key */
export default function Stripe() {
  return (
    <div className="stripe">
      <div className="stripe-right-to-left">
        {Array.from(new Array(10)).map((item, index) => (
          <p key={index} className="stripe-content">
            NEW SEASON CLOTHES
          </p>
        ))}
      </div>
      <div className="stripe-mid" />
      <div className="stripe-left-to-right">
        {Array.from(new Array(10)).map((item, index) => (
          <p className="stripe-content" key={index}>
            WORLDWIDE DELIVERY
          </p>
        ))}
      </div>
    </div>
  )
}
