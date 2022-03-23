import { env } from '../../config';
import { queryToString, sendRequestFx } from './base';

sendRequestFx.use(requestClient);

export async function requestClient({ path, method, ...options }) {
  const headers = new Headers(options.headers);
  contentDefault(headers, 'application/json; charset=utf-8');

  const query = queryToString(options.query);
  const body = contentIs(headers, 'application/json') && options.body
    ? JSON.stringify(options.body)
    : undefined;

  const response = await fetch(`${env.BACKEND_URL}${path}${query}`, {
    method,
    headers,
    body,
    credentials: 'same-origin',
  });

  const answer = contentIs(response.headers, 'application/json')
    ? await response.json()
    : await response.text();

  const responder = {
    ok: response.ok,
    body: answer,
    status: response.status,
    headers: toObject(response.headers),
  };

  if (response.ok) {
    return responder;
  }
  throw responder;
}

function contentDefault(headers, type) {
  if (!headers.has('content-type')) {
    headers.set('content-type', type);
  }
  return headers;
}

function contentIs(headers, type) {
  return headers.get('content-type')?.includes(type) ?? false;
}

function toObject(headers) {
  const target = {};
  headers.forEach((value, key) => {
    target[key] = value;
  });
  return target;
}
