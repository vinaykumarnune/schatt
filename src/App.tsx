import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/system';
import { AppBar } from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar/>
      <Box minHeight={100} textAlign="center">
        This is Chat BOX
      </Box>
    </div>
  );
}

export default App;
