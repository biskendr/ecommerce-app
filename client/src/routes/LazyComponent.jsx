import { lazy } from 'react'

export const Home = lazy(() => import('@/pages/Home'))
export const Category = lazy(() => import('@/pages/Category'))
export const Product = lazy(() => import('@/pages/Product'))
export const Profile = lazy(() => import('@/pages/Profile'))
export const Login = lazy(() => import('@/pages/Login'))
export const Register = lazy(() => import('@/pages/Register'))
export const Payment = lazy(() => import('@/pages/Payment'))
export const Cart = lazy(() => import('@/pages/Cart'))
export const Address = lazy(() => import('@/pages/Profile/Address'))
export const Orders = lazy(() => import('@/pages/Profile/Orders'))
