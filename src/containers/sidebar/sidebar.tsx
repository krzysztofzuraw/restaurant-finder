import * as React from 'react';
import { connect } from 'react-redux';

import Types from 'Types';
import { Sidebar } from '~src/components/sidebar';
import { geocodingSelectors } from '~src/features/geocoding';

const mapStateToProps = (state: Types.RootState) => ({
  places: geocodingSelectors.getGeocodingFeatures(state),
  isFetching: geocodingSelectors.getIsFetching(state),
  error: geocodingSelectors.getError(state),
});

type Props = ReturnType<typeof mapStateToProps>;

class Component extends React.Component<Props> {
  render() {
    if (this.props.isFetching) {
      return <div>Loading...</div>;
    } else if (this.props.places.length > 0) {
      return <Sidebar places={this.props.places} />;
    }
    return <div>Type Something!</div>;
  }
}

export const SidebarContainer = connect(
  mapStateToProps,
  {}
)(Component);
