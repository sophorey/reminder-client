import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';

export const setLabels = createEvent();
const $labels = createStore([]).on(setLabels, (_, newLabels) => newLabels);

export const useLabels = () => useStore($labels);
