import React from 'react';

export type ParamsCard = {
  url: string;
  content: string;
  title: string;
};

export const Card: React.FC<ParamsCard> = ({ content, title, url }) => {
  return (
    <div className='flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white max-w-md m-4'>
      <div className='w-full aspect-video overflow-hidden'>
        <img
          className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
          src={url}
          alt={`Imagem ilustrativa de ${title}`}
        />
      </div>

      <div className='p-4 flex flex-col gap-3 flex-1'>
        <h2 className='text-2xl font-semibold text-gray-800 text-center'>{title}</h2>
        <p className='text-gray-600 text-justify text-base'>{content}</p>
      </div>

      <div className='p-4 pt-0'>
        <a
          className='block w-full text-center bg-cyan-700 hover:bg-cyan-800 text-white font-medium py-2 rounded-lg transition-colors duration-200'
          href='#'
        >
          Saiba mais
        </a>
      </div>
    </div>
  );
};
