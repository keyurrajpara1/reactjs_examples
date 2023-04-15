import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/css/styles.css';
import './assets/js/scripts.js';

// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import './assets/fontawesome-free-6.4.0-web/css/all.min.css';
import './assets/fontawesome-free-6.4.0-web/css/fontawesome.min.css';
// import * as FontAwesome from "react-icons/fa";

/*
how to use bootstrap js in react
https://stackoverflow.com/questions/43722322/how-to-insert-bootstrap-js-to-react-app
With Bootstrap version 5, you also need to install popper.js
npm i bootstrap@5.2.3 @popperjs/core
*/

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);