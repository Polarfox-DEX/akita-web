import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Blog } from './components/blog/Blog';
import { HowToBuy } from './components/HowToBuy';
import { Header } from './components/Header';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <HowToBuy />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
