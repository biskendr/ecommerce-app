import { dispatchAddItemCart } from '@/utils/cartUtils'
import {
  dispatchAddItemWishlist,
  dispatchRemoveItemWishlist,
} from '@/utils/wishlistUtils'
import { useEffect, useState } from 'react'

export default function ProductInfoBasket({ data }) {
  const [quantity, setQuantity] = useState(1)
  const {
    selectedSize,
    isFavorite,
    id,
    title,
    image,
    price,
    productVariation,
  } = data
  const { stock_quantity: stock } = productVariation.data.attributes

  useEffect(() => {
    setQuantity(1)
  }, [selectedSize])

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
        onClick={() => setQuantity((prev) => prev + 1)}
        disabled={stock[selectedSize] <= quantity}
      >
        +
      </button>
      <button
        type="button"
        className="product-basket-add"
        onClick={() => {
          if (selectedSize !== '')
            dispatchAddItemCart({
              id,
              title,
              image,
              price,
              quantity,
              stock: stock[selectedSize],
              size: selectedSize,
            })
          // eslint-disable-next-line no-alert
          else alert('Please select a size')
        }}
      >
        ADD TO CART
      </button>
      <span
        // type="button"
        role="presentation"
        className={`material-symbols-sharp basket-wishlist${
          isFavorite ? '' : '-fill'
        }`}
        onClick={() => {
          if (!isFavorite) dispatchAddItemWishlist({ id, title, image })
          else dispatchRemoveItemWishlist({ id })
        }}
      >
        favorite
      </span>
    </div>
  )
}
