export interface IPoint {
  x: number;
  y: number;
}

export interface IGeocodingResultDTO {
  features: IGeocodingFeatureDTO[];
  attribution: string;
}

interface IGeocodingFeatureDTO {
  id: string;
  type: string;
  text: string;
  place_name: string;
  center: [number, number];
}

export interface IGeocodingResultModel {
  constructor: {
    create(result: IGeocodingResultDTO): IGeocodingResultModel;
  };
  attribution: string;
  features: IGeocodingFeatureModel[];

  serialize(): IGeocodingResultDTO;
}

interface IGeocodingFeatureModel {
  constructor: {
    create(feature: IGeocodingFeatureDTO): IGeocodingFeatureModel;
  };

  id: string;
  type: string;
  text: string;
  placeName: string;
  center: [number, number];

  serialize(): IGeocodingFeatureDTO;
}

export class GeocodingResultModel implements IGeocodingResultModel {
  'constructor': typeof GeocodingResultModel;
  constructor(public attribution: string, public features: IGeocodingFeatureModel[]) {}

  static create(dto: IGeocodingResultDTO): IGeocodingResultModel {
    return new GeocodingResultModel(
      dto.attribution,
      dto.features.map(feature => GeocodingFeatureModel.create(feature))
    );
  }

  serialize(): IGeocodingResultDTO {
    return {
      attribution: this.attribution,
      features: this.features.map(feature => feature.serialize()),
    };
  }
}

class GeocodingFeatureModel implements IGeocodingFeatureModel {
  // prettier-ignore
  "constructor": typeof GeocodingFeatureModel;
  constructor(
    public id: string,
    public type: string,
    public placeName: string,
    public center: [number, number],
    public text: string
  ) {}

  static create(dto: IGeocodingFeatureDTO): IGeocodingFeatureModel {
    return new GeocodingFeatureModel(dto.id, dto.type, dto.place_name, dto.center, dto.text);
  }

  serialize(): IGeocodingFeatureDTO {
    return {
      id: this.id,
      type: this.type,
      place_name: this.placeName,
      center: this.center,
      text: this.text,
    };
  }
}
