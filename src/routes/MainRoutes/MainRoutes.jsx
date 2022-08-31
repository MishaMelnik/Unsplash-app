import React, { lazy } from 'react';
// COMPONENTS
import MainLayout from '../../layout/MainLayout/MainLayout';
// ROUTING
const User = lazy(() => import('../../layout/UserLayout/UserLayout'));
const Modal = lazy(() => import('../../layout/MainLayout/Posts/ModalCase/ModalCase'));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/modal/:id',
      element: <Modal />,
    },
    {
      path: '/user',
      element: <User />,
    },
  ],
};

export default MainRoutes;
