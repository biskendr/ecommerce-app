import { Link } from 'react-router-dom'
import { useState } from 'react'
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
