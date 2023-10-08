export default function Filter(props) {
  const { data, filters, setFilters, resetFilters } = props
  const { category, price, sort } = filters

  return (
    <div className="filter">
      {data && filters && (
        <>
          <h1>
            Filters
            <span
              role="presentation"
              className="material-symbols-sharp reset"
              type="button"
              onClick={resetFilters}
            >
              restart_alt
            </span>
          </h1>
          <div className="filter-items">
            <div className="filter-item">
              <h2>Categories</h2>
              {data.map((item) => {
                const { id, attributes } = item
                const { title } = attributes
                return (
                  <div key={id} className="filter-item-category">
                    <input
                      type="checkbox"
                      name="category"
                      checked={category.includes(id.toString())}
                      id={id}
                      value={id}
                      onChange={setFilters}
                    />
                    <label htmlFor="category">{title}</label>
                  </div>
                )
              })}
            </div>
            <div className="filter-item">
              <h2>Price</h2>
              <div className="filter-item-price">
                <span>$0</span>
                <input
                  name="price"
                  type="range"
                  min={0}
                  max={100}
                  step={5}
                  value={price}
                  onChange={setFilters}
                />
                <span>${price}</span>
              </div>
            </div>
            <div className="filter-item">
              <h2>Sort</h2>
              <div className="filter-item-sort">
                <label htmlFor="sort">
                  <input
                    type="radio"
                    id="asc"
                    value="asc"
                    name="sort"
                    checked={sort === 'asc'}
                    onChange={setFilters}
                  />
                  Price (Lowest first)
                </label>
              </div>
              <div className="filter-item-sort">
                <label htmlFor="sort">
                  <input
                    type="radio"
                    id="desc"
                    value="desc"
                    name="sort"
                    checked={sort === 'desc'}
                    onChange={setFilters}
                  />
                  Price (Highest first)
                </label>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
