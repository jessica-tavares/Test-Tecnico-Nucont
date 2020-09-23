import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Home from './pages/Home';

const GAInitial = () => {
  ReactGA.initialize('UA-178751346-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  useEffect(() => GAInitial(), []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
