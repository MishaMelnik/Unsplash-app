import { useRoutes } from 'react-router-dom';
// ROUTERS
import MainRoutes from '../MainRoutes/MainRoutes';

const Routes = () => {
  return useRoutes([MainRoutes]);
};
export default Routes;
