import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('./main'));
const NotFoundPage = lazy(() => import('./not-found'));
const SettingsPage = lazy(() => import('./settings'));
const SignInPage = lazy(() => import('./sign-in'));
const SignUpPage = lazy(() => import('./sign-up'));
const SignOutPage = lazy(() => import('./sign-out'));

const Routing = () => (
  <Routes>
    <Route path="/">
      <Route index element={<MainPage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="signout" element={<SignOutPage />} />
    </Route>
    <Route path="/*" element={<NotFoundPage />} />
  </Routes>
);
export default Routing;
