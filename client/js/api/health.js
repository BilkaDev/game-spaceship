import { http, statEndpoint } from './http.js';

export const getHealth = () => http.get(statEndpoint.getHealth());
