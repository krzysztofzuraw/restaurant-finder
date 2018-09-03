import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ErrorBoundary } from '~src/boundaries';
import { AppTheme, MainLayout } from '~src/layout';

ReactDOM.render(
  <ErrorBoundary>
    <AppTheme>
      <MainLayout />
    </AppTheme>
  </ErrorBoundary>,
  document.getElementById('root') as HTMLElement
);
