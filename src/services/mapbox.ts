import mapboxgl from 'mapbox-gl';

import { configService } from '.';

const config = configService.getConfig();

let map: mapboxgl.Map;

export const initMap = (el: string) => {
  mapboxgl.accessToken = config.MAPBOX_API_KEY;
  map = new mapboxgl.Map({
    container: el,
    style: config.MAPBOX_MAP_STYLE_URL,
  });
};

export const removeMap = () => map.remove();
