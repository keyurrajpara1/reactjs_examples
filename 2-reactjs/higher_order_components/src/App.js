import React from 'react';
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

const App = () => {
  return (
    <>
      <div className="App">
        <ClickCounter name1="Keyur1" />
        <HoverCounter name1="Keyur1" />
      </div>
    </>
  )
}

export default App;