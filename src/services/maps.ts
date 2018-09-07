import leaflet from 'leaflet';

import { configService } from '~src/services';

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
};
