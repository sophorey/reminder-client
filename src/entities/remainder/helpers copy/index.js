import { env } from '../../../shared/config';
import { setRemainders } from '../model';

export const populateRemainders = async () => {
  try {
    const res = await fetch(`${env.BACKEND_URL}/todos`);
    const data = await res.json();
    setRemainders(data.map((remainder) => ({ ...remainder, labels: ['уборка', 'английский язык'] })));
  } catch (err) {
    console.error(err);
  }
};
