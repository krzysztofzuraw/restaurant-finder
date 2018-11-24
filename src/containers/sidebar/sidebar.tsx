import * as React from 'react';
import { connect } from 'react-redux';

import Types from 'Types';
import { Loader, Sidebar } from '~src/components';
import { geocodingSelectors } from '~src/features/geocoding';

const mapStateToProps = (state: Types.RootState) => ({
  placesFormatted: geocodingSelectors.getGeocodingFeaturesFormatted(state),
  isFetching: geocodingSelectors.getIsFetching(state),
});

type Props = ReturnType<typeof mapStateToProps>;

class Component extends React.Component<Props> {
  render() {
    const { placesFormatted, isFetching } = this.props;
    if (isFetching) {
      return <Loader />;
    } else if (placesFormatted.length > 0) {
      return <Sidebar places={placesFormatted} />;
    }
    return <div />;
  }
}

export const SidebarContainer = connect(
  mapStateToProps,
  {}
)(Component);
