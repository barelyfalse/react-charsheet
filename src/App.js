import * as React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HeadBar } from './components/HeadBar';
import Character from './pages/Character';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <HeadBar />
        <Routes>
          <Route path="/" element={ <Home /> }>
          </Route>
          <Route path="character" element={ <Character /> }/>
          <Route path="*" element={ <NotFoundPage /> }/>
        </Routes>
      </ThemeProvider>
    </>
    
  );
}

export default App;
