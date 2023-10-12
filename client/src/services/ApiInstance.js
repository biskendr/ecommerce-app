import axios from 'axios'

const ApiInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer  ${import.meta.env.VITE_API_KEY}`,
    'Content-Type': 'application/json',
  },
})

export const getData = (url) => ApiInstance.get(url)

export const getUser = (jwt) => {
  const url = '/users/me?populate=*'
  return ApiInstance.get(url, {
    headers: {
      Authorization: `Bearer  ${jwt}`,
    },
  })
}
export const postLogin = (identifier, password) => {
  const url = '/auth/local'
  return ApiInstance.post(url, { identifier, password })
}
export const postRegister = (form) => {
  const url = '/auth/local/register'
  const { username, email, password, country, city, address } = form
  return ApiInstance.post(url, {
    username,
    email,
    password,
    address: [
      {
        country,
        city,
        address,
      },
    ],
  })
}
export const getProductVariations = () =>
  ApiInstance.get('/product-variations?populate=*')

export const putProductVariations = (id, data) =>
  ApiInstance.put(`/product-variations/${id}`, { data })

export const postOrder = (user, orderDetail) =>
  ApiInstance.post('/orders', { data: { user, orderDetail } })

export default ApiInstance
