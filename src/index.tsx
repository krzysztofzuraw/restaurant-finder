import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ErrorBoundary } from '~src/boundaries';
import { MainLayout } from '~src/layout';
import { AppTheme } from '~src/theme';

ReactDOM.render(
  <ErrorBoundary>
    <AppTheme>
      <MainLayout />
    </AppTheme>
  </ErrorBoundary>,
  document.getElementById('root') as HTMLElement
);
