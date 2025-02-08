import { NextPage } from 'next';
import React from 'react';

const MessageTopNav: NextPage = () => {
  return (
    <div className='flex h-[76px] px-10 py-5 items-center shrink-0 bg-gray-25 w-full'>
      <div className='flex items-center gap-6'>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
          <path
            d='M16.6654 10H3.33203M3.33203 10L8.33203 15M3.33203 10L8.33203 5'
            stroke='#667085'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        <div className='flex items-center gap-3'>
          <p className='text-primary-purple-70 text-Text-xl font-semibold'>James Rogur</p>
          <p className='text-gray-500 text-Text-sm font-semibold'>Online</p>
        </div>
      </div>
    </div>
  );
};

export default MessageTopNav;
