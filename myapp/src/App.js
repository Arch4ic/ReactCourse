import React, {useEffect, useState} from 'react';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1 style={{padding:'20px'}}>Repositories</h1>
      <SearchBar />

    </div>
  );
}

export default App;
