import { http, authEndpoint } from './http.js';

export const regsiterUser = (payload) => http.post(authEndpoint.register(), payload);
export const login = (payload) => http.post(authEndpoint.login(), payload)
