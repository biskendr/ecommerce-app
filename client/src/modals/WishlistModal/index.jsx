import {
  dispatchClearWishlist,
  dispatchRemoveItemWishlist,
} from '@/utils/wishlistUtils'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function WishlistModal() {
  const { wishlist } = useSelector((state) => state.wishlist)
  return (
    <div className="wishlist">
      <h1>Wislist</h1>
      {wishlist.length > 0 ? (
        <div className="wishlist-wrapper">
          {wishlist.map((item) => {
            const { id, image, title } = item
            const { url, name } = image.data[0].attributes.formats.thumbnail
            return (
              <div className="wishlist-wrapper-item" key={id}>
                <Link to={`/products/${id}`}>
                  <img src={url} alt={name} />
                </Link>
                <h2>{title}</h2>
                <button
                  type="button"
                  className="wishlist-wrapper-button-close"
                  onClick={() => dispatchRemoveItemWishlist({ id })}
                >
                  <span className="material-symbols-sharp">close</span>
                </button>
              </div>
            )
          })}
        </div>
      ) : (
        <div>There are no products in the wishlist.</div>
      )}
      {wishlist.length > 0 && (
        <button
          type="button"
          className="wishlist-wrapper-button-clear"
          onClick={() => dispatchClearWishlist()}
        >
          <span className="material-symbols-sharp">delete</span>
        </button>
      )}
    </div>
  )
}
