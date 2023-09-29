import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductGalery from './Galery'
import ProductInfo from './Info'
import ProductOutfit from './Outfit'

export default function ProductDetail({ data }) {
  const {
    title,
    description,
    material,
    price,
    image,
    outfits,
    relation_products: relationProducts,
    product_variation: productVariation,
  } = data.attributes

  const { wishlist } = useSelector((state) => state.wishlist)

  const isProductInWishlist = wishlist.some((whis) => whis.id === data.id)

  const [isFavorite, setIsFavorite] = useState(isProductInWishlist)

  useEffect(() => {
    setIsFavorite(wishlist.some((whis) => whis.id === data.id))
  }, [wishlist, data.id])

  return (
    <div className="product">
      <div className="product-detail">
        <ProductGalery data={{ image }} />
        <ProductInfo
          data={{
            id: data.id,
            title,
            description,
            image,
            material,
            price,
            relationProducts,
            productVariation,
          }}
          isFavorite={isFavorite}
        />
      </div>
      <ProductOutfit data={{ outfits, title }} />
    </div>
  )
}
