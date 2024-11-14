import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackButton from'../../assets/image/backButton.svg';

const Header = ({ title }) => {
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

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    width: 100%;
    max-width: 390px;
    height: 50px; /* 필요에 따라 높이 조정 */
    background-color: ${({ theme }) => theme.colors.white || '#ffffff'};
    border-bottom: 1px solid #e0e0e0;
`;

const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black || '#000000'};

    &:hover {
        opacity: 0.8;
    }
    img {
        width: 20px;
        height: 20px;
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