// src/layouts/NoNavLayout.js
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header.jsx';

const NoNavLayout = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* 상세 페이지는 바텀 네비 없이 표시됨 */}
    </div>
  );
};

export default NoNavLayout;