import styled from 'styled-components';
import heart from '../../assets/image/heart.svg';

const DetailBottomNavigation = () => {
  return (
    <NavigationContainer>
      <NavItem>
        <IconImage src={heart} alt="Heart" />
      </NavItem>
      <ButtonSection>
        <NavText>전화로 예약하기</NavText>
      </ButtonSection>
    </NavigationContainer>
  );
};

export default DetailBottomNavigation;

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
    border-top: 1px solid #e0e0e0;
`;

const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3px;
    
    
`;

const ButtonSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 3px;
    background-color: ${({ theme }) => theme.colors.main};
    width: 70%;
    height: 90%;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    
`;

const IconImage = styled.img`
    width: 31px;
    height: 41px;
    cursor: pointer;
`;

const NavText = styled.p`
    font-size: 17px;
    color: #FFFFFF; 
    margin: 0;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    align-items: center;
`;