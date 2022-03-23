import queryString from 'query-string';
import axios from 'axios';
import { env } from '../config';

const $authHost = axios.create({ baseUrl: env.BACKEND_URL });
const $host = axios.create({ baseUrl: env.BACKEND_URL });

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export function queryToString(query) {
  return query ? `?${queryString.stringify(query)}` : '';
}

export { $host, $authHost };
