import { createEffect, restore } from 'effector';
import { useStore } from 'effector-react';
import { getUser } from './api';

const getUserFx = createEffect(getUser);

const $user = restore(getUserFx.doneData, { token: null, email: '', id: '' });

const $token = $user.map((user) => user.token);

const $isAuthorized = $token.map(Boolean);

export const selectors = {
  useIsAuthorized: () => useStore($isAuthorized),
};
