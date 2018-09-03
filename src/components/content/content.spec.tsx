import * as React from 'react';
import { cleanup, render } from 'react-testing-library';

import { setupComponent } from '~src/utils';
import { Content } from '.';

afterEach(cleanup);

describe('BookOrderModal Component', () => {
  it('should render correctly', () => {
    const component = render(setupComponent(<Content />));
    expect(component).toMatchSnapshot();
  });
});
