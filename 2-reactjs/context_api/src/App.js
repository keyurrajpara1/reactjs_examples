import React, { createContext } from "react";
import CompA from "./CompA";

const contextForFirstname = createContext();
const contextForLastname = createContext();

const App = () => {
  return (
    <>
      <contextForFirstname.Provider value={"Keyur"}>
        <contextForLastname.Provider value={{lastName:"Rajpara"}}>
          <CompA />
        </contextForLastname.Provider>
      </contextForFirstname.Provider>
    </>
  );
};
export default App;
export { contextForFirstname, contextForLastname };
