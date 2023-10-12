import useCreditCardForm from '@/hooks/useCreditCardForm'
import { postOrder } from '@/services/ApiInstance'
import {
  formatCVV,
  formatCardNumber,
  formatExpirationDate,
} from '@/lib/FormatCreditCard'
import handleInputChange from '@/lib/FormatInput'

export default function CreditCardForm({ user, cart, handlePayment, userID }) {
  const [cardInfo, handleChange, validateForm, errors] = useCreditCardForm()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validateForm()
    if (isValid) {
      const orderDetails = cart.map((item) => {
        const { id, title, size, price, quantity, image } = item
        const { url, name } = image.data[0].attributes.formats.medium

        return {
          id,
          title,
          size,
          price,
          quantity,
          image: { url, name },
        }
      })
      postOrder(userID, orderDetails)
      await handlePayment(e)
    } else throw new Error('Error')
  }

  const inputFields = [
    {
      name: 'cardNumber',
      type: 'text',
      icon: 'credit_card',
      placeholder: '4242 4242 4242 4242',
      value: formatCardNumber(cardInfo.cardNumber),
      onChange: (e) =>
        handleInputChange({
          name: 'cardNumber',
          value: e,
          handleChange,
          formatFunction: formatCardNumber,
        }),
      error: errors.cardNumber,
    },
    {
      name: 'expirationDate',
      type: 'text',
      placeholder: 'MM/YY',
      onChange: (e) =>
        handleInputChange({
          name: 'expirationDate',
          value: e,
          handleChange,
          formatFunction: formatExpirationDate,
        }),
      value: formatExpirationDate(cardInfo.expirationDate),
      error: errors.expirationDate,
    },
    {
      name: 'cvv',
      type: 'text',
      placeholder: 'CVV',
      value: formatCVV(cardInfo.cvv),
      onChange: (e) =>
        handleInputChange({
          name: 'cvv',
          value: e,
          handleChange,
          formatFunction: formatCVV,
        }),
      error: errors.cvv,
    },
  ]

  return (
    <div className="payment-credit-card">
      <div className="payment-credit-card-wrapper">
        <form onSubmit={handleSubmit}>
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
            {inputFields.map((field) => {
              const { name, type, placeholder, value, onChange, error } = field
              return (
                <label key={name} htmlFor={name}>
                  <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                  />
                  {error && <span>*{error}</span>}
                </label>
              )
            })}
          </div>
          <div className="form-address-information">
            <h2>Address Information</h2>
            <label htmlFor="country">
              <input
                type="text"
                name="country"
                value={`Country: ${user.address[0].country}`}
                readOnly
                disabled
              />
            </label>
            <label htmlFor="city">
              <input
                type="text"
                name="city"
                value={`City: ${user.address[0].city}`}
                readOnly
                disabled
              />
            </label>
            <label htmlFor="address">
              <input
                type="text"
                name="address"
                value={`Address: ${user.address[0].address}`}
                readOnly
                disabled
              />
            </label>
          </div>
          <button type="submit" disabled={cart.length < 1}>
            Pay
          </button>
        </form>
      </div>
    </div>
  )
}
