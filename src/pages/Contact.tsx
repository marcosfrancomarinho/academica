import React from 'react';

export const Contact: React.FC = () => {
  return (
    <main className='grow px-6 py-10 sm:flex sm:justify-center'>
      <form className='p-1 space-y-4 sm:w-xl'>
        <h2 className='text-2xl font-medium text-gray-700'>Como podemos lhe ajudar?</h2>
        <div className='flex flex-col'>
          <label className='text-gray-600' htmlFor='name'>
            Seu nome:
          </label>
          <input
            required
            className='px-1.5 py-2 border border-gray-400 rounded-2xl outline-0 focus:shadow'
            type='text'
            name='name'
            id='name'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-gray-600' htmlFor='email'>
            Seu email:
          </label>
          <input
            required
            className='px-1.5 py-2 border border-gray-400 rounded-2xl outline-0 focus:shadow'
            type='email'
            name='email'
            id='email'
          />
        </div>
        <div className='flex flex-col'>
          <textarea
            required
            className='px-1.5 py-2 border border-gray-400 rounded-2xl outline-0 mt-1 focus:shadow '
            placeholder='Mande suas dúvidas'
            name='message'
            id='message'
            cols={50}
            rows={5}
          ></textarea>
        </div>
        <button
          type='submit'
          className='inline-block px-6 py-3 text-white transition-colors duration-200 rounded-full cursor-pointer bg-cyan-700 hover:bg-cyan-800'
        >
          Enviar
        </button>
      </form>
    </main>
  );
};
