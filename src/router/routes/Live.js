import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('../../views/live/home'))
const Products = lazy(() => import('../../views/live/ecommerce/shop'))
const ProductDetail = lazy(() => import('../../views/live/ecommerce/detail'))
const MyBids = lazy(() => import('../../views/live/my-bids'))
const AddProduct = lazy(() => import('../../views/live/add-product'))
const UserSettings = lazy(() => import('../../views/live/user-settings'))
const Login = lazy(() => import('../../views/live/login'))
const Register = lazy(() => import('../../views/live/register'))
const ForgotPassword = lazy(() => import('../../views/live/forgot-password'))
const AddBalance = lazy(() => import('../../views/live/add-balance'))


const LiveRoutes = [
 
  {
    path: '/live/home',
    element: <Home />
  },
  {
    path: '/live/products/:category',
    element: <Products />,
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    path: '/live/product/detail',
    element: <Navigate to='/live/product/detail/apple-i-phone-11-64-gb-black-26' />,
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    path: '/live/product/detail/:product',
    element: <ProductDetail />,
    meta: {
      className: 'ecommerce-application'
    }
  },
  {
    path: '/live/my-bids',
    element: <MyBids />
  },
  {
    path: '/live/add-product',
    element: <AddProduct />
  },
  {
    path: '/live/user/settings',
    element: <UserSettings />
  },
  {
    path: '/live/login',
    element: <Login />
  },
  {
    path: '/live/register',
    element: <Register />
  },
  {
    path: '/live/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/live/add-balance',
    element: <AddBalance />
  },
  {
    path: '*',
    element: <Navigate to='/live/home' />
  }
]

export default LiveRoutes
