import { ThemeProvider } from 'emotion-theming';
import * as React from 'react';
import styled, { CreateStyled } from 'react-emotion';

interface Theme {
  color: { blue: string; white: string };
  fontSize: { large: string; regular: string };
  fontWeight: { regular: number };
  lineHeight: string;
}

const theme: Theme = {
  color: {
    blue: '#2470d8',
    white: '#FFFFFF',
  },
  fontSize: {
    large: '2.5em',
    regular: '1em',
  },
  fontWeight: {
    regular: 400,
  },
  lineHeight: '25px',
};

export const AppTheme: React.SFC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
AppTheme.displayName = 'AppTheme';

export default styled as CreateStyled<Theme>;
