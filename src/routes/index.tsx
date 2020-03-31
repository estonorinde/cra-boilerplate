import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes, { RouteItem } from './routes';

const MakeRoute = ({ routes, ...props }: RouteItem): JSX.Element =>
  routes ? (
    <Route path={props.path}>
      <MakeRoutes routes={routes}>
        <MakeRoute {...props} />
      </MakeRoutes>
    </Route>
  ) : (
    <Route {...props} />
  );

export interface MakeRoutesProps {
  routes: RouteItem[];
  children?: React.ReactNode;
}

const MakeRoutes = ({ routes, children }: MakeRoutesProps): JSX.Element => (
  <Switch>
    {routes.map((route, i) => (
      <MakeRoute key={i} {...route} />
    ))}
    {children}
  </Switch>
);

export default (): JSX.Element => (
  <Suspense fallback={<div>Loading...</div>}>
    <MakeRoutes routes={routes} />
  </Suspense>
);
