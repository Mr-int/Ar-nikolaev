import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Monuments from './components/Monuments';
import Redirect from './components/Redirect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monuments" element={<Monuments />} />
        <Route path=":name" element={<Redirect />} />
      </Routes>
    </Router>
  );
}

export default App;
