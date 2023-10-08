import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductInfoStock from './Stock'
import ProductInfoBasket from './Basket'

export default function ProductInfo({ data, isFavorite }) {
  const {
    id,
    title,
    price,
    description,
    material,
    image,
    relationProducts,
    productVariation,
  } = data

  const [selectedSize, setSelectedSize] = useState('')
  return (
    <div className="product-info">
      <h1>{title}</h1>
      <h1>${price}</h1>
      <h2>Descriptions</h2>
      <p>{description}</p>
      <h2>Materials</h2>
      <p>{material}</p>
      {relationProducts.data.length > 0 && (
        <>
          <h2>Colors</h2>
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
      <ProductInfoStock
        productVariation={productVariation}
        setSelectedSize={setSelectedSize}
      />
      <ProductInfoBasket
        data={{
          selectedSize,
          isFavorite,
          id,
          title,
          image,
          price,
          productVariation,
        }}
      />
    </div>
  )
}
