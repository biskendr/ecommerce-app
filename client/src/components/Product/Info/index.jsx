import { Link } from 'react-router-dom'
import ProductInfoStock from './Stock'

export default function ProductInfo({ data }) {
  const {
    title,
    price,
    description,
    material,
    relationProducts,
    productVariation,
  } = data

  return (
    <div className="product-info">
      <h1>{title}</h1>
      <h2>${price}</h2>
      <h3>Descriptions</h3>
      <p>{description}</p>
      <h3>Materials</h3>
      <p>{material}</p>
      {relationProducts.data.length > 0 && (
        <>
          <h3>Colors</h3>
          {relationProducts.data.map((item) => {
            const { colorHex } = item.attributes
            return (
              <Link key={item.id} to={`/products/${item.id}`}>
                <span
                  className="product-info-colors-dot"
                  style={{
                    backgroundColor: `${colorHex}`,
                  }}
                />
              </Link>
            )
          })}
        </>
      )}
      <ProductInfoStock productVariation={productVariation} />
    </div>
  )
}
