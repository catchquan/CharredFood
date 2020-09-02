import React from 'react';
import './App.css';
import Charred from './Charred';
import { BrowserRouter } from 'react-router-dom';
import './MountAnimations.css';

function App() {
    return (
    <div className="App">
      <BrowserRouter>
        <Charred />
      </BrowserRouter>
    </div>
  );
}

export default App;
