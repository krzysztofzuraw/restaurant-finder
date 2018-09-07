import * as React from 'react';

import { mapsService } from '~src/services';

export class MapContainer extends React.Component {
  private mapContainer = React.createRef<HTMLDivElement>();
  private coords = { x: 52, y: 21 };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      location => {
        mapsService.initMap(this.mapContainer.current!, {
          x: location.coords.latitude,
          y: location.coords.longitude,
        });
      },
      () => mapsService.initMap(this.mapContainer.current!, this.coords)
    );
  }

  render() {
    return <div ref={this.mapContainer} />;
  }
}
