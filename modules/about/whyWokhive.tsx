import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import refresh from '@/public/assets/svgs/icons/refresh.svg';
import zap from '@/public/assets/svgs/icons/zap.svg';
import chart from '@/public/assets/svgs/icons/chart-breakout.svg';

const WhyWokhive: NextPage = () => {
  return (
    <div className='p-5 lg:py-40 lg:px-20'>
      <h3 className='text-Display-sm lg:text-Display-lg font-medium text-gray-900 md:text-center mt-8'>
        Why Choose Wokhive?
      </h3>
      <p className='text-Text-md lg:text-Text-lg text-gray-500 md:text-center max-w-[1278px] w-full md:w-11/12 m-auto mt-4'>
        Wokhive {"isn't"} just another freelance app. {"We're"} a bridge connecting talented freelancers with the
        perfect projects, built by RoadTrip, an open-source community. We understand the freelance life – the freedom,
        the challenges, the constant search for the next exciting gig. Wokhive puts everything you need to succeed as a
        freelancer at your fingertips:
      </p>

      <div className='flex gap-8 self-stretch mt-20 flex-col lg:flex-row md:items-center lg:items-start '>
        <div className='flex flex-col md:items-center gap-5 flex-[1_0_0] w-full max-w-[406px]'>
          <div className='p-8 rounded-lg bg-primary-milk-10 w-max'>
            <Image src={refresh} alt='refresh' />
          </div>

          <div className='flex flex-col md:items-center gap-2 self-stretch'>
            <h5 className='self-stretch text-gray-900 md:text-center text-Display-xs font-semibold'>
              Effortless Connections
            </h5>
            <p className='self-stretch text-gray-900 md:text-center text-Text-md md:text-Text-xl'>
              Find and apply for projects that match your skills and experience. We make it easy to showcase your talent
              and land your dream gigs.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:items-center gap-5 flex-[1_0_0] w-full max-w-[406px]'>
          <div className='p-8 rounded-lg bg-secondary-purple-10 w-max'>
            <Image src={zap} alt='zap' />
          </div>

          <div className='flex flex-col items-center gap-2 self-stretch'>
            <h5 className='self-stretch text-gray-900 md:text-center text-Display-xs font-semibold'>
              Project Management Made Easy
            </h5>
            <p className='self-stretch text-gray-900 md:text-center text-Text-md md:text-Text-xl'>
              Streamline your workflow with built-in tools to track tasks, deadlines, and communication. Stay organised
              and impress your clients.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:items-center gap-5 flex-[1_0_0] max-w-[406px]'>
          <div className='p-8 rounded-lg bg-secondary-lemon-10 w-max'>
            <Image src={chart} alt='chart' />
          </div>

          <div className='flex flex-col items-center gap-2 self-stretch'>
            <h5 className='self-stretch text-gray-900 md:text-center text-Display-xs font-semibold'>
              Efficient Collaboration
            </h5>
            <p className='self-stretch text-gray-900 md:text-center text-Text-md md:text-Text-xl'>
              Clients can explore a vast pool of freelancers across various industries and skill sets to find the ideal
              talent for your project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWokhive;
