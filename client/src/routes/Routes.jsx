import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '@/layouts/Home'
import LoginLayout from '@/layouts/Login'
import ProfileLayout from '@/layouts/Profile'
import PaymentLayout from '@/layouts/Payment'
import NotFound from '~/NotFound'
import Loading from '~/Loading'
import {
  Home,
  Category,
  Product,
  Profile,
  Login,
  Register,
  Payment,
  ProfileCart,
} from './LazyComponent'
import PrivateRoute from './PrivateRoute'

const wrapRoutes = (routes) =>
  routes.map((route) => {
    if (route.auth) {
      return {
        ...route,
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading />}>{route.element}</Suspense>
          </PrivateRoute>
        ),
        ...(route.children && {
          children: wrapRoutes(route.children),
        }),
      }
    }
    if (route.private) {
      return {
        ...route,
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading />}>{route.element}</Suspense>
          </PrivateRoute>
        ),
        ...(route.children && {
          children: wrapRoutes(route.children),
        }),
      }
    }
    return {
      ...route,
      element: <Suspense fallback={<Loading />}>{route.element}</Suspense>,
      ...(route.children && {
        children: wrapRoutes(route.children),
      }),
    }
  })

const routesConfig = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/categories/:categoryID',
        element: <Category />,
      },
      {
        path: '/products/:productID',
        element: <Product />,
      },
      {
        path: '/login',
        element: <LoginLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: 'register',
            element: <Register />,
          },
        ],
      },
      {
        path: '/profile',
        auth: true,
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: 'cart',
            element: <ProfileCart />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/payment',
    auth: true,
    private: true,
    element: <PaymentLayout />,
    children: [
      {
        index: true,
        element: <Payment />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

const wrappedRoutes = wrapRoutes(routesConfig)

const routes = createBrowserRouter(wrappedRoutes)

export default routes
