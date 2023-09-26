import useFetch from '@/hooks/useFetch.js'
import List from '~/List'
import Loading from '~/Loading'
import NotFound from '~/NotFound'
import Stripe from '~/Stripe'

export default function Home() {
  const { data, loading, error } = useFetch(
    `/products?populate=image&filters[$or][0][categories][id][$eq]=1&filters[$or][1][categories][id][$eq]=2&pagination[page]=1&pagination[pageSize]=4`
  )
  if (error) {
    return <NotFound />
  }
  if (loading) {
    return <Loading />
  }
  return (
    <div className="home">
      <div className="home-hero">
        <h1>Clothes</h1>
        <span className="material-symbols-sharp">checkroom</span>
        <span className="material-symbols-sharp">checkroom</span>
        <span className="material-symbols-sharp">checkroom</span>
      </div>
      <div className="home-products">{data && <List data={data} />}</div>
      <Stripe />
    </div>
  )
}
