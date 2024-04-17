import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import freelancer from '@/public/assets/svgs/freelancer-pana.svg';
import client from '@/public/assets/svgs/client-pana.svg';

const AboutUs: NextPage = () => {
  return (
    <div className='p-5 mb-9'>
      <h1 className='text-Display-sm lg:text-Display-lg font-medium text-gray-900 md:text-center'>About Us</h1>
      <p className='text-Text-md lg:text-Text-lg text-gray-500 md:text-center max-w-[1278px] w-full md:w-11/12 m-auto mt-4'>
        Wokhive is a platform that connects talented freelancers with clients seeking exceptional skills and expertise.
        We bridge the gap between those with the vision and those with the power to bring it to life. Wokhive is built
        for everyone, whether {"you're"} a seasoned freelancer looking to expand your reach or a client searching for
        the perfect fit for your project.
      </p>

      <h3 className='text-Text-xl lg:text-Display-md font-bold text-gray-900 md:text-center mt-8'>
        Wokhive empowers you to:
      </h3>

      <div className='flex max-w-[1280px] justify-between gap-8 mt-10 mx-auto flex-col lg:flex-row items-center lg:items-start'>
        <div className='flex flex-col w-full max-w-[625px] lg:h-[474px] p-6 lg:p-12 justify-center gap-10 rounded-lg border-[0.5px] border-secondary-purple-50 bg-secondary-purple-10'>
          <div className='flex flex-col gap-3 self-stretch lg:order-2'>
            <h4 className='self-stretch text-Text-xl lg:text-Display-extra text-primary-purple-60 font-medium'>
              For Freelancers
            </h4>
            <p className='self-stretch text-Text-md lg:text-Text-xl text-secondary text-justify'>
              Showcase your skills, land high-paying projects, and build a thriving freelance business – all on your
              terms.
            </p>
          </div>
          <Image src={freelancer} alt='freelancer' />
        </div>

        <div className='flex flex-col w-full max-w-[625px] lg:h-[474px] p-6 lg:p-12 justify-center gap-10 rounded-lg border-[0.5px] border-secondary-lemon-50 bg-secondary-lemon-10'>
          <div className='flex flex-col gap-3 self-stretch lg:order-2'>
            <h4 className='self-stretch text-Text-xl lg:text-Display-extra text-primary-purple-60 font-medium'>
              For Clients
            </h4>
            <p className='self-stretch text-Text-md lg:text-Text-xl text-secondary text-justify'>
              Showcase your skills, land high-paying projects, and build a thriving freelance business – all on your
              terms.
            </p>
          </div>
          <Image src={client} alt='client' />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
