import React from 'react';
import { RouterView } from './router/RouterView';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <Header />
        <RouterView />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
