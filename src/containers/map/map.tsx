import * as React from 'react';
import { connect } from 'react-redux';

import Types from 'Types';
import { geocodingService, mapsService } from '~src/services';

const mapStateToProps = (state: Types.RootState) => ({
  userLocation: state.app.userLocation,
});

type Props = ReturnType<typeof mapStateToProps>;

class Component extends React.Component<Props> {
  private mapContainer = React.createRef<HTMLDivElement>();

  componentDidUpdate(prevProps: Props) {
    const { userLocation } = this.props;

    if (userLocation && prevProps.userLocation !== userLocation) {
      const map = mapsService.initMap(this.mapContainer.current!, userLocation);
      mapsService.placeCurrentLocationMarker(map, userLocation);
    }
    geocodingService.searchForPlaces('rynek');
  }

  render() {
    return <div ref={this.mapContainer} />;
  }
}

export const MapContainer = connect(
  mapStateToProps,
  {}
)(Component);
