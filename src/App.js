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
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/character" element={ <Character /> }/>
        <Route path="*" element={ <NotFoundPage /> }/>
      </Routes>
    </Router>
  );
}

export default App;
