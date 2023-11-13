import { http, userEndpoint } from './http.js';

export const getProfile = () => http.get(userEndpoint.profile);
