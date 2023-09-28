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
  return (
    <div className="product">
      <div className="product-detail">
        <ProductGalery data={{ image }} />
        <ProductInfo
          data={{
            title,
            description,
            material,
            price,
            relationProducts,
            productVariation,
          }}
        />
      </div>
      <ProductOutfit data={{ outfits, title }} />
    </div>
  )
}
