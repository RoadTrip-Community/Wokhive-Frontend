import React from 'react';
import { NextPage } from 'next';
import Button from '@/components/UI/Button';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

const GetStarted: NextPage = () => {
  return (
    <>
      <section className='flex flex-col gap-10 lg:gap-20 justify-center items-center px-6 py-10 lg:py-28 lg:px-[189px] bg-[linear-gradient(180deg,_#DFDCE5_-78.55%,_#FFF_100%)]'>
        <p className='w-[80%] sm-[600px] lg:w-[845px] text-[#5B595F] text-center lg:text-Text-xl'>
          Effortlessly manage your contacts with out intuitive contract management system. This would get you out of the
          hassle of manually attending to proposals, crafting invoices and all other mundane documents.
        </p>
        <div className='flex flex-1 gap-8 flex-col lg:flex-row items-center justify-between w-full max-w-[1062px]'>
          <div className='sm:w-[305px] flex flex-col gap-6 justify-stretch items-center'>
            <div className='p-8 bg-primary-milk-10 rounded-lg w-[90px]'>
              <svg fill='none' height='24' viewBox='0 0 25 24' width='25' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.0295 8.35186C13.4571 8.75995 12.7566 9 12 9C10.067 9 8.5 7.433 8.5 5.5C8.5 3.567 10.067 2 12 2C13.253 2 14.3522 2.65842 14.9705 3.64814M6.5 20.0872H9.11029C9.45063 20.0872 9.78888 20.1277 10.1188 20.2086L12.8769 20.8789C13.4753 21.0247 14.0988 21.0388 14.7035 20.9214L17.753 20.3281C18.5585 20.1712 19.2996 19.7854 19.8803 19.2205L22.0379 17.1217C22.654 16.5234 22.654 15.5524 22.0379 14.9531C21.4832 14.4134 20.6047 14.3527 19.9771 14.8103L17.4626 16.6449C17.1025 16.9081 16.6643 17.0498 16.2137 17.0498H13.7855L15.3311 17.0498C16.2022 17.0498 16.9079 16.3633 16.9079 15.5159V15.2091C16.9079 14.5055 16.4156 13.892 15.7141 13.7219L13.3286 13.1417C12.9404 13.0476 12.5428 13 12.1431 13C11.1783 13 9.43189 13.7988 9.43189 13.7988L6.5 15.0249M20.5 6.5C20.5 8.433 18.933 10 17 10C15.067 10 13.5 8.433 13.5 6.5C13.5 4.567 15.067 3 17 3C18.933 3 20.5 4.567 20.5 6.5ZM2.5 14.6L2.5 20.4C2.5 20.9601 2.5 21.2401 2.60899 21.454C2.70487 21.6422 2.85785 21.7951 3.04601 21.891C3.25992 22 3.53995 22 4.1 22H4.9C5.46005 22 5.74008 22 5.95399 21.891C6.14215 21.7951 6.29513 21.6422 6.39101 21.454C6.5 21.2401 6.5 20.9601 6.5 20.4V14.6C6.5 14.0399 6.5 13.7599 6.39101 13.546C6.29513 13.3578 6.14215 13.2049 5.95399 13.109C5.74008 13 5.46005 13 4.9 13L4.1 13C3.53995 13 3.25992 13 3.04601 13.109C2.85785 13.2049 2.70487 13.3578 2.60899 13.546C2.5 13.7599 2.5 14.0399 2.5 14.6Z'
                  stroke='#423366'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                />
              </svg>
            </div>
            <div className='flex flex-col gap-4 justify-between h-full'>
              <h2 className='text-primary-purple-60 text-center sm:text-Text-xl'>
                Integrated payment processing system
              </h2>
              <p className='text-[#7C7A7F] text-center text-Text-sm mx-auto sm:mx-0 w-[240px] sm:w-auto sm:text-Text-md'>
                Organise and send invoices, process payments and manage transactions with Wokhive.
              </p>
            </div>
          </div>
          <div className='sm:w-[305px] flex flex-col gap-6 justify-stretch items-center'>
            <div className='p-8 bg-primary-purple-10 rounded-lg w-[90px]'>
              <svg fill='none' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M20 17H4M4 17L8 13M4 17L8 21M4 7H20M20 7L16 3M20 7L16 11'
                  stroke='#423366'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                />
              </svg>
            </div>
            <div className='flex flex-col gap-4 justify-between h-full'>
              <h2 className='text-primary-purple-60 text-center sm:text-Text-xl'>
                Seamless Freelancer - Client collaboration
              </h2>
              <p className='text-[#7C7A7F] text-center text-Text-sm mx-auto sm:mx-0 w-[240px] sm:w-auto sm:text-Text-md'>
                Sync communication, manage reviews and keep up with timelines all from the same place.
              </p>
            </div>
          </div>
          <div className='sm:w-[305px] flex flex-col gap-6 justify-stretch items-center'>
            <div className='p-8 bg-secondary-purple-10 rounded-lg w-[90px]'>
              <svg fill='none' height='24' viewBox='0 0 25 24' width='25' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M21.5 21H5.1C4.53995 21 4.25992 21 4.04601 20.891C3.85785 20.7951 3.70487 20.6422 3.60899 20.454C3.5 20.2401 3.5 19.9601 3.5 19.4V3M20.5 8L16.5811 12.1827C16.4326 12.3412 16.3584 12.4204 16.2688 12.4614C16.1897 12.4976 16.1026 12.5125 16.016 12.5047C15.9179 12.4958 15.8215 12.4458 15.6287 12.3457L12.3713 10.6543C12.1785 10.5542 12.0821 10.5042 11.984 10.4953C11.8974 10.4875 11.8103 10.5024 11.7312 10.5386C11.6416 10.5796 11.5674 10.6588 11.4189 10.8173L7.5 15'
                  stroke='#423366'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                />
              </svg>
            </div>
            <div className='flex flex-col gap-4 justify-between h-full'>
              <h2 className='text-primary-purple-60 text-center sm:text-Text-xl'>
                Progress tracking and performance analytics
              </h2>
              <p className='text-[#7C7A7F] text-center text-Text-sm mx-auto sm:mx-0 w-[240px] sm:w-auto sm:text-Text-md'>
                View your project statistics, get insights and track your performance all at once.
              </p>
            </div>
          </div>
        </div>
        <Link href={ROUTES.SIGNUP}>
          <Button hierarchy='primary' size='md'>
            Join waitlist
          </Button>
        </Link>
      </section>
    </>
  );
};

export default GetStarted;
