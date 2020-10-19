import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import './App.css';
import Home from './pages/Home';
import Thanks from './pages';

const GAInitial = () => {
  ReactGA.initialize('UA-178751346-1');
  ReactGA.pageview('/');
}

function App() {
  useEffect(() => GAInitial(), []);
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/thanks' component={Thanks} />
      </Switch>
    </div>
  );
}

export default App;
