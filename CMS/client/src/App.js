
import React from 'react';
import {Box } from '@material-ui/core';

import Header from './components/Header'; // Nevigate Home from components Folder
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Header />
      <Box style={{marginTop: 64}}>
        <Home />
      </Box>
    </>
  );
}

export default App;
