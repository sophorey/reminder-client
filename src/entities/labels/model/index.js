import {
  createEffect, createEvent, createStore, forward,
} from 'effector';
import { useStore } from 'effector-react';
import { $authHost } from '../../../shared/api';
import { fetchLabels } from '../../../shared/api/label-api';
import { env } from '../../../shared/config';

const labelsChanged = createEvent();
const labelsPageOpened = createEvent();
const $labels = createStore([]).on(labelsChanged, (_, newLabels) => newLabels);

const loadLabelsFx = createEffect({
  handler: async () => {
    try {
      const labels = await fetchLabels();
      labelsChanged(labels);
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
