import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';

export const setRemainders = createEvent();
const $remainders = createStore([]).on(setRemainders, (_, newRemainders) => newRemainders);

export const useRemainders = () => useStore($remainders);
