import { Link } from 'react-router-dom'

export default function List({ data }) {
  return (
    <div className="list">
      <div className="list-items">
        {data && data.length > 1 ? (
          data.map((item) => {
            const { title, image, price } = item.attributes
            return (
              <Link
                to={`/products/${item.id}`}
                key={item.id}
                className="list-items-wrap"
              >
                <img
                  src={image.data[0].attributes.formats.small.url}
                  alt={title}
                />
                <h2>{title}</h2>
                <h3>${price}</h3>
              </Link>
            )
          })
        ) : (
          <div className="list-no-match">
            <h2>No products matching your search were found.</h2>
          </div>
        )}
      </div>
    </div>
  )
}
