import React from 'react';
import Image from 'next/image';
import newsletter from '@/public/assets/svgs/newsletter.png';
import orangeFlower from '@/public/assets/svgs/cta_orange_flower.svg';
import whiteFlower from '@/public/assets/svgs/white_flower.svg';
import { NextPage } from 'next';
import Button from '@/components/UI/Button';

const JoinProgram: NextPage = () => {
  return (
    <>
      <section
        id='waitlist'
        className='px-8 pt-16 lg:pt-[91px] pb-[109px] lg:pb-36 flex flex-col  lg:flex-row items-center lg:items-stretch justify-center max-w-[1440px] mx-auto'
      >
        <div className='bg-[#F7F5FB] rounded-t-lg lg:rounded-l-2xl lg:rounded-t-none relative overflow-hidden w-full max-w-[573px]'>
          <Image
            alt='newsletter'
            className='w-full h-full max-w-[573px] max-h-[573px]'
            height={576}
            src={newsletter}
            width={573}
          />
        </div>
        <div className='bg-[#615580] flex flex-col p-6 justify-center gap-10 w-full h-[400px] lg:h-auto max-w-[573px] lg:px-16 rounded-b-lg lg:rounded-r-2xl lg:rounded-b-none relative'>
          <Image alt='flower' className='absolute top-0 right-0 z-10 rotate-[30deg]' src={orangeFlower} />
          <Image
            alt='flower'
            className='w-[115px] h-[113px] lg:w-auto lg:h-auto absolute -bottom-[56px] lg:-bottom-[99px] -right-[24px] lg:-right-[13px] z-10'
            src={whiteFlower}
          />
          <div>
            <h2 className='text-white text-[19.4px] leading-[29.1px] self-stretch lg:text-Display-xs xl:text-Display-extra xl:leading-[51px] font-medium pb-2'>
              Join Wokhive’s Early Access Program
            </h2>
            <p className='text-primary-purple-10 text-Text-xs lg:text-Text-md xl:text-Text-xl'>
              Become one of our first few members and get access to exclusive deals, test new features and more.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row items-start  sm:items-center justify-between bg-transparent sm:bg-white rounded-lg sm:py-1 sm:pl-4 pr-1 w-full'>
            <input
              className='text-[#908F8F] text-[9.1px] lg:text-base bg-white placeholder:text-[#908F8F] py-4 px-2 w-full mb-4 sm:mb-0 rounded-lg h-10 outline-none focus:outline-none basis-1/2'
              placeholder='Enter your email address'
              type='text'
            />
            <Button hierarchy='primary' href='/' size='lg'>
              Join the program
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinProgram;
