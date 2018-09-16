import mapboxgl from 'mapbox-gl';

import { getCurrentLocationMarker } from '~src/components';
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

export const placeCurrentLocationMarker = (map: any, point: IPoint) => {
  const marker = new mapboxgl.Marker(getCurrentLocationMarker());
  marker.setLngLat([point.y, point.x]);
  marker.addTo(map);
};
