import styled from 'styled-components';

export default function LoginPage() {
  return (
    <LoginContainer>
      <Logo>
        버려진 농산물 이야기<br />
        <HighlightText>농담</HighlightText>
      </Logo>
      <ImageBox></ImageBox>
      <Button>카카오 로그인</Button>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
    width: 100%;
    height: 100dvh;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.black};
    padding: 2rem 0;
`;

const Logo = styled.p`
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
`;

const HighlightText = styled.span`
    display: block;
    font-size: 2.2rem;
    font-weight: bold;  
    color: ${({ theme }) => theme.colors.green || 'green'}; 
    margin-top: 0.5rem;
`;

const ImageBox = styled.div`
    width: 60%;
    height: 20%;
    background-color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 2rem;
`;

const Button = styled.button`
    width: 20rem;
    height: 3.125rem;
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    margin-top: 2rem;
`;
