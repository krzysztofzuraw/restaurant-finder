import * as React from 'react';
import { cleanup, render } from 'react-testing-library';

import { setupComponent } from '~src/utils';
import { Sidebar } from '.';

afterEach(cleanup);

describe('Sidebar Component', () => {
  it('should render correctly without places', () => {
    const component = render(setupComponent(<Sidebar places={[]} />));
    expect(component).toMatchSnapshot();
  });

  // it('should render correctly with places', () => {
  //   const mockedPlaces = [
  //     {
  //       name: 'Vaffanapoli',
  //       distance: '100 meters',
  //       addressPartOne: 'Włodkowica 5/5',
  //       addressPartTwo: '50-250 Wrocław',
  //     },
  //     {
  //       name: 'Gniazdo',
  //       distance: '1km',
  //       addressPartOne: 'Opera 5/5',
  //       addressPartTwo: '50-250 Wrocław',
  //     },
  //   ];
  //   const component = render(setupComponent(<Sidebar placeResults={mockedPlaces} />));
  //   expect(component).toMatchSnapshot();
  // });
});
