import { lazy } from 'react'

export const Home = lazy(() => import('@/pages/Home'))
export const Category = lazy(() => import('@/pages/Category'))
export const Product = lazy(() => import('@/pages/Product'))
export const Profile = lazy(() => import('@/pages/Profile'))
export const Login = lazy(() => import('@/pages/Login'))
export const Register = lazy(() => import('@/pages/Register'))
export const ProfileCart = lazy(() => import('@/pages/Profile/Cart'))
