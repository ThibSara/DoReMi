import React, { createContext } from 'react';
import globalStyles from './globalStyles';
import theme from './theme';

const ThemeContext = createContext({
  globalStyles,
  theme,
});

export default ThemeContext;
