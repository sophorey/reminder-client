import {
  attach, createEffect, createEvent, guard, merge, restore,
} from 'effector';
import queryString from 'query-string';

export const sendRequestFx = createEffect();

export function queryToString(query) {
  return query ? `?${queryString.stringify(query)}` : '';
}
