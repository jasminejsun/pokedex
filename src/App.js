import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/details' element={<Detail/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
