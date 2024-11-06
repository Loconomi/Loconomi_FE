// src/style/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

        /* 기본 스타일 설정 */
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        color: ${({ theme }) => theme.colors.black};
        background-color: ${({ theme }) => theme.colors.dark_gray};
        overflow-x: hidden; /* 가로 스크롤 방지 */
    }

    #root {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* 기본 스타일 초기화 */
    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
        padding: 0;
    }
    #root, body, html {
        scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */
        margin: 0 auto;
        padding:0;
        /* font-size: 62.5%; */
        -ms-overflow-style: none; /* 인터넷 익스플로러  스크롤바 숨김 */
        scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */

        /* 버튼 클릭 시 색 제거 */
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    /* 반응형 단위 설정 */
    :root {
        font-size: 16px; /* 데스크톱 기준 기본 폰트 크기 */
        --vw: 100vw; /* 모바일 뷰포트 너비 대응 */
        --vh: 100vh; /* 모바일 뷰포트 높이 대응 */
    }

    /* 스크롤바 숨기기 (크롬, 사파리) */
    ::-webkit-scrollbar {
        display: none;
    }

    /* 모바일 터치 효과 제거 */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export default GlobalStyle;
