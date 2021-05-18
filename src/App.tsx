import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import Header from './components/header/Header'
import Home from './pages/Home'
import Faq from './pages/Faq'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/faq" exact component={() => <Faq />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App
