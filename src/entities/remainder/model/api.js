import { $authHost } from '../../../shared/api';

export const updateReminder = async (attrs) => {
  const { id, completed } = attrs;
  const response = await $authHost.put(`/reminders/${id}`, { completed });
  return response;
};

export const createReminder = async (attrs) => {
  const { text, labelId, reminderTime } = attrs;
  const response = await $authHost.post('/reminders', {
    text, userId: 3, labelId, reminderTime,
  });
  return response;
};

export const fetchReminders = async () => {
  const response = await $authHost.get('/reminders');
  return response.data.rows;
};

export const deleteReminder = async ({ id }) => {
  await $authHost.delete(`/reminders/${id}`);
};
