import { GeocodingResultModel, IGeocodingResultDTO, IGeocodingResultModel } from '~src/models';
import { agentInstance } from '~src/utils';
import { configService } from '.';

const config = configService.getConfig();

export const searchForPlaces = async (query: string): Promise<IGeocodingResultModel> =>
  agentInstance
    .get<IGeocodingResultDTO>(`/mapbox.places/${query}.json`, {
      params: { access_token: config.MAPBOX_API_KEY, autocomplete: true },
    })
    .then(res => res.data)
    .then(data => GeocodingResultModel.create(data));
