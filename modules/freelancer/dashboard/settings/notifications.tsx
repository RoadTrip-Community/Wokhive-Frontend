'use client';
import { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import toggleButton from '@/public/assets/svgs/icons/toggle-button.svg';

const Notifications: NextPage = () => {
  const [enableNotification, setEnableNotification] = useState(true);
  const [newMessageNotification, setNewMessageNotification] = useState(true);
  const [projectNotification, setProjectNotification] = useState(true);

  return (
    <div>
      <div className='flex justify-between items-center gap-5 max-w-[690px]'>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-600 font-semibold'>Enable notifications</p>
          <p className='max-w-[290px] text-gray-400 text-Text-xs'>Control when you receive notifications</p>
        </div>

        <div
          className={`flex w-11 h-6 p-0.5 items-center shrink-0 rounded-xl transition-all duration-300 ${
            enableNotification ? 'bg-primary-purple-50 justify-end' : 'bg-primary-milk-50'
          }`}
        >
          <Image
            src={toggleButton}
            alt='toggle'
            onClick={() => setEnableNotification(!enableNotification)}
            className='cursor-pointer h-full'
          />
        </div>
      </div>

      <div className='bg-gray-500 w-full mt-2 mb-6 h-[0.5px]' />

      <div className='flex justify-between items-center gap-5 max-w-[690px]'>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-600 font-semibold'>New message notification</p>
          <p className='max-w-[290px] text-gray-400 text-Text-xs'>
            Control when you receive notifications for new messages
          </p>
        </div>

        <div
          className={`flex w-11 h-6 p-0.5 items-center shrink-0 rounded-xl transition-all duration-300 ${
            newMessageNotification ? 'bg-primary-purple-50 justify-end' : 'bg-primary-milk-50'
          }`}
        >
          <Image
            src={toggleButton}
            alt='toggle'
            onClick={() => setNewMessageNotification(!newMessageNotification)}
            className='cursor-pointer h-full'
          />
        </div>
      </div>

      <div className='bg-gray-500 w-full mt-2 mb-6 h-[0.5px]' />

      <div className='flex justify-between items-center gap-5 max-w-[690px]'>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-600 font-semibold'>Project notification</p>
          <p className='max-w-[290px] text-gray-400 text-Text-xs'>
            Control when you receive notifications for new projects
          </p>
        </div>

        <div
          className={`flex w-11 h-6 p-0.5 items-center shrink-0 rounded-xl transition-all duration-300 ${
            newMessageNotification ? 'bg-primary-purple-50 justify-end' : 'bg-primary-milk-50'
          }`}
        >
          <Image
            src={toggleButton}
            alt='toggle'
            onClick={() => setProjectNotification(!projectNotification)}
            className='cursor-pointer h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
