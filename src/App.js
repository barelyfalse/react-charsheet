import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeadBar } from './components/HeadBar';
import Character from './pages/Character';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  
  return (
    <Router>
      <HeadBar />
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/react-charsheet" element={ <Home /> }/>
        <Route path="/react-charsheet/character" element={ <Character /> }/>
        <Route path="/react-charsheet/*" element={ <NotFoundPage /> }/>
      </Routes>
    </Router>
  );
}

export default App;
