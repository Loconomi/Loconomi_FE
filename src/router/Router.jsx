import { createBrowserRouter } from 'react-router-dom';
import NoNavLayout from '../layouts/NoNavLayout'; // 바텀 네비 없는 레이아웃
import LoginPage from '../pages/Login/LoginPage';
import UserSelectionPage from '../pages/UserSelectionPage.jsx';
import HomePage from '../pages/HomePage';
import SalesListPage from '../pages/Sales/SalesListPage';
import SalesDetailPage from '../pages/Sales/SalesDetailPage';
import SellerDetailPage from '../pages/Sales/SellerDetailPage';
import RestaurantsListPage from '../pages/Restaurant/RestaurantsListPage';
import RestaurantDetailPage from '../pages/Restaurant/RestaurantsDetailPage';
import BottomNavLayout from '../layouts/BottomNavLayout.jsx';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/select-user',
    element: <UserSelectionPage />,
  },
  {
    path: '/',
    element: <BottomNavLayout />, // 바텀 네비 포함된 레이아웃
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'sales',
        element: <SalesListPage />,
      },
      {
        path: 'restaurants',
        element: <RestaurantsListPage />,
      },
    ],
  },
  {
    path: '/details',
    element: <NoNavLayout />, // 바텀 네비가 없는 레이아웃
    children: [
      {
        path: 'sales/:productId',
        element: <SalesDetailPage />,
      },
      {
        path: 'seller/:sellerId',
        element: <SellerDetailPage />,
      },
      {
        path: 'restaurant/:restaurantId',
        element: <RestaurantDetailPage />,
      },
    ],
  },
]);

export default router;