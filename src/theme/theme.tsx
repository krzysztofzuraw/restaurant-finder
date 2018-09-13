import { ThemeProvider } from 'emotion-theming';
import * as React from 'react';
import styled, { CreateStyled } from 'react-emotion';

interface Theme {
  color: { blue: string; white: string; lightGray: string; black: string; darkGray: string };
  fontSize: { large: string; regular: string; medium: string; small: string };
  fontWeight: { regular: number; semiBold: number };
  lineHeight: string;
}

const theme: Theme = {
  color: {
    blue: '#2470d8',
    white: '#FFFFFF',
    lightGray: '#D6D6D6',
    black: '#333333',
    darkGray: '#666666',
  },
  fontSize: {
    small: '0.75em',
    regular: '1em',
    medium: '1.3em',
    large: '2.5em',
  },
  fontWeight: {
    regular: 400,
    semiBold: 600,
  },
  lineHeight: '25px',
};

export const AppTheme: React.SFC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
AppTheme.displayName = 'AppTheme';

export default styled as CreateStyled<Theme>;
