import React from 'react';
import ReactDOM from 'react-dom';
import fullName, { favoriteProgramming, myName } from './App';
// import * as App from './App';
ReactDOM.render(
  <>
    <ol>
      <li> {fullName} </li>
      <li> {favoriteProgramming} </li>
      <li> {myName()} </li>

      {/*
          <li> {App.default} </li>
          <li> {App.favoriteProgramming} </li>
          <li> {App.myName()} </li>
      */}
    </ol>
  </>,
  document.getElementById("root")
);