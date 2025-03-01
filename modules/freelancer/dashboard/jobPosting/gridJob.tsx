import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

const GridJob = () => {
  return (
    <Link href={ROUTES.JOB_DETAILS('s')} className='w-[344px] h-[271px] rounded-lg relative overflow-hidden shrink-0'>
      <Image src='https://picsum.photos/300' alt='job detail' width={344} height={271} className='rounded-lg' />
      <div className='flex p-5 flex-col absolute bottom-0 rounded-b-lg backdrop-blur-[20px] w-full'>
        <p className='overflow-hidden self-stretch text-gray-25 text-ellipsis whitespace-nowrap text-Text-lg font-semibold'>
          Web Designer needed for a contract role
        </p>
        <div className='flex gap-2'>
          <p className='text-gray-25 text-Text-sm'>Contract</p>
          <p className='text-gray-25 text-Text-sm'>3 months</p>
          <p className='text-gray-25 text-Text-sm'>$150,000</p>
        </div>
      </div>
    </Link>
  );
};

export default GridJob;
