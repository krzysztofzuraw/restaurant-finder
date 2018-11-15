import * as React from 'react';
import { connect } from 'react-redux';

import { Header } from '~src/components/header';
import { geocodingActions } from '~src/features/geocoding';

const dispatchProps = { geocodeRequest: geocodingActions.geocodingRequest };

type Props = typeof dispatchProps;
interface State {
  searchValue: string;
}

class Component extends React.Component<Props, State> {
  state = {
    searchValue: '',
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.geocodeRequest(this.state.searchValue);
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ searchValue: event.target.value });

  render() {
    return <Header onSubmit={this.handleSubmit} onChange={this.handleChange} />;
  }
}

export const HeaderContainer = connect(
  null,
  dispatchProps
)(Component);
