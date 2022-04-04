const { $authHost } = require('../../../shared/api');

export const getUser = async () => {
  const user = await $authHost.get('auth/user');
  return user;
};
