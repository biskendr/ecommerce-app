export default function CreditCardForm({ user, cartLength, handlePayment }) {
  return (
    <div className="payment-credit-card">
      <div className="payment-credit-card-wrapper">
        <h1>Pay With Card</h1>
        <form onSubmit={handlePayment}>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              value={`Email ${user.email}`}
              readOnly="readonly"
              disabled
            />
          </label>
          <div className="form-card-information">
            <h2>Card Information</h2>
            <label htmlFor="card">
              <input
                type="text"
                name="card"
                maxLength={19}
                placeholder="4242 4242 4242 4242"
              />
            </label>
            <div className="both">
              <label htmlFor="date">
                <input
                  type="text"
                  name="date"
                  placeholder="MM / YY"
                  maxLength={5}
                />
              </label>
              <label htmlFor="cvc">
                <input type="text" name="cvc" placeholder="CVC" maxLength={3} />
              </label>
            </div>
          </div>
          <div className="form-address-information">
            <h2>Address Information</h2>
            <label htmlFor="country">
              <input
                type="text"
                name="country"
                value={user.address[0].country}
                readOnly
                disabled
              />
            </label>
            <label htmlFor="city">
              <input
                type="text"
                name="city"
                value={user.address[0].city}
                readOnly
                disabled
              />
            </label>
            <label htmlFor="address">
              <input
                type="text"
                name="address"
                value={user.address[0].address}
                readOnly
                disabled
              />
            </label>
          </div>
          <button type="submit" disabled={cartLength < 1}>
            Pay
          </button>
        </form>
      </div>
    </div>
  )
}
