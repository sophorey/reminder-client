import compose from 'compose-function';
import { withRouter } from './with-router';
import { withStrictReact } from './with-strict-react';

export const withProviders = compose(withStrictReact, withRouter);
