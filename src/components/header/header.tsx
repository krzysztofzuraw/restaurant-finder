import * as React from 'react';

import styled from '~src/layout/theme';

const HeaderContainer = styled('div')`
  background-color: #2470d8;
  grid-area: 'header';
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header: React.SFC = () => (
  <HeaderContainer>
    <h1>Find a restaurant</h1>
  </HeaderContainer>
);
