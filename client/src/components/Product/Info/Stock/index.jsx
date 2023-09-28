import ProductInfoBasket from '../Basket'

export default function ProductInfoStock({ productVariation }) {
  const sizeTable = [
    { size: 'XS' },
    { size: 'S' },
    { size: 'M' },
    { size: 'L' },
    { size: 'XL' },
  ]
  const stock = productVariation.data.attributes.stock_quantity

  function checkSizesMatch(stockItem, size) {
    return stockItem[size] == null || stockItem[size] === 0
  }

  return (
    <>
      <h3>Sizes</h3>
      {productVariation.data != null && (
        <select>
          <option value="" disabled hidden>
            Select a size
          </option>
          {sizeTable.map((item) => {
            const isSizeAvailable = checkSizesMatch(stock, item.size)
            return (
              <option
                className="size-option"
                key={item.id}
                value={item.size}
                disabled={isSizeAvailable}
              >
                {item.size}
                {isSizeAvailable && ' Out of stock'}
                <span className="product-info-stock">
                  {stock[item.size] > 0 &&
                    stock[item.size] < 4 &&
                    ` (Last ${stock[item.size]} stock)`}
                </span>
              </option>
            )
          })}
        </select>
      )}
      <ProductInfoBasket />
    </>
  )
}
