import React, { useContext } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Home from './pages/Home';

export const initGA = () => {       
  ReactGA.initialize('UA-178751346-1');
}

function App() {
  useContext(() => { initGA() }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
