import * as React from 'react';

import { styled } from '~src/theme';
import searchIcon from './search.svg';

const HeaderContainer = styled('div')`
  background-color: ${props => props.theme.color.blue};
  grid-area: 'header';
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: ${props => props.theme.fontSize.large};
    color: ${props => props.theme.color.white};
    font-weight: ${props => props.theme.fontWeight.regular};
  }
`;

const AutocompleteInput = styled('input')`
  width: 351px;
  height: 44px;
  border-radius: 4px;
  border: none;
  font-size: ${props => props.theme.fontSize.regular};
  line-height: ${props => props.theme.lineHeight};
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 7px;
  padding-left: 30px;
  padding-right: 10px;
`;

export const Header: React.SFC = () => (
  <HeaderContainer>
    <h1>Find a restaurant</h1>
    <form role="search">
      <AutocompleteInput type="search" placeholder="Type a name of restaurant..." />
    </form>
  </HeaderContainer>
);

Header.displayName = 'HeaderComponent';
