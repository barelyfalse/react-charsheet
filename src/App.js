import * as React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { HeadBar } from './components/HeadBar';
import Character from './pages/Character';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  
  return (
    <Router>
      <HeadBar />
      <Routes>
        <Route path="react-charsheet/" element={ <Home /> }/>
        <Route path="react-charsheet/character" element={ <Character /> }/>
        <Route path="react-charsheet/*" element={ <NotFoundPage /> }/>
      </Routes>
    </Router>
  );
}

export default App;
