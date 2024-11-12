import styled from 'styled-components';

export default function PageContainer({ children }) {
  return (
    <Container>
      <MainSection>{children}</MainSection>
    </Container>
  );
}

const Container = styled.main`
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.maxWidth}; /* 테마의 최대 너비를 사용 */
    margin: 0 auto; /* 중앙 정렬 */

    @media (min-width: 490px) {
        padding: 0 2rem; /* 화면이 충분히 넓을 때 좌우 여백 추가 */
    }
`;

const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 320px; /* 최소 너비 설정: 모바일에서도 잘 보이도록 320px */
    max-width: 100%; /* 부모 컨테이너 최대 너비에 맞춤 */
    min-height: 100vh; /* 화면 전체 높이 */
    padding: 0 1.5rem; /* 좌우 여백 */
    background-color: ${({ theme }) => theme.colors.white};
`;