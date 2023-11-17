import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import All from './All';
import Fsd from './Fsd';
import Data_science from './Data_science';
import Cyber_security from './Cyber_security';
import Career from './Career';
import Footer from './Footer';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar/>
        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/Full Stack Development' element={<Fsd />} />
          <Route path='/data_science' element={<Data_science />} />
          <Route path='/cyber_security' element={<Cyber_security />} />
          <Route path='/career' element={<Career />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
