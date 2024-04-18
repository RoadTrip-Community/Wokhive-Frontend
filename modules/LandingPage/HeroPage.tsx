import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import heroImage from '@/public/assets/images/heroImg.png';
import Button from '@/components/UI/Button';
import { ROUTES } from '@/constants/routes';

const HeroPage: NextPage = () => {
  return (
    <>
      <section className='bg-primary-purple-10 flex flex-col justify-center items-center gap-20 h-[800px] md:h-screen max-h-[870px] overflow-hidden px-6 lg:px-8 min-w-[340px]'>
        <div className='flex flex-col basis-[50vh] justify-center items-center'>
          <h1 className='text-primary-purple-60 text-Display-sm lg:text-Display-lg font-medium pb-6 text-center'>
            Empower your Freelancing career with wokhive
          </h1>
          <p className='md:w-[738px] text-center text-zinc-600 md:text-Text-xl pb-10'>
            Connect with new clients, streamline payments and manage tasks effectively. Take control of your freelance
            career today
          </p>
          <Button hierarchy='primary' href={ROUTES.SIGNUP} size='md'>
            Sign up now
          </Button>
        </div>
        <div className='relative flex justify-center sm:min-h-[300px] w-full sm:w-[844px] min-w-[340px] h-[276.305px] md:w-[1058px]'>
          <div className='w-[calc(100%+100px)] sm:w-[844px] h-[600px] rounded-2xl bg-white/60 shadow-[0px_15px_250px_70px_rgba(192,_187,_204,_0.30)] rotate-[-12.221deg] absolute top-5 sm:top-0 left-6 sm:left-14 shrink-0' />
          <div className='w-[calc(100%+100px)] sm:w-[844px] h-[600px] rounded-2xl bg-white/60 shadow-[0px_15px_250px_70px_rgba(192,_187,_204,_0.30)] absolute top-8 sm:top-0 shrink-0' />
          <Image
            alt='hero'
            className='shadow-[0px_15px_250px_70px_rgba(192,_187,_204,_0.30)] flex justify-center m-auto bg-no-repeat bg-cover rounded-2xl absolute top-10 sm:top-0 sm:right-10 rotate-[9.016deg] shrink-0 w-[calc(100%+100px)] sm:w-full max-w-[844px] max-h-[600px]'
            height={600}
            src={heroImage}
            width={844}
          />
          <div className='bg-[linear-gradient(0deg,_#FAFAFA_50%,_rgba(249,_249,_250,_0)_100%)] h-11 blur-[10px] px-[100px] absolute z-20 -bottom-6 w-[1031px] hidden' />
        </div>
      </section>
    </>
  );
};

export default HeroPage;
