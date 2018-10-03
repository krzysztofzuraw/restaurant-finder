import * as React from 'react';
import { connect } from 'react-redux';

import { appActions } from '~src/features/app';
import { MainLayout } from '~src/layout';

const dispatchProps = {
  initApp: appActions.initApp,
};

type Props = typeof dispatchProps;

class Component extends React.Component<Props> {
  componentDidMount() {
    this.props.initApp();
  }
  render() {
    return <MainLayout />;
  }
}

export const MainLayoutContainer = connect(
  null,
  dispatchProps
)(Component);
