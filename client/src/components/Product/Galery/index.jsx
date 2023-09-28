import { Fragment, useState } from 'react'

export default function ProductGalery({ data }) {
  const { data: images } = data.image
  const [focusImage, setFocusImage] = useState({
    url: images[0].attributes.formats.medium.url,
    name: images[0].attributes.formats.medium.name,
  })
  return (
    <div className="product-galery">
      <div className="product-galery-wrapper">
        {images.map((item) => {
          const { url, name } = item.attributes.formats.small
          const { url: focus } = item.attributes.formats.medium
          return (
            <Fragment key={item.id}>
              <img
                src={url}
                alt={name}
                role="presentation"
                onClick={() => setFocusImage({ url: focus, name })}
              />
            </Fragment>
          )
        })}
      </div>
      <img src={focusImage.url} alt={focusImage.name} />
    </div>
  )
}
