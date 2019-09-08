import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';

import useTheme from './useTheme';
import ToggleMode from './ToggleMode';

const getBackground = theme('mode', {
  light: '#eee',
  dark: '#111',
});

const getForeground = theme('mode', {
  light: '#111',
  dark: '#eee',
});

const GlobalStyle = createGlobalStyle`
  body{
    background: ${getBackground};
    color: ${getForeground};
    text-align:center;
  }
`;

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className='App'>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <ToggleMode />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
