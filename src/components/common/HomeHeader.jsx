import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackButton from'../../assets/image/Expand_left_light.png';

const HomeHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <ButtonContainer onClick={() => navigate(-1)}>
        <img src={BackButton} alt="Back" />
      </ButtonContainer>
      {title && <Title>{title}</Title>}
    </HeaderContainer>
  );
};

export default HomeHeader;

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    width: 100%;
    max-width: 390px;
    height: 60px; 
    background-color: ${({ theme }) => theme.colors.white || '#ffffff'};
    border-bottom: 1px solid #e0e0e0;
`;

const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black || '#000000'};

    &:hover {
        opacity: 0.8;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        cursor: pointer;
    }
`;

const Title = styled.h1`
    flex: 1;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black || '#000000'};
`;