'use client';
import { useState } from 'react';
import { NextPage } from 'next';
import { Input } from '@/components/UI/Input';
import Image from 'next/image';
import toggleButton from '@/public/assets/svgs/icons/toggle-button.svg';

const Security: NextPage = () => {
  const [hideBalance, setHideBalance] = useState(true);
  const [requestPassword, setRequestPassword] = useState(false);

  return (
    <div>
      <p className='font-semibold text-Text-xl text-gray-900'>Change Password</p>
      <div className='flex flex-col gap-4 pt-2 pb-9'>
        <div className='flex w-full max-w-[690px] justify-between items-center gap-8'>
          <label className='text-gray-600 shrink-0 flex'>Old Password</label>
          <div className='max-w-[381px] w-full'>
            <Input placeholder='Enter Old Password' size='md' />
          </div>
        </div>

        <div className='flex w-full max-w-[690px] justify-between items-center gap-8'>
          <label className='text-gray-600 shrink-0 flex'>New Password</label>
          <div className='max-w-[381px] w-full'>
            <Input placeholder='Enter New Password' size='md' />
          </div>
        </div>

        <div className='flex w-full max-w-[690px] justify-between items-center gap-8'>
          <label className='text-gray-600 shrink-0 flex'>Confirm New Password</label>
          <div className='max-w-[381px] w-full'>
            <Input placeholder='Confirm New Password' size='md' />
          </div>
        </div>
      </div>

      <div className='bg-gray-500 w-full mt-2 mb-6 h-[0.5px]' />

      <div className='flex justify-between items-center gap-5 max-w-[690px]'>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-600 font-semibold'>Hide my balance</p>
          <p className='max-w-[290px] text-gray-400 text-Text-xs'>Hides your account balance for security reasons</p>
        </div>

        <div
          className={`flex w-11 h-6 p-0.5 items-center shrink-0 rounded-xl transition-all duration-300 ${
            hideBalance ? 'bg-primary-purple-50 justify-end' : 'bg-primary-milk-50'
          }`}
        >
          <Image
            src={toggleButton}
            alt='toggle'
            onClick={() => setHideBalance(!hideBalance)}
            className='cursor-pointer h-full'
          />
        </div>
      </div>

      <div className='bg-gray-500 w-full mt-2 mb-6 h-[0.5px]' />

      <div className='flex justify-between items-center gap-5 max-w-[690px]'>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-600 font-semibold'>Request my password on withdrawals</p>
          <p className='max-w-[290px] text-gray-400 text-Text-xs'>
            Control when you hide and your show your profile to potential clients
          </p>
        </div>

        <div
          className={`flex w-11 h-6 p-0.5 items-center shrink-0 rounded-xl transition-all duration-300 ${
            requestPassword ? 'bg-primary-purple-50 justify-end' : 'bg-primary-milk-50'
          }`}
        >
          <Image
            src={toggleButton}
            alt='toggle'
            onClick={() => setRequestPassword(!requestPassword)}
            className='cursor-pointer h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Security;
