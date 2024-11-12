import styled from 'styled-components';

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <NavItem>
        <IconImage src="/svg/Home.svg" alt="Home" />
        <NavText>홈</NavText>
      </NavItem>
      <NavItem>
        <IconImage src="/svg/burger.svg" alt="Market" />
        <NavText>농담마켓</NavText>
      </NavItem>
      <NavItem>
        <IconImage src="/svg/Basket.svg" alt="Restaurant" />
        <NavText>농담식당</NavText>
      </NavItem>
    </NavigationContainer>
  );
};

export default BottomNavigation;

const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-around; /* 모든 아이템을 동일한 간격으로 배치 */
    align-items: center;
    bottom: 0;
    width: 100%;
    max-width: 530px;
    padding: 10px 0;
    background-color: white;
    border-top: none;
`;

const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5px;
    flex: 1; /* 각 아이템이 균등한 너비를 차지하도록 설정 */
    
`;

const IconImage = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;

`;

const NavText = styled.p`
    font-size: 12px;
    color: #333; /* 텍스트 색상을 명확히 지정 */
    margin: 0;
    cursor: pointer;

`;