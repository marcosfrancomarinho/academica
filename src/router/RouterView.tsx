import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { Projects } from '../pages/Projects';

export const RouterView: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
};
