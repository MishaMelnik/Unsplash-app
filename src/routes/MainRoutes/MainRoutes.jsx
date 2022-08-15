import React, { lazy } from 'react';
// COMPONENTS
import MainLayout from '../../layout/MainLayout/MainLayout';
// dashboard routing
const User = lazy(() => import('../../layout/UserLayout/UserLayout'));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/user',
      element: <User />,
    },
  ],
};

export default MainRoutes;
