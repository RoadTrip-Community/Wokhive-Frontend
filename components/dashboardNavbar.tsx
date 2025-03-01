'use client';
import React from 'react';
import { Notification } from 'iconsax-react';
import BreadCrumbs from './UI/breadCrumbs';
import { usePathname } from 'next/navigation';
import avatar from '@/public/assets/svgs/freelancerVerified.svg';
import Image from 'next/image';

const DashboardNavbar = () => {
  const pathname = usePathname();
  const goBack = pathname !== '/dashboard';

  return (
    <div className='flex w-[calc(100%-280px)] h-[70px] px-10 justify-between items-center border-b-2 border-gray-300 bg-white fixed z-10'>
      <BreadCrumbs goBack={goBack} />

      <div className='flex pl-2.5 justify-center items-center gap-2.5'>
        <div className='p-2.5 flex justify-center items-center rounded-lg relative'>
          <Notification size='20' color='#101828' />
          <div className='flex justify-center items-center w-3.5 h-3.5 shrink-0 bg-secondary-purple-40 rounded-full absolute top-1 right-1.5'>
            <p className='font-bold text-primary-purple-60 text-[10px]'>3</p>
          </div>
        </div>
        <div className='flex px-2.5 justify-center items-center gap-2.5'>
          <div className='w-11 h-11 rounded-full border-2 border-primary-purple-60 overflow-hidden'>
            <Image src={avatar} alt='avatar' width={44} height={44} className='rounded-full' />
          </div>
          <p className='text-primary-purple-60 font-medium text-xl'>John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
