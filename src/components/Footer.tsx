import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col items-center w-full px-2 py-4 text-white bg-cyan-950'>
      <div className='flex flex-col w-full space-y-5 font-semibold sm:flex-row sm:justify-evenly'>
        <nav className='flex flex-col items-center space-y-2' aria-label='Institutional links'>
          <a href='/privacy'>Privacy Policy</a>
          <a href='/terms'>Terms of Use</a>
          <a href='/about'>About Us</a>
        </nav>
        <nav className='flex flex-col items-center space-y-2' aria-label='Social media links'>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
            <span className='flex items-center gap-3'>
              <FaInstagram />
              Instagram
            </span>
          </a>
          <a href='https://www.linkedin.com/in/seu-perfil' target='_blank' rel='noopener noreferrer'>
            <span className='flex items-center gap-3'>
              <FaLinkedin />
              LinkedIn
            </span>
          </a>
          <a href='https://github.com/seu-usuario' target='_blank' rel='noopener noreferrer'>
            <span className='flex items-center gap-3'>
              <FaGithub />
              GitHub
            </span>
          </a>
        </nav>
      </div>
      <p className='px-10 py-2 mt-5 text-sm italic text-center text-gray-500 border-t border-gray-700'>
        {new Date().getFullYear()} &copy; {' '}
        <span>Todos os direitos reservados. </span>Academica <span className='font-black'>++</span>
      </p>
    </footer>
  );
};
