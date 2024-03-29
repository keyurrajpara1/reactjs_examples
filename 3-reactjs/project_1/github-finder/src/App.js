import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  /**
   * Above the router, we're going to wrap this in GithubState
   * Ok, so this is the GithubState provider.
   * so make sure you wrap the whole thing like that.
   */

  /**
   * In app.js where we have our search component, we were passing in that search users
   * we no longer have to do that we can access it through context.
   */
    
    return (
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
              <Navbar title="Gihub Finder" icon="fab fa-github" />
              <div className='container'>
                <Alert />
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/about' element={<About />} />
                  <Route exact path='/user/:login' element={<User />} />
                  <Route path='*' element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    );
  
}

export default App;
