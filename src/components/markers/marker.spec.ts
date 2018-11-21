import { getLocationMarker, getCurrentLocationMarker } from '.';

describe('CurrentLocationMarker', () => {
  it('should render correctly', () => {
    const marker = getCurrentLocationMarker();
    expect(marker).toMatchSnapshot();
  });
});

describe('LocationMarker', () => {
  it('should render correctly', () => {
    const marker = getLocationMarker();
    expect(marker).toMatchSnapshot();
  });
});
