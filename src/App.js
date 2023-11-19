import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // Import the Toaster component

import Header from './component/Header';
import Home from './component/Home.jsx';
import Login from './component/Login.jsx';
import Footer from './component/Footer.jsx';
import Legal from './component/Legal.jsx';
import Scroll from './component/ScrollTop.jsx';

import './styles/Header.scss';
import './styles/App.scss';
import './styles/Home.scss';
import './styles/Login.scss';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Toaster /> 
        <Scroll/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms" element={<Legal/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
