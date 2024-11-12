// src/layouts/MainLayout.js
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/Header';
import BottomNavigation from '../components/common/BottomNavigation';

const BottomNavLayout = () => {
  return (
    <BottomNavLayoutContainer>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <BottomNavWrapper>
        <BottomNavigation />
      </BottomNavWrapper>
    </BottomNavLayoutContainer>
  );
};

export default BottomNavLayout;

// Styled Components
const BottomNavLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; /* 전체 화면 높이를 차지하도록 설정 */
`;

const HeaderWrapper = styled.div`
    flex-shrink: 0; /* Header가 줄어들지 않도록 설정 */
    width: 100%;
`;

const ContentWrapper = styled.main`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
`;

const BottomNavWrapper = styled.div`
    flex-shrink: 0; /* BottomNavigation이 줄어들지 않도록 설정 */
    width: 100%;
`;