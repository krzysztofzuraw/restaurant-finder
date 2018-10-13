import * as React from 'react';
import { connect } from 'react-redux';

import Types from 'Types';
import { Header } from '~src/components/header';
import { geocodingActions, geocodingSelectors } from '~src/features/geocoding';

const mapStateToProps = (state: Types.RootState) => ({
  isFetching: geocodingSelectors.isFetching(state),
  geocodingResult: geocodingSelectors.getGeocodingResult(state),
  error: geocodingSelectors.error(state),
});

const dispatchProps = { geocodeRequest: geocodingActions.geocodingRequest };

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

class Component extends React.Component<Props> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== '') {
      this.props.geocodeRequest(event.target.value);
    }
  };

  render() {
    return <Header onChange={this.handleChange} />;
  }
}

export const HeaderContainer = connect(
  mapStateToProps,
  dispatchProps
)(Component);
