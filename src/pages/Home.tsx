import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='grow px-6 py-10 bg-gradient-to-b from-cyan-50 to-white'>
        <section className='max-w-4xl mx-auto text-center'>
          <h1 className='flex items-center justify-center gap-2 text-5xl font-extrabold text-cyan-900'>
            Academica
            <span className='flex gap-1 text-3xl text-cyan-600'>
              <FaPlus />
              <FaPlus />
            </span>
          </h1>
          <p className='mt-4 text-xl text-gray-700'>Seu futuro é aqui conosco.</p>
          <Link
            to='/projects'
            className='inline-block px-6 py-3 mt-8 text-white transition-colors duration-200 rounded-full bg-cyan-700 hover:bg-cyan-800'
          >
            Ver Projetos
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};
