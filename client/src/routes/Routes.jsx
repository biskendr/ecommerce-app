import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '@/layouts/Home'
import NotFound from '~/NotFound'
import Loading from '~/Loading'
import { Home, Category, Product } from './LazyComponent'

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
      },
      {
        path: '/products/:productID',
        element: (
          <Suspense fallback={<Loading />}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default routes
