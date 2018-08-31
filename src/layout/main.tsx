import { injectGlobal } from 'emotion';
import * as React from 'react';

import styled from './theme';

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
`;

const GridLayout = styled('div')`
  display: grid;
  grid-template-areas: 'header' 'content';
  grid-template-rows: 33% auto;
  height: 100vh;
`;

export const MainLayout: React.SFC = () => (
  <GridLayout>
    <div>Header</div>
    <div>Content</div>
  </GridLayout>
);
