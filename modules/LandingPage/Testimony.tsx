import { NextPage } from 'next';
import React from 'react';

const Testimony: NextPage<TestimonyProps> = ({ testimony, name, role }) => {
  return (
    <>
      <div className='p-4 md:p-8 flex flex-col gap-4 md:gap-8 items-start h-full justify-between rounded border-[0.5px] border-secondary/10 bg-[#F9F9FA] w-[209px] md:w-[420px]'>
        <p className='text-secondary text-[9.6px] md:text-[19.2px] leading-[14.4px] md:leading-7 self-stretch flex rtl:text-left'>
          {testimony}
        </p>
        <div className='w-full'>
          <p className='text-primary-purple-60 font-semibold rtl:text-left w-full text-[8px] leading-[9.25px] md:text-[16px] md:leading-[18.5px]'>
            {name}
          </p>
          <p className='text-[#7C7A7F] text-[6.65px] leading-[9.225px] md:text-[13.3px] md:leading-[18.5px] rtl:text-left w-full '>
            {role}
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimony;
