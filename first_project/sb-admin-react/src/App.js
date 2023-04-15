import React from 'react';

import TopNavbar from "./components/TopNavbar";
import LeftNavbar from "./components/LeftNavbar";
import Footer from "./components/Footer";

import { BrowserRouter } from 'react-router-dom';
import Router from './routes/routes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <div id="layoutSidenav">
          <LeftNavbar />
          <div id="layoutSidenav_content">
            <main>
                <Router />
            </main>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;