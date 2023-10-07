export default function ProductInfoStock({
  productVariation,
  setSelectedSize,
}) {
  const sizeTable = [
    { id: 1, size: 'XS' },
    { id: 2, size: 'S' },
    { id: 3, size: 'M' },
    { id: 4, size: 'L' },
    { id: 5, size: 'XL' },
  ]
  const stock = productVariation.data.attributes.stock_quantity

  function checkSizesMatch(stockItem, size) {
    return stockItem[size] == null || stockItem[size] === 0
  }

  return (
    <>
      <h2>Sizes</h2>
      {productVariation.data != null && (
        <select
          onChange={(e) => {
            if (e.target.value !== '') {
              if (stock[e.target.value]) setSelectedSize(e.target.value)
            }
          }}
        >
          <option value="" hidden>
            Select a size
          </option>
          {sizeTable.map((item) => {
            const { id, size } = item
            const isSizeAvailable = checkSizesMatch(stock, size)
            return (
              <option
                className="size-option"
                key={id}
                value={size}
                disabled={isSizeAvailable}
              >
                {size}
                {isSizeAvailable && ' Out of stock'}
                {stock[size] > 0 &&
                  stock[size] < 4 &&
                  ` (Last ${stock[size]} stock)`}
              </option>
            )
          })}
        </select>
      )}
    </>
  )
}
