import React, { useContext } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Home from './pages/Home';

function App() {
  useContext(() => ReactGA.initialize('UA-178751346-1'), []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
