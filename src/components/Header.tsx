import React from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [open, isOpen] = React.useState<boolean>(false);
  return (
    <header className='bg-cyan-950 py-2 text-white flex flex-col px-1.5 sm:flex-row sm:justify-between sm:items-center'>
      <div className='flex items-center justify-between py-3'>
        <Link className='text-3xl font-bold' to='/'>
          Academica + +{' '}
        </Link>
        <span className='text-3xl sm:hidden' onClick={() => isOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </span>
      </div>
      <nav
        className={`${
          open ? 'flex' : 'hidden'
        } flex-col py-3 space-y-4 font-medium sm:flex sm:flex-row sm:space-x-10 sm:space-y-0 sm:mr-2`}
      >
        <Link className='sm:opacity-90 sm:hover:opacity-100 sm:transition-all sm:duration-75' to='/'>
          Home
        </Link>
        <Link className='sm:opacity-90 sm:hover:opacity-100 sm:transition-all sm:duration-75' to='/projects'>
          Projects
        </Link>
        <Link className='sm:opacity-90 sm:hover:opacity-100 sm:transition-all sm:duration-75' to='/contact'>
          Contact
        </Link>
      </nav>
    </header>
  );
};
