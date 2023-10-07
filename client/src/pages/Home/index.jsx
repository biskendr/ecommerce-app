import useFetch from '@/hooks/useFetch'
import List from '~/List'
import Stripe from '~/Stripe'
import Error from '~/Error'
import Loading from '~/Loading'

export default function Home() {
  const { data, loading, error } = useFetch(
    `/products?populate=image&filters[$or][0][categories][id][$eq]=1&filters[$or][1][categories][id][$eq]=2&pagination[page]=1&pagination[pageSize]=4`
  )

  if (error) return <Error />
  if (loading) return <Loading />

  return (
    <div className="home">
      <div className="home-hero">
        <span>Clothes</span>
        <span className="material-symbols-sharp">checkroom</span>
        <span className="material-symbols-sharp">checkroom</span>
        <span className="material-symbols-sharp">checkroom</span>
      </div>
      <div className="home-products">{data && <List data={data} />}</div>
      <Stripe />
    </div>
  )
}
