import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("../../views/live/home"));
const Products = lazy(() => import("../../views/live/ecommerce/shop"));
const ProductDetail = lazy(() => import("../../views/live/ecommerce/detail"));
const MyBids = lazy(() => import("../../views/live/my-bids"));
const AddProduct = lazy(() => import("../../views/live/add-product"));
const UserSettings = lazy(() => import("../../views/live/user-settings"));
const Login = lazy(() => import("../../views/live/login"));
const Register = lazy(() => import("../../views/live/register"));
const ForgotPassword = lazy(() => import("../../views/live/forgot-password"));
const AddBalance = lazy(() => import("../../views/live/add-balance"));
const MyProduct = lazy(() => import("../../views/live/my-products"));

const LiveRoutes = [
  {
    path: "/live/home",
    element: <Home />,
    meta: {
      publicRoute: true,
    },
  },
  {
    path: "/live/products/:category",
    element: <Products />,
    meta: {
      publicRoute: true,
      className: "ecommerce-application",
    },
  },

  {
    path: "/live/product/detail/:id",
    element: <ProductDetail />,
    meta: {
      className: "ecommerce-application",
      publicRoute: true,
    },
  },
  {
    path: "/live/my-bids",
    element: <MyBids />,
    meta: {
      privateRoute: true,
    },
  },
  {
    path: "/live/my-products",
    element: <MyProduct />,
    meta: {
      privateRoute: true,
    },
  },
  {
    path: "/live/add-product",
    element: <AddProduct />,
    meta: {
      privateRoute: true,
    },
  },
  {
    path: "/live/user/settings",
    element: <UserSettings />,
    meta: {
      privateRoute: true,
    },
  },
  {
    path: "/live/login",
    element: <Login />,
  },
  {
    path: "/live/register",
    element: <Register />,
  },
  {
    path: "/live/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/live/add-balance",
    element: <AddBalance />,
    meta: {
      privateRoute: true,
    },
  },
  {
    path: "*",
    element: <Navigate to="/live/home" />,
  },
];

export default LiveRoutes;
