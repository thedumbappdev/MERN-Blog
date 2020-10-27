import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './containers/Home';

function App() {
  return (
    <div className="App">
      <div className="container is-fluid">
        <Header />
        <Hero />
        <Home />
      </div>
    </div>
  );
}

export default App;
