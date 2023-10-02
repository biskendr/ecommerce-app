import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '@/layouts/Home'
import NotFound from '~/NotFound'
import Loading from '~/Loading'
import LoginLayout from '@/layouts/Login'
import {
  Home,
  Category,
  Product,
  Profile,
  Login,
  Register,
} from './LazyComponent'

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
        path: '/login',
        element: <LoginLayout />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            ),
          },
          {
            path: 'register',
            element: (
              <Suspense fallback={<Loading />}>
                <Register />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: '/profile',
        element: (
          <Suspense fallback={<Loading />}>
            <Profile />
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
