'use client';
import React, { useEffect } from 'react';
import { NextPage } from 'next';
import errorSvg from '@/public/assets/svgs/404.svg';
import Button from '@/components/UI/Button';
import Image from 'next/image';

const NotFound: NextPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/';
    }, 5000);
  }, []);

  return (
    <section className='bg-[linear-gradient(180deg,_#DFDCE5_-78.55%,_#FFF_100%)] flex justify-center items-center h-screen'>
      <div className='max-w-[1440px] min-h-screen flex justify-center items-center max-h-[1024px] m-auto p-6'>
        <div className='flex flex-col justify-center items-center gap-6'>
          <Image alt='404' src={errorSvg} />

          <div className='max-w-[700px] flex flex-col justify-center items-center gap-5 sm:gap-8 pb-10'>
            <h1 className='text-primary-purple-80 text-Display-md sm:text-Display-xl font-bold text-center'>
              Oops! Page not found
            </h1>
            <p className='text-center text-gray-800 font-medium text-Text-md sm:text-Text-xl'>
              We’re sorry for the inconvenience, it seems you are looking for a page that’s never existed or have been
              deleted
            </p>
          </div>

          <Button href='/' size='xl'>
            Go to homepage
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
