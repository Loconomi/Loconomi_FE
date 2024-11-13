import styled from 'styled-components';

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <NavItem>
        <IconImage src="/svg/Home.svg" alt="Home" />
        <NavText>홈</NavText>
      </NavItem>
      <NavItem>
        <IconImage src="/svg/Basket.svg" alt="Restaurant" />
        <NavText>농담마켓</NavText>
      </NavItem>
      <NavItem>
        <IconImage src="/svg/burger.svg" alt="Market" />
        <NavText>농담식당</NavText>
      </NavItem>
    </NavigationContainer>
  );
};

export default BottomNavigation;

const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-around; 
    position: fixed;
    bottom: 0;
    align-items: center;
    width: 100%;
    max-width: 390px;
    height: 60px;
    background-color: white;
    padding: 10px 0;
    border-top: none;
`;

const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3px;
`;

const IconImage = styled.img`
    width: 35px;
    height: 35px;
    cursor: pointer;
`;

const NavText = styled.p`
    font-size: 13px;
    color: #333; 
    margin: 0;
    cursor: pointer;
`;