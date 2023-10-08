import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  dispatchClearWishlist,
  dispatchRemoveItemWishlist,
} from '@/utils/wishlistUtils'

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
                <p>{title}</p>
                <span
                  role="presentation"
                  className="material-symbols-sharp remove"
                  onClick={() => dispatchRemoveItemWishlist({ id })}
                >
                  close
                </span>
              </div>
            )
          })}
        </div>
      ) : (
        <div>There are no products in the wishlist.</div>
      )}
      {wishlist.length > 0 && (
        <div className="wishlist-wrapper-item">
          <span
            role="presentation"
            className="material-symbols-sharp clear"
            onClick={() => dispatchClearWishlist()}
          >
            delete
          </span>
        </div>
      )}
    </div>
  )
}
