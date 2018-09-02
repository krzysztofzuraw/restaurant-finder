import { ThemeProvider } from 'emotion-theming';
import * as React from 'react';

const theme = {
  color: {
    blue: '#2470d8',
    white: '#FFFFFF',
  },
  fontSize: {
    large: '2.5em',
  },
  fontWeight: {
    regular: 400,
  },
};

export const AppTheme: React.SFC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
AppTheme.displayName = 'AppTheme';
