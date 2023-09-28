import { useState } from 'react'

export default function ProductInfoBasket() {
  const [quantity, setQuantity] = useState(0)
  const [heart, setHeart] = useState(false)

  return (
    <div className="product-basket">
      <button
        type="button"
        className="product-basket-counter"
        onClick={() => setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))}
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        type="button"
        className="product-basket-counter"
        disabled={quantity < 1}
        onClick={() => setQuantity((prev) => prev + 1)}
      >
        +
      </button>
      <button type="button" className="product-basket-add">
        ADD TO CART
      </button>

      <button
        type="button"
        className={`material-symbols-sharp basket-wishlist${
          heart ? '-fill' : ''
        }`}
        onClick={() => setHeart(!heart)}
      >
        favorite
      </button>
    </div>
  )
}
