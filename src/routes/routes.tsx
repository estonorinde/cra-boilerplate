import React, { lazy } from 'react';

const Login = lazy(() => import('src/views/login'));
const Dashboard = lazy(() => import('src/views/dashboard'));

export type RouteItem = {
  path: string;
  component?: React.LazyExoticComponent<React.FC> | React.FC;
  secure?: boolean;
  exact?: boolean;
  routes?: RouteItem[];
};

const routes: RouteItem[] = [
  {
    path: '/',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/auth',
    routes: [
      {
        path: '/auth/login',
        component: Login,
      },
      {
        path: '/auth/logout',
        component: Login,
      },
    ],
  },
];

export default routes;
