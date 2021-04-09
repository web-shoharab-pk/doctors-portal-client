import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Home from './components/Home/Home';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/">
        
          </Route>
          <Route path="/">
        
          </Route>
        </Switch>
      </Router>

    </div>
  );
};

export default App;