import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import cpu from '@/public/assets/svgs/icons/cpu.svg';
import file from '@/public/assets/svgs/icons/file-minus.svg';
import tool from '@/public/assets/svgs/icons/tool.svg';
import user from '@/public/assets/svgs/icons/user-check.svg';

const StepFour: NextPage = () => {
  return (
    <>
      <div>
        <h3 className='text-gray-900 text-Display-md mb-4'>Next, Complete the KYC Verification</h3>

        <p className='w-[644px] text-gray-700 text-Text-xl'>
          To get the best experience from Wokhive, we require our users to undergo a quick KYC verification. Details
          Provided are safe.
        </p>

        <div className='flex w-[644px] flex-col items-start gap-5 mt-12'>
          <div className='flex items-center gap-6'>
            <Image alt='cpu' src={cpu} />
            <p className='text-gray-900 text-Text-xl font-semibold'>You will need your Government Identification</p>
          </div>
          <div className='flex items-center gap-6'>
            <Image alt='file' src={file} />
            <p className='text-gray-900 text-Text-xl font-semibold'>For this process we require NIN</p>
          </div>
          <div className='flex items-center gap-6'>
            <Image alt='tool' src={tool} />
            <p className='text-gray-900 text-Text-xl font-semibold'>
              Your name, passport and date of birth should be visible
            </p>
          </div>
          <div className='flex items-center gap-6'>
            <Image alt='user' src={user} />
            <p className='text-gray-900 text-Text-xl font-semibold'>You will get a notification upon verification</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFour;
