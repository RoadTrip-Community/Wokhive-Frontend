import { NextPage } from 'next';
import React from 'react';
import Button from './UI/Button';
import Image from 'next/image';
import orangeFlower from '@/public/assets/svgs/cta_orange_flower.svg';
import blueFlower from '@/public/assets/svgs/cta_blue_flower.svg';

const CTA: NextPage = () => {
  return (
    <div className='p-6 lg:px-20 lg:py-32'>
      <div className='flex py-6 px-4 lg:p-14 flex-col gap-10 rounded-t-2xl bg-gray-100 relative overflow-hidden'>
        <Image
          src={blueFlower}
          alt='blue flower'
          width={91}
          height={89}
          className='absolute left-2 lg:left-8 top-20 lg:top-32'
        />
        <Image
          src={orangeFlower}
          alt='orange flower'
          width={91}
          height={89}
          className='absolute top-28 lg:top-6 -right-10 lg:right-24 lg:left-0 lg:mx-auto transform -rotate-[30deg]'
        />
        <Image
          src={blueFlower}
          alt='blue flower'
          width={91}
          height={89}
          className='absolute right-2 lg:right-[446px] bottom-36 lg:bottom-0 lg:top-0 lg:my-auto'
        />
        <Image
          src={blueFlower}
          alt='blue flower'
          width={203}
          height={200}
          className='hidden lg:flex absolute right-14 top-[132px]'
        />

        <div className='h-[227px] w-full rounded-t-2xl' />

        <div className='flex max-w-[1168px] w-full justify-between gap-10 lg:items-center flex-col lg:flex-row relative z-10'>
          <div className='flex flex-col gap-2 lg:max-w-[648px]'>
            <h4 className='text-primary-purple-60 text-Display-xs lg:text-Display-extra font-bold'>
              Sign up today and experience the difference. {"Let's"} hit the road to success together!
            </h4>
            <p className='self-stretch text-gray-900 text-Text-lg lg:text-Text-xl'>
              {"We're"} not just a platform – {"we're"} your co-pilot on the freelance journey. With Wokhive, {"you'll"}{' '}
              have the tools and support you need to confidently navigate your freelance career.
            </p>
          </div>
          <div className='min-w-max'>
            <Button size='lg'>Sign up today</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
