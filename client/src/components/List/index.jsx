import { Link } from 'react-router-dom'

function ProductItem({ item }) {
  const { title, image, price } = item.attributes
  const imageUrl = image.data[0].attributes.formats.small.url

  return (
    <Link to={`/products/${item.id}`} key={item.id} className="list-items-wrap">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <h3>${price}</h3>
    </Link>
  )
}

export default function List({ data }) {
  return (
    <div className="list">
      <div className="list-items">
        {data && data.length > 0 ? (
          data.map((item) => <ProductItem key={item.id} item={item} />)
        ) : (
          <div className="list-no-match">
            <h2>No products matching your search were found.</h2>
          </div>
        )}
      </div>
    </div>
  )
}
