import { useParams } from 'react-router-dom'

export default function Product() {
  const { productID } = useParams()
  return <div>Product - {productID}</div>
}
