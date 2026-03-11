import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* FIXED: #root was getting max-width:1280px + padding:2rem from App.css
     on desktop which is fine, but on mobile we reset it to prevent 
     the extra right-side space */
  #root {
    max-width: 100%;
    padding: 0;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    overflow-x: hidden;
    line-height: 1.6;
  }

  ::selection {
    background: rgba(255, 45, 107, 0.3);
    color: #fff;
  }

  ::-webkit-scrollbar { width: 0.375rem; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.colors.bgPrimary}; }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.1875rem;
  }
  ::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }

  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }

  /* Keyboard nav focus rings */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gradientPinkBlue};
    outline-offset: 3px;
    border-radius: 4px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gradientPinkBlue};
    outline-offset: 3px;
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.gradientPinkBlueGlow};
  }
`;

export default GlobalStyles;