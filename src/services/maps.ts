import mapboxgl, { Popup } from 'mapbox-gl';

import { getCurrentLocationMarker, getLocationMarker } from '~src/components';
import { IPoint } from '~src/models';
import { configService } from '~src/services';

const config = configService.getConfig();

mapboxgl.accessToken = config.MAPBOX_API_KEY;

export const initMap = (el: HTMLElement, mapCenter: IPoint, defaultZoom: number = 13) => {
  return new mapboxgl.Map({
    container: el,
    style: config.MAPBOX_MAP_STYLE,
    center: [mapCenter.y, mapCenter.x],
    zoom: defaultZoom,
  });
};

export const removeMap = (map: mapboxgl.Map) => map.remove();

export const placeCurrentLocationMarker = (map: mapboxgl.Map, point: IPoint) => {
  const marker = new mapboxgl.Marker(getCurrentLocationMarker());
  marker.setLngLat([point.y, point.x]);
  marker.addTo(map);
};

export const placeLocationMarker = (map: mapboxgl.Map, point: IPoint) => {
  const marker = new mapboxgl.Marker(getLocationMarker());
  marker.setLngLat([point.y, point.x]);
  return marker.addTo(map);
};

export const setPopup = (marker: mapboxgl.Marker, popupText: string) => {
  const popup = new Popup().setHTML(popupText);
  marker.setPopup(popup);
  marker.on('click', () => {
    marker.togglePopup();
  });
};
