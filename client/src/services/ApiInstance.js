import axios from 'axios'

const ApiInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer  ${import.meta.env.VITE_API_KEY}`,
    'Content-Type': 'application/json',
  },
})

export default ApiInstance
