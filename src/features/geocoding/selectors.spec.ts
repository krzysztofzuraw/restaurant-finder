import {
  GeocodingContextModel,
  GeocodingFeatureModel,
  GeocodingPropertiesModel,
} from '~src/models';

import { geocodingSelectors } from '.';

describe('Geocoding selectors', () => {
  describe('getGeocodingFeaturesFormatted', () => {
    it('should return formatted features', () => {
      const properties = new GeocodingPropertiesModel('Wroclaw');
      const firstContext = new GeocodingContextModel('41', 'text_1');
      const secondContext = new GeocodingContextModel('42', 'text_2');
      const thirdContext = new GeocodingContextModel('43', 'text_3');

      const feature = new GeocodingFeatureModel('42', 'Point', [1, 1], '', properties, [
        firstContext,
        secondContext,
        thirdContext,
      ]);
      expect(geocodingSelectors.getGeocodingFeaturesFormatted.resultFunc([feature])).toEqual([
        {
          placeName: '',
          addressFirstPart: 'Wroclaw',
          addressSecondPart: 'text_2 text_3',
        },
      ]);
    });
  });
});
