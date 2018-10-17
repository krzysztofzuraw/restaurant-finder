import * as React from 'react';

import { IGeocodingFeatureModel } from '~src/models';
import { styled } from '~src/theme';
import restaurantIcon from './restaurant.svg';

const PlaceResult = styled('li')`
  display: flex;
  flex-direction: column;
  background-image: url(${restaurantIcon});
  background-repeat: no-repeat;
  background-color: ${props => props.theme.color.white};
  background-position: 30px;
  height: 100px;
  padding-left: 90px;
  padding-top: 12px;
  padding-right: 12px;
  border-bottom: 0.75px solid ${props => props.theme.color.lightGray};
  transition: box-shadow 0.3s;

  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.0032em;
    font-weight: ${props => props.theme.fontWeight.semiBold};
    line-height: ${props => props.theme.lineHeight};
  }

  :hover {
    transform: translateY(-1px);
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

const PlaceResultHeader = styled('h2')`
  color: ${props => props.theme.color.black};
  margin-right: auto;
  font-size: ${props => props.theme.fontSize.medium};
`;

const PlaceResultDistance = styled('h6')`
  justify-self: flex-end;
  color: ${props => props.theme.color.darkGray};
  font-size: ${props => props.theme.fontSize.small};
`;

const PlaceResultAdditionalInfo = styled('div')`
  margin-top: 5px;
  color: ${props => props.theme.color.black};
  font-weight: ${props => props.theme.fontWeight.regular};
  font-size: ${props => props.theme.fontSize.small};
  letter-spacing: 0.0032em;
`;

const PlaceResultFirstAddress = styled('div')`
  margin-bottom: 2.5px;
`;

interface Props {
  places: IGeocodingFeatureModel[];
}

export const Sidebar: React.SFC<Props> = ({ places }) => (
  <ul>
    {places.map((place, idx) => (
      <PlaceResult key={`${place}-${idx}`}>
        <div>
          <PlaceResultHeader>{place.text}</PlaceResultHeader>
          <PlaceResultDistance>100m</PlaceResultDistance>
        </div>
        <PlaceResultAdditionalInfo>
          <PlaceResultFirstAddress>{place.properties.address}</PlaceResultFirstAddress>
          <div>
            {place.context[1].text} {place.context[2].text}
          </div>
        </PlaceResultAdditionalInfo>
      </PlaceResult>
    ))}
  </ul>
);

Sidebar.displayName = 'SidebarComponent';
