import * as React from 'react';

import { AppTheme } from '~src/theme';

export const setupComponent = (children: JSX.Element) => <AppTheme>{children}</AppTheme>;
