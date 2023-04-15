import { useRoutes } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import Admins from "../components/admin/Admins";
import Customers from "../components/customer/Customers";

const Router = () => {
  const routes = useRoutes([
    {
      path: '/', element: <Dashboard />
    },
    {
      path: '/admins', element: <Admins />
    },
    {
      path: '/users/customers', element: <Customers />
    }
  ]);
  return routes;
}
export default Router;