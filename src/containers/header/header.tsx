import * as React from 'react';
import { connect } from 'react-redux';

import { Header } from '~src/components/header';
import { geocodingActions } from '~src/features/geocoding';

const dispatchProps = { geocodeRequest: geocodingActions.geocodingRequest };

type Props = typeof dispatchProps;

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
  null,
  dispatchProps
)(Component);
