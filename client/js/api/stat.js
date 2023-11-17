import { http, statEndpoint } from './http.js';

export const getTopStats = () => http.get(statEndpoint.getTopStats());

export const getUserStats = () => http.get(statEndpoint.getUserStats());

export const saveStat = (paylaod) => http.post(statEndpoint.saveStat(), paylaod);
