import { injectGlobal } from 'emotion';
import * as React from 'react';

import { Content } from '~src/components';
import { HeaderContainer } from '~src/containers';
import { styled } from '~src/theme';

/* tslint:disable:no-unused-expression */
injectGlobal`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    width: 100%;
    padding: 0px;
    margin: 0px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  ul {
    padding: 0;
    margin: 0;
  }
  h2, h6 {
    margin: 0;
  }

`;

const GridLayout = styled('div')`
  display: grid;
  grid-template-areas: 'header' 'content';
  grid-template-rows: 33% auto;
  height: 100vh;
`;

export const MainLayout: React.SFC = () => (
  <GridLayout>
    <HeaderContainer />
    <Content />
  </GridLayout>
);
