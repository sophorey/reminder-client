import jwtDecode from 'jwt-decode';
import { env } from '../config';
import { $host } from '.';

export const signUp = async ({ email, password }) => {
  const response = await $host.post('/auth/signup', { email, password });
  const { token } = response.data;

  localStorage.setItem('accessToken', token);
  return jwtDecode(token);
};

export const signIn = async ({ email, password }) => {
  try {
    const { data } = await $host.post('/auth/signin', { email, password });
    console.log(data);
    localStorage.setItem('accessToken', data.token);
    return jwtDecode(data.token);
  } catch (error) {
    return error;
  }
};
