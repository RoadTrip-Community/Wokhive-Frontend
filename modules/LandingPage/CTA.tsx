import React from 'react';
import Image from 'next/image';
import CTAOrangeFlower from '@/public/assets/svgs/cta_orange_flower.svg';
import CTABlueFlower from '@/public/assets/svgs/cta_blue_flower.svg';
import { NextPage } from 'next';
import Button from '@/components/UI/Button';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

const CTA: NextPage = () => {
  return (
    <section className='px-4 py-10 md:py-20 lg:py-[140px] lg:px-20 flex overflow-hidden'>
      <div className='bg-[#F9F9FA] w-full flex flex-col items-center lg:items-end relative rounded-t-2xl lg:h-[550px] max-w-[1800px] m-auto px-4 py-6 overflow-hidden'>
        <Image
          alt='cta flower'
          className='absolute top-[100px] -right-14 lg:top-5 lg:left-[40%]'
          src={CTAOrangeFlower}
        />
        <Image alt='cta flower' className='absolute left-4 lg:top-[25%] lg:left-[30px]' src={CTABlueFlower} />
        <Image
          alt='cta flower'
          className='absolute right-4 -bottom-9 lg:bottom-[45%] lg:left-[60%]'
          src={CTABlueFlower}
        />
        <Image
          alt='cta flower'
          className='absolute bottom-[45%] right-[56px] hidden lg:block'
          height={200}
          src={CTABlueFlower}
          width={200}
        />
        <div className='flex flex-col gap-2.5 items-center justify-center w-full h-[227px] rounded-t-2xl self-stretch' />
        <div className='flex flex-col lg:flex-row lg:justify-between gap-10 self-stretch lg:p-14 lg:items-center w-full'>
          <div className='flex flex-col gap-2 lg:w-[648px]'>
            <h4 className='text-primary-purple-60 text-Display-xs sm:text-Display-sm lg:text-Display-extra font-medium'>
              Take your career to the next level. <br />
              Join the Booming pool of freelancers today.
            </h4>
            <p className='text-secondary text-Text-md sm:text-Text-lg lg:text-Text-xl self-stretch'>
              Discover new clients and manage your gigs effectively on WokHive.
            </p>
          </div>
          <Link href={ROUTES.SIGNUP}>
            <Button hierarchy='primary' size='md' className='min-w-[150px]'>
              Join waitlist
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
