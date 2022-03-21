import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (component) => function RouterProvider() {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading router...">
        {component()}
      </Suspense>
    </BrowserRouter>
  );
};
