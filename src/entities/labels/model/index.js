import {
  createEffect, createEvent, createStore, forward,
} from 'effector';
import { useStore } from 'effector-react';
import { env } from '../../../shared/config';

const labelsChanged = createEvent();
const labelsPageOpened = createEvent();
const $labels = createStore([]).on(labelsChanged, (_, newLabels) => newLabels);

const loadLabelsFx = createEffect({
  handler: async () => {
    try {
      const res = await fetch(`${env.BACKEND_URL}/albums`);
      const data = await res.json();
      const filteredLabels = data.map((labels) => (labels.userId));
      const uniqueLabels = [...new Set(filteredLabels)];
      labelsChanged(uniqueLabels);
    } catch (err) {
      console.error(err);
    }
  },
});

forward({ from: labelsPageOpened, to: loadLabelsFx });

const useLabels = () => useStore($labels);

export {
  useLabels, labelsChanged, loadLabelsFx, labelsPageOpened,
};
