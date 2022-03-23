import {
  createEffect, createEvent, createStore, forward, sample,
} from 'effector';
import { useStore } from 'effector-react';
import { env } from '../../../shared/config';

const remaindersChanged = createEvent();
const remaindersPageOpened = createEvent();

const $remainders = createStore([])
  .on(remaindersChanged, (_, newRemainders) => newRemainders);

const loadRemaindersFx = createEffect({
  handler: async () => {
    try {
      const res = await fetch(`${env.BACKEND_URL}/todos`);
      const data = await res.json();
      remaindersChanged(data.map((remainder) => ({ ...remainder, labels: ['уборка', 'английский язык'] })));
    } catch (err) {
      console.error(err);
    }
  },
});

forward({ from: remaindersPageOpened, to: loadRemaindersFx });

const useRemainders = () => useStore($remainders);

export {
  useRemainders, remaindersPageOpened, remaindersChanged,
};
