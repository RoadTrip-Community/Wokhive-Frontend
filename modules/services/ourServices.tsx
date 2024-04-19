import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import freelancerImg from '@/public/assets/svgs/freelancer-pana.svg';
import clientImg from '@/public/assets/svgs/client-pana.svg';
import { clientData, freelancerData } from '@/constants/services';

const OurServices: NextPage = () => {
  return (
    <div className='p-5 mb-9'>
      <h1 className='text-Display-sm lg:text-Display-lg font-medium text-gray-900 md:text-center'>Services</h1>
      <p className='text-Text-md lg:text-Text-lg text-gray-500 md:text-center max-w-[1278px] w-full md:w-11/12 m-auto mt-4'>
        Wokhive connects freelancers with clients, offering a suite of services to streamline the freelance workflow for
        both parties.
      </p>

      <h3 className='text-Text-xl lg:text-Display-md font-bold text-gray-900 md:text-center mt-8'>
        Wokhive empowers you to:
      </h3>
      <div className='flex max-w-[1280px] gap-52 lg:gap-10 mt-10 flex-col mx-auto'>
        <div className='flex flex-col lg:flex-row p-10 rounded-xl border border-secondary-purple-50 bg-secondary-purple-10 items-center gap-10 self-stretch'>
          <div className='flex flex-col gap-3 flex-[1_1_0]'>
            <h4 className='self-stretch text-Text-xl lg:text-Display-extra text-primary-purple-60 font-medium'>
              For Freelancers
            </h4>
            <div className='flex flex-col justify-center gap-5 self-stretch'>
              {freelancerData.map((data, i) => (
                <div key={i} className='flex justify-center items-center gap-6 self-stretch'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M12 2.25V4.75M12 18V22M5.75 12H2.25M21.25 12H19.75M18.4571 18.4571L17.75 17.75M18.6642 5.41579L17.25 6.83M4.92157 19.0784L7.75 16.25M5.12868 5.20868L7.25 7.33'
                      stroke='#423366'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>

                  <p className='flex-1 text-gray-500 text-Text-xl font-medium'>
                    <span className='text-gray-900'>{data.title}:</span> {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Image src={freelancerImg} alt='freelancer' />
        </div>

        <div className='flex flex-col lg:flex-row p-10 rounded-xl border border-secondary-lemon-50 bg-secondary-lemon-10 items-center gap-10 self-stretch'>
          <Image src={clientImg} alt='client' className='order-2 lg:order-1' />

          <div className='flex flex-col gap-3 flex-[1_1_0] order-1 lg:order-2'>
            <h4 className='self-stretch text-Text-xl lg:text-Display-extra text-primary-purple-60 font-medium'>
              For Clients
            </h4>
            <div className='flex flex-col justify-center gap-5 self-stretch'>
              {clientData.map((data, i) => (
                <div key={i} className='flex justify-center items-center gap-6 self-stretch'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M12 2.25V4.75M12 18V22M5.75 12H2.25M21.25 12H19.75M18.4571 18.4571L17.75 17.75M18.6642 5.41579L17.25 6.83M4.92157 19.0784L7.75 16.25M5.12868 5.20868L7.25 7.33'
                      stroke='#423366'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>

                  <p className='flex-1 text-gray-500 text-Text-xl font-medium'>
                    <span className='text-gray-900'>{data.title}:</span> {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
