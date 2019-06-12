import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import WhatIDo from './Components/WhatIDo';
import TechSkills from './Components/TechSkills';
import CurrentWork from './Components/CurrentWork';
import WhoIAm from './Components/WhoIAm';

function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <Navbar />
        <Sidebar />
        <WhatIDo />
        <TechSkills />
        <CurrentWork />
        <WhoIAm />
      </div>
    </div>
  );
}

export default App;
