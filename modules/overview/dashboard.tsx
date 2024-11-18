import Button from '@/components/UI/Button';
import { Add } from 'iconsax-react';
import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import arrowRight from '@/public/assets/svgs/icons/arrow-up-right.svg';

const Dashboard: NextPage = () => {
  return (
    <div className='flex pt-6 pb-20 flex-col gap-8 w-full'>
      {/* SECTION onboarding banner */}
      <div className='flex w-full p-6 justify-between items-center gap-10 rounded-lg bg-secondary-lemon-10'>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold text-primary-purple-80 text-Text-lg'>Onboarding stage 3/3</p>
          <p className='text-gray-900 text-Text-sm'>
            Your details are being verified and a verification notification would be sent to you upon completion
          </p>
        </div>
        <Button hierarchy='secondary' className='min-w-[150px]'>
          Complete now
        </Button>
      </div>
      {/* !SECTION onboarding banner */}

      <div className='flex flex-col gap-2 w-full xl:w-11/12'>
        <h1 className='text-Display-md font-medium text-gray-700'>Hello John,</h1>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-end w-full'>
            <div className='flex items-center gap-1'>
              <Add color='#423366' />
              <p className='text-Text-sm font-semibold text-primary-purple-60'>New Project</p>
            </div>
          </div>

          <div className='flex gap-10 justify-between'>
            <div className='flex py-5 px-4 flex-col gap-4 rounded border border-secondary-purple-10 bg-primary-purple-10 flex-1'>
              <div className='flex items-center gap-2'>
                <p className='text-Text-sm font-medium text-primary-purple-60'>Ongoing Projects</p>
                <Image src={arrowRight} alt='arrow right' />
              </div>
              <p className='font-semibold text-primary-purple-80 text-Display-xs'>3</p>
            </div>

            <div className='flex py-5 px-4 flex-col gap-4 rounded border border-secondary-purple-10 bg-primary-purple-10 flex-1'>
              <div className='flex items-center gap-2'>
                <p className='text-Text-sm font-medium text-primary-purple-60'>Completed Projects</p>
                <Image src={arrowRight} alt='arrow right' />
              </div>
              <p className='font-semibold text-primary-purple-80 text-Display-xs'>10</p>
            </div>

            <div className='flex py-5 px-4 flex-col gap-4 rounded border border-secondary-purple-10 bg-primary-purple-10 flex-1'>
              <div className='flex items-center gap-2'>
                <p className='text-Text-sm font-medium text-primary-purple-60'>Active Negotiations</p>
                <Image src={arrowRight} alt='arrow right' />
              </div>
              <p className='font-semibold text-primary-purple-80 text-Display-xs'>2</p>
            </div>

            <div className='flex py-5 px-4 flex-col gap-4 rounded border border-gray-300 bg-primary-purple-70 min-w-[310px] flex-[2_2_0%]'>
              <div className='flex items-center gap-2'>
                <p className='text-Text-sm font-medium text-gray-300'>Wokhive available balance</p>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
                  <path
                    d='M5.83203 14.1663L14.1654 5.83301M14.1654 5.83301H5.83203M14.1654 5.83301V14.1663'
                    stroke='#D0D5DD'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <p className='font-semibold text-gray-25 text-Display-xs'>$1,200,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
