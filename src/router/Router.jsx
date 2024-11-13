import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout.jsx';
import DetailLayout from '../layouts/DetailLayout.jsx';
import NavLayout from '../layouts/NavLayout.jsx';
import HomeLayout from '../layouts/HomeLayout.jsx';
import LoginPage from '../pages/Login/LoginPage';
import UserSelectionPage from '../pages/Login/UserSelectionPage.jsx';
import HomePage from '../pages/Home/HomePage.jsx';
import SalesListPage from '../pages/Sales/SalesListPage';
import SalesDetailPage from '../pages/Sales/SalesDetailPage';
import SellerDetailPage from '../pages/Sales/SellerDetailPage';
import RestaurantsListPage from '../pages/Restaurant/RestaurantsListPage';
import RestaurantDetailPage from '../pages/Restaurant/RestaurantsDetailPage';

const router = createBrowserRouter([
  // 메인 Layout 경로 (로그인 관련)
  {
    path: '/',
    element: <Layout />, // 기본 Layout (로그인 관련 페이지)
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'select-user', element: <UserSelectionPage /> },
    ],
  },

  // 바텀 네비게이션이 없는 상세 페이지 Layout
  {
    path: 'details', // '/details'로 시작하는 모든 경로
    element: <DetailLayout />, // Nav 없는 레이아웃
    children: [
      { path: 'sales/:productId', element: <SalesDetailPage /> },
      { path: 'seller/:sellerId', element: <SellerDetailPage /> },
      { path: 'restaurant/:restaurantId', element: <RestaurantDetailPage /> },
    ],
  },

  // 바텀 네비게이션이 있는 일반 Layout
  {
    path: '/',
    element: <NavLayout />, // Nav가 있는 일반 레이아웃
    children: [
      { path: 'sales', element: <SalesListPage /> },
      { path: 'restaurants', element: <RestaurantsListPage /> },
    ],
  },

  // 홈 페이지 전용 Layout
  {
    path: '/',
    element: <HomeLayout />, // 홈 레이아웃
    children: [
      { path: 'home', element: <HomePage /> },
    ],
  },
]);

export default router;