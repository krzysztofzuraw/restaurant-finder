import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ErrorBoundary } from '~src/boundaries';
import { MainLayoutContainer } from '~src/containers';
import { store } from '~src/store';
import { AppTheme } from '~src/theme';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <AppTheme>
        <MainLayoutContainer />
      </AppTheme>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
