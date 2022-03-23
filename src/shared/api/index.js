import queryString from 'query-string';
import axios from 'axios';
import { env } from '../config';

const $authHost = axios.create({
  baseURL:
    env.BACKEND_URL + env.API_URL,
});
const $host = axios.create({
  baseURL:
    env.BACKEND_URL + env.API_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export function queryToString(query) {
  return query ? `?${queryString.stringify(query)}` : '';
}

export { $host, $authHost };
