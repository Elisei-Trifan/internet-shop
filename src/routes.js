import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Shop from './pages/Basket'
import Auth from './pages/Basket'
import DevicePage from './pages/Basket'
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from './utils/consts'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: Admin,
  },
  {
    path: BASKET_ROUTE,
    element: Basket,
  },
]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    element: Shop,
  },
  {
    path: LOGIN_ROUTE,
    element: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    element: Auth,
  },
  {
    path: DEVICE_ROUTE,
    element: DevicePage,
  },
]
