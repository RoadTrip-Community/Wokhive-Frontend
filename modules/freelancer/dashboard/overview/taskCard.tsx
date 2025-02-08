import { NextPage } from 'next';
import React from 'react';

const TaskCard: NextPage = () => {
  return (
    <div className='w-full max-w-[535px] flex p-5 flex-col justify-center items-center gap-5 rounded bg-[#FAFAFA]'>
      <div className='flex w-full max-w-[495px] justify-between'>
        <div className='flex max-w-[430px] flex-col gap-2 shrink-0'>
          <h4 className='font-semibold text-gray-900 text-[17px]'>Web Design project</h4>
          <p className='text-primary-purple-50 text-sm'>
            Design re-usable illustration and icons for the dashboard and profile page
          </p>
        </div>

        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path
            d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
            stroke='#344054'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
            stroke='#344054'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
            stroke='#344054'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      <div className='flex items-center gap-2.5 flex-wrap w-full'>
        <div className='flex py-2 px-4 justify-center items-center gap-2.5 rounded-2xl bg-secondary-purple-30'>
          <p className='font-medium text-xs text-primary-purple-60'>Design</p>
        </div>
        <p className='text-xs font-semibold text-primary-purple-30'>+ 6 more</p>
      </div>
    </div>
  );
};

export default TaskCard;
