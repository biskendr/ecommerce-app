import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '@/layouts/Home'
import Loading from '~/Loading'
import Home from '@/pages/Home'
import Category from '@/pages/Category'
import Product from '@/pages/Product'

// const Home = lazy(() => import('@/pages/Home'))
// const Category = lazy(() => import('@/pages/Category'))
// const Product = lazy(() => import('@/pages/Product'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/categories/:categoryID',
        element: (
          <Suspense fallback={<Loading />}>
            <Category />
          </Suspense>
        ),
        errorElement: <h1>Error</h1>,
      },
      {
        path: '/products/:productID',
        element: (
          <Suspense fallback={<Loading />}>
            <Product />
          </Suspense>
        ),
      },
    ],
  },
])

export default routes
