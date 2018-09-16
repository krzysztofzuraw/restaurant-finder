import { getCurrentLocationMarker } from '.';

describe('CurrentLocationMarker', () => {
  it('should render correctly', () => {
    const marker = getCurrentLocationMarker();
    expect(marker).toMatchSnapshot();
  });
});
