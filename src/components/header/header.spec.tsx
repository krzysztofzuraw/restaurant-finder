import * as React from 'react';
import { cleanup, render } from 'react-testing-library';

import { setupComponent } from '~src/utils';
import { Header } from '.';

afterEach(cleanup);

describe('Header Component', () => {
  it('should render correctly', () => {
    const component = render(setupComponent(<Header onSubmit={jest.fn()} onChange={jest.fn()} />));
    expect(component).toMatchSnapshot();
  });
});
