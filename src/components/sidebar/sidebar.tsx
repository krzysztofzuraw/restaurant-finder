import * as React from 'react';

import styled from '~src/layout/theme';
import RestaurantIcon from './restaurant.svg';

const ListItem = styled('li')`
  display: flex;
  flex-direction: column;
  background-image: url(${RestaurantIcon});
  background-repeat: no-repeat;
  background-color: ${props => props.theme.color.white};
  background-position: 30px;
  height: 100px;
  padding-left: 90px;
  padding-top: 12px;
  padding-right: 12px;
  border-bottom: 0.75px solid ${props => props.theme.color.lightGray};

  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.0032em;
    font-weight: ${props => props.theme.fontWeight.semiBold};
    line-height: ${props => props.theme.lineHeight};
  }
`;

const ListItemHeader = styled('h2')`
  color: ${props => props.theme.color.black};
  margin-right: auto;
  font-size: ${props => props.theme.fontSize.medium};
`;

const ListItemDistance = styled('h6')`
  justify-self: flex-end;
  color: ${props => props.theme.color.darkGray};
  font-size: ${props => props.theme.fontSize.small};
`;

export const Sidebar: React.SFC = () => (
  <ul>
    <ListItem>
      <div>
        <ListItemHeader>Vaffanapoli</ListItemHeader>
        <ListItemDistance>100 meters</ListItemDistance>
      </div>
      <div
        style={{
          marginTop: '5px',
          color: '#333333',
          fontWeight: 400,
          fontSize: '0.75em',
          letterSpacing: '0.0032em',
        }}
      >
        <div style={{ marginBottom: '2.5px' }}>Włodkowica 5/5</div>
        <div>50-250 Wrocław</div>
      </div>
    </ListItem>
  </ul>
);

Sidebar.displayName = 'SidebarComponent';
