import styled from 'styled-components';
import loginLogo from '../../assets/image/login/loginLogo.svg';
import kakaoButton from '../../assets/image/login/kakaoButton.svg';

export default function LoginPage() {
  return (
    <LoginContainer>
      <img src={loginLogo} alt="Login Logo" />
      <KakaoButton src={kakaoButton} alt="kakao Button" />
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh; /* 전체 뷰포트 높이를 차지하도록 변경 */
  max-width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  padding: 2rem 0;
  padding-top: 3.8rem;
`;

const KakaoButton = styled.img`
  padding-top: 5rem;
  cursor: pointer;
`;