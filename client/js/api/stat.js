import { http, statEndpoint } from './http.js';

export const getTopStats = () => http.get(statEndpoint.getTopStats());

export const getUserStats = (id) => http.get(statEndpoint.getUserStats(id));
