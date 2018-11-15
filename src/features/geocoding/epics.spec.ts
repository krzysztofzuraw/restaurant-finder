import { GeocodingResultModel } from '~src/models';
import { marbleTest } from '~src/utils';
import { geocodingActions, geocodingEpics } from '.';

describe('Geocoding Epics', () => {
  describe('geocodeUserInput', () => {
    it('should handle happy path again', () => {
      const model = new GeocodingResultModel('', []);
      const actions = 'a';
      const expected = '5s b';
      const values = {
        a: geocodingActions.geocodingRequest('key'),
        b: geocodingActions.geocodingSuccess(model),
      };
      const mockedServices = {
        geocodingService: {
          searchForPlaces: jest.fn(() => [model]),
        },
      };

      marbleTest(actions, expected, values, mockedServices, geocodingEpics);
    });
  });
});
