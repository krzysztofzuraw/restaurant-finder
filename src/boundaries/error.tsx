import * as React from 'react';

import { loggingService } from '~src/services';

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<{}, State> {
  state = { hasError: false };

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ hasError: true });
    error.stack = info.componentStack;
    loggingService.logError(error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please contact support</h1>;
    }
    return this.props.children;
  }
}
