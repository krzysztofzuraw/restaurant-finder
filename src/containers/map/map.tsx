import * as React from 'react';

import { mapsService } from '~src/services';

interface State {
  coords: { x: number; y: number };
}

export class MapContainer extends React.Component<{}, State> {
  state = {
    coords: {
      x: 52,
      y: 21,
    },
  };
  private mapContainer = React.createRef<HTMLDivElement>();

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   location =>
    //     this.setState({ coords: { x: location.coords.latitude, y: location.coords.longitude } }),
    //   () => this.setState({ coords: { x: 52, y: 21 } })
    // );
    const map = mapsService.initMap(this.mapContainer.current!, this.state.coords);
    mapsService.placeCurrentLocationMarker(map, this.state.coords);
  }

  render() {
    return <div ref={this.mapContainer} />;
  }
}
