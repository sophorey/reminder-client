import { $authHost } from '.';

export const updateReminder = async (attrs) => {
  const { id, completed } = attrs;
  const response = await $authHost.put(`/reminders/${id}`, { completed });
  return response;
};

export const fetchReminders = async () => {
  const response = await $authHost.get('/reminders');
  return response.data.rows;
};

export const deleteReminder = async ({ id }) => {
  await $authHost.delete(`/reminders/${id}`);
};
