import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Blog } from './components/blog/Blog';
import { HowToBuy } from './components/HowToBuy';
import { Header } from './components/Header';
import { Banner } from './components/banner/Banner';
import { FirstTime } from './components/first-time/FirstTime';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Blog className="mt-24" />
      <HowToBuy />
      <FirstTime className="mt-24" />
      <Footer className="mt-24" />
    </div>
  );
}

export default App;
