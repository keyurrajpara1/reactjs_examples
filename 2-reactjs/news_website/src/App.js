import React from "react";
import Search from "./components/search";
import Pagination from "./components/pagination";
import Stories from "./components/stories";
import "./App.css";

/*import { useContext } from "react";
import { AppContext } from './context/context';*/
import { useGlobalContext } from "./context/context";

const App = () => {
  // const data = useContext(AppContext);
  // const data = useGlobalContext();
  return (
    <>
      <h1>Welcome</h1>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}
export default App;