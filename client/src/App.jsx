import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './components/Body.jsx';
import Browse from './components/Browse.jsx';
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import PlacesFormPage from './pages/PlacesFormPage.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import FAQ from './components/FAQ/Faq.jsx'; 
 
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8080'; 
axios.defaults.withCredentials = true; 

const App = () => {
  return (
    <>
   
      {/* Wrapping the Routes inside a Router */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* You can optionally use Header outside of the Route */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/header' element={<Header />} />
            <Route path='/login' element={<Login />} />
            <Route path='/browse' element={<Browse />} />
            <Route path='/body' element={<Body />} />
            <Route path='/placeformpage' element={<PlacesFormPage />}  />
          
        </Routes>
      </Router>
      </>
    
  );
};

export default App;
