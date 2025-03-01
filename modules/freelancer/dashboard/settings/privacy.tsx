'use client';
import { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import toggleButton from '@/public/assets/svgs/icons/toggle-button.svg';

const Privacy: NextPage = () => {
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [messageVisibility, setMessageVisibility] = useState(false);
  const [clientVisibility, setClientVisibility] = useState(true);
  return (
    <div>
      <div className='flex justify-between items-center gap-5 max-w-[690px]'>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-600 font-semibold'>Profile visibility</p>
          <p className='max-w-[290px] text-gray-400 text-Text-xs'>
            Control when you hide and your show your profile to potential clients
          </p>
        </div>

        <div
          className={`flex w-11 h-6 p-0.5 items-center shrink-0 rounded-xl transition-all duration-300 ${
            profileVisibility ? 'bg-primary-purple-50 justify-end' : 'bg-primary-milk-50'
          }`}
        >
          <Image
            src={toggleButton}
            alt='toggle'
            onClick={() => setProfileVisibility(!profileVisibility)}
            className='cursor-pointer h-full'
          />
        </div>
      </div>

      <div className='bg-gray-500 w-full mt-2 mb-6 h-[0.5px]' />

      <div className='flex justify-between items-center gap-5 max-w-[690px]'>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-600 font-semibold'>Profile visibility</p>
          <p className='max-w-[290px] text-gray-400 text-Text-xs'>
            Control when you hide and your show your profile to potential clients
          </p>
        </div>

        <div
          className={`flex w-11 h-6 p-0.5 items-center shrink-0 rounded-xl transition-all duration-300 ${
            messageVisibility ? 'bg-primary-purple-50 justify-end' : 'bg-primary-milk-50'
          }`}
        >
          <Image
            src={toggleButton}
            alt='toggle'
            onClick={() => setMessageVisibility(!messageVisibility)}
            className='cursor-pointer h-full'
          />
        </div>
      </div>

      <div className='bg-gray-500 w-full mt-2 mb-6 h-[0.5px]' />

      <div className='flex justify-between items-center gap-5 max-w-[690px]'>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-600 font-semibold'>Profile visibility</p>
          <p className='max-w-[290px] text-gray-400 text-Text-xs'>
            Control when you hide and your show your profile to potential clients
          </p>
        </div>

        <div
          className={`flex w-11 h-6 p-0.5 items-center shrink-0 rounded-xl transition-all duration-300 ${
            clientVisibility ? 'bg-primary-purple-50 justify-end' : 'bg-primary-milk-50'
          }`}
        >
          <Image
            src={toggleButton}
            alt='toggle'
            onClick={() => setClientVisibility(!clientVisibility)}
            className='cursor-pointer h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Privacy;
