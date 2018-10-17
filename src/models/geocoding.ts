export interface IPoint {
  x: number;
  y: number;
}

export interface IGeocodingResultDTO {
  features: IGeocodingFeatureDTO[];
  attribution: string;
}

export interface IGeocodingResultModel {
  constructor: {
    create(result: IGeocodingResultDTO): IGeocodingResultModel;
  };
  attribution: string;
  features: IGeocodingFeatureModel[];

  serialize(): IGeocodingResultDTO;
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

interface IGeocodingFeatureDTO {
  id: string;
  type: string;
  text: string;
  center: [number, number];
  properties: IGeocodingPropertiesDTO;
  context: IGeocodingContextDTO[];
}

export interface IGeocodingFeatureModel {
  constructor: {
    create(feature: IGeocodingFeatureDTO): IGeocodingFeatureModel;
  };

  id: string;
  type: string;
  text: string;
  center: [number, number];
  properties: IGeocodingPropertiesModel;
  context: IGeocodingContextModel[];

  serialize(): IGeocodingFeatureDTO;
}

class GeocodingFeatureModel implements IGeocodingFeatureModel {
  // prettier-ignore
  "constructor": typeof GeocodingFeatureModel;
  constructor(
    public id: string,
    public type: string,
    public center: [number, number],
    public text: string,
    public properties: IGeocodingPropertiesModel,
    public context: IGeocodingContextModel[]
  ) {}

  static create(dto: IGeocodingFeatureDTO): IGeocodingFeatureModel {
    return new GeocodingFeatureModel(
      dto.id,
      dto.type,
      dto.center,
      dto.text,
      GeocodingPropertiesModel.create(dto.properties),
      dto.context.map(item => GeocodingContextModel.create(item))
    );
  }

  serialize(): IGeocodingFeatureDTO {
    return {
      id: this.id,
      type: this.type,
      center: this.center,
      text: this.text,
      properties: this.properties.serialize(),
      context: this.context.map(item => item.serialize()),
    };
  }
}

interface IGeocodingPropertiesDTO {
  address?: string;
  category?: string;
}

interface IGeocodingPropertiesModel {
  constructor: {
    create(dto: IGeocodingPropertiesDTO): IGeocodingPropertiesModel;
  };
  address?: string;
  category?: string;

  serialize(): IGeocodingPropertiesDTO;
}

export class GeocodingPropertiesModel implements IGeocodingPropertiesModel {
  'constructor': typeof GeocodingPropertiesModel;
  constructor(public address?: string, public category?: string) {}

  static create(dto: IGeocodingPropertiesDTO) {
    return new GeocodingPropertiesModel(dto.address, dto.category);
  }

  serialize(): IGeocodingPropertiesDTO {
    return {
      address: this.address,
      category: this.category,
    };
  }
}

interface IGeocodingContextDTO {
  id: string;
  text: string;
}

interface IGeocodingContextModel {
  constructor: {
    create(dto: IGeocodingContextDTO): IGeocodingContextModel;
  };
  id: string;
  text: string;

  serialize(): IGeocodingContextDTO;
}

export class GeocodingContextModel implements IGeocodingContextModel {
  'constructor': typeof GeocodingContextModel;
  constructor(public id: string, public text: string) {}

  static create(dto: IGeocodingContextDTO): IGeocodingContextModel {
    return new GeocodingContextModel(dto.id, dto.text);
  }

  serialize(): IGeocodingContextDTO {
    return {
      id: this.id,
      text: this.text,
    };
  }
}
