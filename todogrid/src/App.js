import React from 'react';
import './App.css';
import Home from './components/Home';
import Todolist from './components/Todolist';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>{' '}
          <Link to="/todolist">Todolist</Link>{' '}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todolist" element={<Todolist />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;