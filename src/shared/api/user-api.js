import jwtDecode from 'jwt-decode';
import { env } from '../config';
import { $host } from '.';

export const signUp = async ({ email, password }) => {
  try {
    const { data } = await $host.post('/auth/signup', { email, password });

    localStorage.setItem('accessToken', data.token);
    return jwtDecode(data.token);
  } catch (error) {
    return error;
  }
};

export const signIn = async ({ email, password }) => {
  try {
    const { data } = await $host.post('/auth/signin', { email, password });
    localStorage.setItem('accessToken', data.token);
    return jwtDecode(data.token);
  } catch (error) {
    return error;
  }
};
