import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

const ContractCard: NextPage = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='w-[312px] h-[189px] shrink-0 rounded-lg overflow-hidden relative'>
        <div className='absolute bg-[#00000099] top-0 w-full h-full flex justify-center items-center'>
          <p className='text-gray-25'>Tap to open</p>
        </div>
        <Image
          src={'https://picsum.photos/300'}
          alt='contract'
          width={400}
          height={200}
          className='w-full object-cover'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-Text-xl text-gray-900 font-semibold'>Non-Disclosure Agreement.pdf</p>
        <p className='text-Text-sm text-gray-500'>Signed on 12/6/2023</p>
      </div>
    </div>
  );
};

export default ContractCard;
