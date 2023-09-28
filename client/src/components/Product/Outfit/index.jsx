import { Link } from 'react-router-dom'

export default function ProductOutfit({ data }) {
  const { data: outfits } = data.outfits
  return (
    <div className="outfit">
      <h1>Outfits</h1>
      {outfits.map((item) => {
        const { title, image } = item.attributes
        const { url, name } = image.data[0].attributes.formats.small
        return (
          <Link
            key={item.id}
            to={`/products/${item.id}`}
            className="outfit-wrapper"
          >
            <img src={url} alt={name} />
            <h3>{title}</h3>
          </Link>
        )
      })}
    </div>
  )
}
