export default function Stripe() {
  return (
    <div className="stripe">
      <div className="stripe-wrapper">
        <div className="stripe-right-to-left">
          {Array.from({ length: 10 }, (_, i) => `item-${i}`).map((item) => (
            <p key={item} className="stripe-content">
              NEW SEASON CLOTHES
            </p>
          ))}
        </div>
        <div className="stripe-mid" />
        <div className="stripe-left-to-right">
          {Array.from({ length: 10 }, (_, i) => `item-${i}`).map((item) => (
            <p key={item} className="stripe-content">
              WORLDWIDE DELIVERY
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
