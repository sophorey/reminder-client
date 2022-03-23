import jwtDecode from 'jwt-decode';
import { env } from '../config';
import { $host } from '.';

export const signUp = async (email, password) => {
  const { token } = await $host.post(`${env.API_URL}/auth/signup`, { email, password });

  localStorage.setItem('accessToken', token);
  return jwtDecode(token);
};

export const signIn = async (email, password) => {
  const { token } = await $host.post(`${env.API_URL}/auth/signin`, { email, password });

  localStorage.setItem('accessToken', token);
  return jwtDecode(token);
};
