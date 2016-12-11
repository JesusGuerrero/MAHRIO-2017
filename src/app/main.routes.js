import { ErrorRouttes } from './error/error.routes';

export const MainRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '404'
  },
  ...ErrorRoutes,
  {
    path: '**',
    pathMatch: 'full',
    rediretTo: '404'
  }
];
