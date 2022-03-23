import { $authHost } from '.';

export const toggleCompleted = async ({ id, completed }) => {
  $authHost.post(`/reminders/${id}`, { completed });
};

export const fetchReminders = async () => {
  const response = await $authHost.get('/reminders');
  return response.data.rows;
};
