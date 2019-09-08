import React from 'react';
import { ThemeConsumer } from 'styled-components';

const ToggleMode = () => {
  const toggleTheme = theme => {
    theme.setTheme(
      theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' },
    );
  };

  return (
    <ThemeConsumer>
      {theme => <button onClick={() => toggleTheme(theme)}>Toggle</button>}
    </ThemeConsumer>
  );
};

export default ToggleMode;
