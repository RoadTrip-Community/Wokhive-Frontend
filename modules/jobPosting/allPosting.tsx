import { ArrowDown2 } from 'iconsax-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { ROUTES } from '@/constants/routes';

const AllPosting = () => {
  return (
    <div className='flex pt-6 pb-20 flex-col gap-8 max-w-[1080px]'>
      <div className='flex justify-between items-center self-stretch'>
        <div className='flex items-center gap-2'>
          <h3 className='text-gray-900 font-medium text-Display-sm'>All postings</h3>
          <ArrowDown2 color='#101828' />
        </div>

        <Link href='#' className='font-medium text-primary-purple-60 text-Text-sm underline'>
          View saved contracts
        </Link>
      </div>
      <div className='flex justify-end items-center gap-6'>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25' fill='none'>
          <rect x='1' y='1.5' width='22' height='22' rx='4' stroke='#423366' strokeWidth='2' />
          <path
            d='M9.3 5.5H6.27407C5.82811 5.5 5.60512 5.5 5.43479 5.58679C5.28495 5.66313 5.16313 5.78495 5.08679 5.93479C5 6.10512 5 6.32811 5 6.77407V9.8C5 10.246 5 10.469 5.08679 10.6393C5.16313 10.7891 5.28495 10.9109 5.43479 10.9873C5.60512 11.0741 5.82811 11.0741 6.27407 11.0741H9.3C9.74597 11.0741 9.96895 11.0741 10.1393 10.9873C10.2891 10.9109 10.4109 10.7891 10.4873 10.6393C10.5741 10.469 10.5741 10.246 10.5741 9.8V6.77407C10.5741 6.32811 10.5741 6.10512 10.4873 5.93479C10.4109 5.78495 10.2891 5.66313 10.1393 5.58679C9.96895 5.5 9.74597 5.5 9.3 5.5Z'
            stroke='#423366'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.0593 5.5H15.0333C14.5874 5.5 14.3644 5.5 14.194 5.58679C14.0442 5.66313 13.9224 5.78495 13.8461 5.93479C13.7593 6.10512 13.7593 6.32811 13.7593 6.77407V9.8C13.7593 10.246 13.7593 10.469 13.8461 10.6393C13.9224 10.7891 14.0442 10.9109 14.194 10.9873C14.3644 11.0741 14.5874 11.0741 15.0333 11.0741H18.0593C18.5052 11.0741 18.7282 11.0741 18.8985 10.9873C19.0484 10.9109 19.1702 10.7891 19.2465 10.6393C19.3333 10.469 19.3333 10.246 19.3333 9.8V6.77407C19.3333 6.32811 19.3333 6.10512 19.2465 5.93479C19.1702 5.78495 19.0484 5.66313 18.8985 5.58679C18.7282 5.5 18.5052 5.5 18.0593 5.5Z'
            stroke='#423366'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18.0593 14.2593H15.0333C14.5874 14.2593 14.3644 14.2593 14.194 14.3461C14.0442 14.4224 13.9224 14.5442 13.8461 14.694C13.7593 14.8644 13.7593 15.0874 13.7593 15.5333V18.5593C13.7593 19.0052 13.7593 19.2282 13.8461 19.3985C13.9224 19.5484 14.0442 19.6702 14.194 19.7465C14.3644 19.8333 14.5874 19.8333 15.0333 19.8333H18.0593C18.5052 19.8333 18.7282 19.8333 18.8985 19.7465C19.0484 19.6702 19.1702 19.5484 19.2465 19.3985C19.3333 19.2282 19.3333 19.0052 19.3333 18.5593V15.5333C19.3333 15.0874 19.3333 14.8644 19.2465 14.694C19.1702 14.5442 19.0484 14.4224 18.8985 14.3461C18.7282 14.2593 18.5052 14.2593 18.0593 14.2593Z'
            stroke='#423366'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9.3 14.2593H6.27407C5.82811 14.2593 5.60512 14.2593 5.43479 14.3461C5.28495 14.4224 5.16313 14.5442 5.08679 14.694C5 14.8644 5 15.0874 5 15.5333V18.5593C5 19.0052 5 19.2282 5.08679 19.3985C5.16313 19.5484 5.28495 19.6702 5.43479 19.7465C5.60512 19.8333 5.82811 19.8333 6.27407 19.8333H9.3C9.74597 19.8333 9.96895 19.8333 10.1393 19.7465C10.2891 19.6702 10.4109 19.5484 10.4873 19.3985C10.5741 19.2282 10.5741 19.0052 10.5741 18.5593V15.5333C10.5741 15.0874 10.5741 14.8644 10.4873 14.694C10.4109 14.5442 10.2891 14.4224 10.1393 14.3461C9.96895 14.2593 9.74597 14.2593 9.3 14.2593Z'
            stroke='#423366'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <rect x='1' y='1' width='22' height='22' rx='4' stroke='#423366' strokeWidth='2' />
          <path
            d='M18 12L9.33333 12M18 7.71429L9.33333 7.71429M18 16.2857L9.33333 16.2857M6.44444 12C6.44444 12.3945 6.12109 12.7143 5.72222 12.7143C5.32335 12.7143 5 12.3945 5 12C5 11.6055 5.32335 11.2857 5.72222 11.2857C6.12109 11.2857 6.44444 11.6055 6.44444 12ZM6.44444 7.71429C6.44444 8.10877 6.12109 8.42857 5.72222 8.42857C5.32335 8.42857 5 8.10877 5 7.71429C5 7.3198 5.32335 7 5.72222 7C6.12109 7 6.44444 7.3198 6.44444 7.71429ZM6.44444 16.2857C6.44444 16.6802 6.12109 17 5.72222 17C5.32335 17 5 16.6802 5 16.2857C5 15.8912 5.32335 15.5714 5.72222 15.5714C6.12109 15.5714 6.44444 15.8912 6.44444 16.2857Z'
            stroke='#423366'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      <div className='flex gap-6 flex-col'>
        <div className='flex w-full justify-between gap-20 border border-gray-900 opacity-70 rounded-md p-3 bg-[#FAFAFA]'>
          <p className='text-gray-900 text-Text-lg basis-1/2'>Job Posting</p>
          <p className='text-gray-900 text-Text-lg text-center basis-3/12'>Contract</p>
          <p className='text-gray-900 text-Text-lg text-center basis-3/12'>Pay</p>
        </div>
        {Array.from({ length: 6 }).map((_, i) => (
          //   <GridJob key={i} />
          <Link href={ROUTES.JOB_DETAILS('s')} key={i} className='flex p-1 items-center justify-between w-full gap-10'>
            <div className='flex gap-7 items-center basis-1/2'>
              <Image
                src='https://picsum.photos/100'
                alt='job detail'
                width={64}
                height={61}
                className='rounded-lg w-[64px] h-[61px] object-cover'
              />
              <p className='max-w-[308px] overflow-hidden text-gray-900 text-ellipsis whitespace-nowrap font-semibold'>
                Web Designer needed for a contract role
              </p>
            </div>
            <span className='w-[1px] h-8 bg-gray-400' />

            <p className='text-gray-700 text-center w-full basis-3/12'>3 months</p>

            <span className='w-[1px] h-8 bg-gray-400' />

            <p className='text-gray-700 text-center w-full basis-3/12'>$150,000</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllPosting;
