import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // Import the Toaster component

import Header from './component/Header';
import Home from './component/Home.jsx';
import Login from './component/Login.jsx';
import Footer from './component/Footer.jsx';
import Legal from './component/Legal.jsx';
import Scroll from './component/ScrollTop.jsx';
import ContactUs from './component/ContactUs.jsx';
import Ambulance from './component/Ambulance.jsx';
import Error from './component/Utilities/Error.jsx'


import './styles/main.scss';
import './styles/Header.scss';
import './styles/App.scss';
import './styles/Home.scss';
import './styles/Login.scss';
import './styles/ServiceCards.scss';
import './styles/Contact.scss';

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
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/ambulance" element={<Ambulance/>}/>
          <Route path='/Error' element={<Error/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
