// import { css, keyframes } from 'emotion';
import mapboxgl from 'mapbox-gl';

import { configService } from '~src/services';

const config = configService.getConfig();

interface IPoint {
  x: number;
  y: number;
}

mapboxgl.accessToken = config.MAPBOX_API_KEY;

export const initMap = (el: HTMLElement, mapCenter: IPoint, defaultZoom: number = 13) => {
  return new mapboxgl.Map({
    container: el,
    style: config.MAPBOX_MAP_STYLE,
    center: [mapCenter.y, mapCenter.x],
    zoom: defaultZoom,
  });
};

// const pulse = keyframes`
//   0% {
//       box-shadow: 0 0 0 0 rgba(36, 112, 216, 0.4);
//   }
//   70% {
//       box-shadow: 0 0 0 30px rgba(36, 112, 216, 0);
//   }
//   100% {
//       box-shadow: 0 0 0 0 rgba(36, 112, 216, 0);
//   }
// `;

// const currentLocation = css`
//   width: 22px;
//   height: 22px;
//   border-radius: 50%;
//   background: rgb(36, 112, 216);
//   cursor: pointer;
//   box-shadow: 0 0 0 rgba(36, 112, 216, 0.4);
//   animation: ${pulse} 2s infinite;

//   &:hover {
//     animation: none;
//   }
// `;

export const placeCurrentLocationMarker = (map: any, point: IPoint) => {
  const marker = new mapboxgl.Marker();
  marker.setLngLat([point.y, point.x]);
  marker.addTo(map);
};
