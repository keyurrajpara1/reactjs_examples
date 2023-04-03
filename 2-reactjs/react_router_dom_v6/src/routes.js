import { useRoutes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Header />,
      children: [
        { index: true, element: <Home /> },
        { path: 'contact', element: <Contact /> },
        { path: 'about', element: <About /> },
        { path: '*', element: <Error /> }
      ]
    }
  ]);
  return routes;
}
export default Router;