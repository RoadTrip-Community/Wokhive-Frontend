import { ROUTES } from '@/constants/routes';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListJob: NextPage = () => {
  return (
    <Link href={ROUTES.JOB_DETAILS('s')} className='flex p-1 items-center justify-between w-full gap-10 bg-[#FCFCFD]'>
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
  );
};

export default ListJob;
