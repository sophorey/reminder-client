import jwtDecode from 'jwt-decode';
import { $host } from '.';

export const signUp = async ({ email, password }) => {
  try {
    const response = await $host.post('/auth/signup', { email, password });

    localStorage.setItem('accessToken', response.data.token);
    return jwtDecode(response.data.token);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const signIn = async ({ email, password }) => {
  try {
    const response = await $host.post('/auth/signin', { email, password });

    const { data } = response;

    localStorage.setItem('accessToken', data.token);
    return jwtDecode(data.token);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
