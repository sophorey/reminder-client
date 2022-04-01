import { $authHost } from '.';

export const fetchLabels = async () => {
  const response = await $authHost.get('labels');
  return response.data.rows;
};
