import * as React from 'react';
import styled from 'react-emotion';

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
`;

export const Header: React.SFC = () => (
  <HeaderContainer>
    <h1>Find a restaurant</h1>
    <form>
      <AutocompleteInput />
    </form>
  </HeaderContainer>
);
