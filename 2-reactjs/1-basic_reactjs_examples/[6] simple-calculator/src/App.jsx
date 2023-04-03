import React from 'react';
import { addition, substraction, multiplication, division } from "./Calculator";
function App(){
  return (
    <>
      <ul>
        <li>Addition: {addition(40, 4)} </li>
        <li>Substraction: {substraction(40, 4)} </li>
        <li>Multiplication: {multiplication(40, 4)} </li>
        <li>Division: {division(40, 4)} </li>
      </ul>
    </>
  );
}
export default App;