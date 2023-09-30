import { useCallback, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import useFetch from '@/hooks/useFetch'
import { Link } from 'react-router-dom'
import Loading from '~/Loading'

export default function SearchModal() {
  const [searchQuery, setSearchQuery] = useState()
  const debouncedQuery = useDebounce(searchQuery)
  const { data, loading, error } = useFetch(
    `/products?filters[title][$containsi]=${debouncedQuery}&populate=image`
  )

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    if (e.target.value === '') setSearchQuery()
    else setSearchQuery(e.target.value)
  }, [])

  return (
    <div className="search">
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Hat, Tshirt, Hoodie..."
          onChange={(e) => handleSubmit(e)}
        />
      </form>
      {error && <p>Something wents wrong.</p>}
      {loading && <Loading />}
      {data && data.length > 1 ? (
        <div className="search-wrapper">
          {data.map((item) => {
            const { id } = item
            const { title } = item.attributes
            const { url, name } =
              item.attributes.image.data[0].attributes.formats.thumbnail
            return (
              <Link
                to={`/products/${id}`}
                key={id}
                className="search-wrapper-item"
              >
                <img src={url} alt={name} />
                <h1>{title}</h1>
              </Link>
            )
          })}
        </div>
      ) : (
        <p>No products matching your search were found.</p>
      )}
    </div>
  )
}
