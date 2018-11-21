import * as React from 'react';
import { connect } from 'react-redux';

import Types from 'Types';
import { mapsService } from '~src/services';
import { geocodingSelectors } from '~src/features/geocoding';

const mapStateToProps = (state: Types.RootState) => ({
  userLocation: state.app.userLocation,
  featuresCoords: geocodingSelectors.getGeocodingFeaturesCoordsWithInfo(state),
});

type Props = ReturnType<typeof mapStateToProps>;

class Component extends React.Component<Props> {
  private mapContainer = React.createRef<HTMLDivElement>();
  private map: any = null;

  componentDidUpdate(prevProps: Props) {
    const { userLocation, featuresCoords } = this.props;

    if (userLocation && prevProps.userLocation !== userLocation) {
      this.map = mapsService.initMap(this.mapContainer.current!, userLocation);
      mapsService.placeCurrentLocationMarker(this.map, userLocation);
    }

    if (featuresCoords) {
      featuresCoords.map(feature => {
        const marker = mapsService.placeLocationMarker(this.map, {
          x: feature.coords[1],
          y: feature.coords[0],
        });
        mapsService.setPopup(marker, feature.info);
      });
    }
  }

  componentWillUnmount() {
    mapsService.removeMap(this.map);
  }

  render() {
    return <div ref={this.mapContainer} />;
  }
}

export const MapContainer = connect(
  mapStateToProps,
  {}
)(Component);
