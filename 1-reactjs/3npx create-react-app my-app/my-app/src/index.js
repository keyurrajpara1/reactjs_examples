import React from 'react';
// import ReactDOM from 'react-dom/client'; // React 18
import ReactDOM from 'react-dom'; // React 17

// import reactElement from './App';

import App from './App';
import AppFunctionalComponent from './AppFunctionalComponent';

/*
let reactElementJSX = <h1>Hello World</h1>;
// let reactElement = React.createElement("h1", null, "Hello World");

ReactDOM.render(reactElementJSX, document.getElementById("root"));
// ReactDOM.render(reactElement, document.getElementById("root"));
*/

// ReactDOM.render(reactElement, document.getElementById("root"));

ReactDOM.render(<App name="World" />, document.getElementById("root"));
// ReactDOM.render(<AppFunctionalComponent name="World" />, document.getElementById("root"));