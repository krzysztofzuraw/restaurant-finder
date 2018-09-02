import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppTheme, MainLayout } from '~src/layout';

ReactDOM.render(
  <AppTheme>
    <MainLayout />
  </AppTheme>,
  document.getElementById('root') as HTMLElement
);
