'use client';
import { NextPage } from 'next';
import React from 'react';
import { useParams } from 'next/navigation';

const Details: NextPage = () => {
  const { name } = useParams();

  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-gray-900 font-whyte text-3xl font-medium'>{name?.split('-').join(' ')}</h1>

      <p className='text-gray-700 font-romela text-xl font-normal'>
        You’re contracting for <span className='text-gray-900 font-semibold'>John Doe</span>
      </p>
    </div>
  );
};

export default Details;
