import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies/Movies'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p style={{ textShadow: "5px 5px 5px black", fontSize: "50px" }}>ULTIMOS ESTRENOS</p>
      </header>

        <Movies />

    </div>
  );
}

export default App;
