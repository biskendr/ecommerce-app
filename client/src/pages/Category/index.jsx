import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '@/hooks/useFetch'
import useFilters from '@/hooks/useFilters'
import Filter from '~/Filter'
import List from '~/List'
import Error from '~/Error'
import Loading from '~/Loading'

export default function Category() {
  const { categoryID } = useParams()
  const [filters, setFilters, resetFilters] = useFilters()
  const { category, sort, price } = filters

  const { data, loading, error } = useFetch(
    `/categories/${categoryID}?fields=title&populate[sub_categories][fields]=title&populate[products][populate]=title,image${category
      .map(
        (item) =>
          `&populate[products][filters][sub_categories][id][$eq]=${item}`
      )
      .join('')}&populate[products][filters][price][$lte]=${price}${
      sort != null ? `&populate[products][sort]=price:${sort}` : ''
    }`
  )
  useEffect(() => {
    resetFilters()
  }, [categoryID, resetFilters])

  if (error) return <Error />
  if (!data && loading) return <Loading />

  return (
    <div className="category">
      {data && (
        <>
          <h1 className="category-title">
            {data.attributes.title.toUpperCase()}
          </h1>
          <div className="category-content">
            <Filter
              data={data.attributes.sub_categories.data}
              filters={filters}
              setFilters={setFilters}
              resetFilters={resetFilters}
            />
            {loading ? (
              <Loading />
            ) : (
              <List data={data.attributes.products.data} />
            )}
          </div>
        </>
      )}
    </div>
  )
}
