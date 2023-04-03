import HeaderComponent from "./components/HeaderComponent";
import { Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
}
export default Header;