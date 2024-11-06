import styled from 'styled-components';

export default function PageContainer({ children }) {
  return (
    <Container>
      <MainSection>{children}</MainSection>
    </Container>
  );
}

const Container = styled.main`
    @media (min-width: 490px) {
        max-width: ${({ theme }) => theme.sizes.maxWidth};
    }
`;

const MainSection = styled.section`
    display: flex;
    position: relative;
    width: 100%;
    min-height: 100vh;
    min-width: 350px; // 최소 너비 설정
    padding: 0 1.5rem;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
`;
