import React, { Suspense } from 'react';

export const withStrictReact = (component) => function StrictReactProvider() {
  return (
    <React.StrictMode>
      <Suspense fallback="Loading strict react...">
        {component()}
      </Suspense>
    </React.StrictMode>
  );
};
