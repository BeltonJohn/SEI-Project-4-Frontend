import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/style.scss';
import Register from './auth/Register.js';
import Login from './auth/Login.js';
import MealNew from './Mealentry.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Stats from './Displaystats';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/create' element={<MealNew />} />
      <Route path='/stats' element={<Stats />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
