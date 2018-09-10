import { css, keyframes } from 'emotion';
import leaflet from 'leaflet';

import { configService } from '.';

const config = configService.getConfig();

interface IPoint {
  x: number;
  y: number;
}

export const initMap = (el: HTMLElement, mapCenter: IPoint, defaultZoom: number = 13) => {
  const map = leaflet.map(el);
  map.setView([mapCenter.x, mapCenter.y], defaultZoom);

  leaflet
    .tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      accessToken: config.MAPBOX_API_KEY,
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: config.MAPBOX_MAP_ID,
      maxZoom: 18,
    })
    .addTo(map);

  return map;
};

const pulse = keyframes`
  0% {
      box-shadow: 0 0 0 0 rgba(36, 112, 216, 0.4);
  }
  70% {
      box-shadow: 0 0 0 30px rgba(36, 112, 216, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(36, 112, 216, 0);
  }
`;

const currentLocation = css`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgb(36, 112, 216);
  cursor: pointer;
  box-shadow: 0 0 0 rgba(36, 112, 216, 0.4);
  animation: ${pulse} 2s infinite;

  &:hover {
    animation: none;
  }
`;

export const placeCurrentLocationMarker = (map: leaflet.Map, point: IPoint) => {
  const icon = leaflet.divIcon({
    className: `${currentLocation}`,
  });
  leaflet.marker([point.x, point.y], { icon }).addTo(map);
};
