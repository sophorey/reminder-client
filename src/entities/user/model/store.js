import { createEffect, restore } from 'effector';
import { getUser } from './api';

export const getUserFx = createEffect(getUser);
export const $user = restore(getUserFx.doneData, { token: null, email: '', id: '' });
