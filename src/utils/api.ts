import axios from 'axios';

import { configService } from '~src/services';

const config = configService.getConfig();

export const agentInstance = axios.create({ baseURL: config.GEOCODING_URL });
