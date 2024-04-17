import React from 'react';
import { NextPage } from 'next';
import community from '@/public/assets/svgs/community.svg';
import contract from '@/public/assets/svgs/contract.svg';
import Image from 'next/image';

const WhyWokhive: NextPage = () => {
  return (
    <section className='py-20 px-2 sm:px-6 max-w-[1600px] m-auto'>
      <h2 className='hidden md:block text-primary-purple-60 text-Display-extra font-medium text-center'>
        Why use Wokhive
      </h2>
      <p className='hidden md:block text-secondary text-center text-Text-xl'>
        Freelancers are switching to Wokhive for these benefits and more
      </p>
      <div className='flex flex-col sm:px-6 md:px-[140px] md:py-20 xl:px-8 justify-center gap-5 xl:flex-row xl:flex-wrap'>
        <div className='rounded-lg border-[0.5px] border-secondary-lemon-50 bg-secondary-lemon-10 p-6 gap-6 flex flex-col xl:flex-row items-center xl:items-start xl:justify-between xl:w-[700px] super:w-[843px] order-2 xl:order-1'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-primary-purple-60 text-Text-xl lg:text-xl xl:text-3xl font-medium'>
              A community driven experience
            </h3>
            <p className='text-secondary text-Text-sm lg:text-Text-md xl:text-Text-xl'>
              Get connected to communities and improve your network to make your freelancing journey easier
            </p>
          </div>
          <Image alt='community' height={226} src={community} width={282} />
        </div>
        <div className='rounded-lg border-[0.4px] border-primary-milk-50 bg-primary-milk-10 p-7 flex flex-col gap-5 order-1 xl:order-2 xl:max-w-[407px]'>
          <h3 className='text-primary-purple-60 text-Text-xl lg:text-xl xl:text-3xl font-medium max-w-[327px]'>
            Organise your contracts easily
          </h3>
          <p className='text-secondary text-Text-sm lg:text-Text-md xl:text-Text-xl'>
            Get connected to communities and improve your network to make your freelancing journey easier
          </p>
        </div>
        <div className='rounded-lg border-[0.5px] border-[#625580]/30 bg-[#cdc3f3] p-10 flex flex-col gap-5  order-3 xl:w-[480px] super:w-[516px]'>
          <h3 className='text-primary-purple-60 text-Text-xl lg:text-xl xl:text-3xl font-medium max-w-[400px]'>
            Get and manage gigs all from one place
          </h3>
          <p className='text-secondary text-Text-sm lg:text-Text-md xl:text-Text-xl'>
            Get connected to communities and improve your network to make your freelancing journey easier
          </p>
        </div>
        <div className='rounded-lg border-[0.5px] border-secondary-purple-50 bg-secondary-purple-10 order-4 p-6 lg:p-9 gap-6 xl:gap-8 flex flex-col xl:flex-row items-center xl:items-start xl:justify-between xl:w-[628px] super:w-[728px]'>
          <div className='flex flex-col gap-6'>
            <h3 className='text-primary-purple-60 text-Text-xl lg:text-xl xl:text-3xl font-medium super:w-[327px]'>
              Organise your contracts easily
            </h3>
            <p className='text-secondary text-Text-sm lg:text-Text-md xl:text-Text-xl super:w-[360px]'>
              Get connected to communities and improve your network to make your freelancing journey easier
            </p>
          </div>
          <Image alt='contract' height={226} src={contract} width={282} />
        </div>
      </div>
    </section>
  );
};

export default WhyWokhive;
