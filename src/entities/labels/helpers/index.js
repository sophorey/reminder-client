import { env } from '../../../shared/config';
import { setLabels } from '../model';

export const populateLabels = async () => {
  try {
    const res = await fetch(`${env.BACKEND_URL}/albums`);
    const data = await res.json();
    const filteredLabels = data.map((labels) => (labels.userId));
    const uniqueLabels = [...new Set(filteredLabels)];
    console.log(uniqueLabels, 'fl');
    setLabels(uniqueLabels);
  } catch (err) {
    console.error(err);
  }
};
