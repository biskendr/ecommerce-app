import { useParams } from 'react-router-dom'
import useFetch from '@/hooks/useFetch'
import ProductDetail from '~/Product'
import Error from '~/Error'
import Loading from '~/Loading'

export default function Product() {
  const { productID } = useParams()
  const { data, loading, error } = useFetch(
    `products/${productID}?populate[image][populate]=*
    &populate[relation_products][populate]=*
    &populate[product_variation][populate]=stock_quantity
    &populate[outfits][populate]=*`
  )

  if (error) return <Error />
  if (loading) return <Loading />

  return <div>{data && <ProductDetail data={data} />}</div>
}
