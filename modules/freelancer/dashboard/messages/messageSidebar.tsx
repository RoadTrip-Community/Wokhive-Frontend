'use client';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const MessageSidebar: NextPage = () => {
  const [expand, setExpand] = useState(true);

  useEffect(() => {
    if (innerWidth < 768) {
      setExpand(false);
    }
  }, []);

  return (
    <div
      className={`max-w-[384px] bg-gray-25 shrink-0 h-[calc(100vh-80px)] transition-all ${
        expand && 'w-full'
      } flex flex-col gap-6 overflow-hidden`}
    >
      <div className='flex justify-between gap-4 items-center  px-6 py-8'>
        {expand && <p className='text-[22px] text-primary-purple-70 font-semibold'>Messages</p>}
        <svg
          onClick={() => setExpand(!expand)}
          className='cursor-pointer'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          {expand ? (
            <path
              d='M18 17L13 12L18 7M11 17L6 12L11 7'
              stroke='#101828'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          ) : (
            <path
              d='M6 17L11 12L6 7M13 17L18 12L13 7'
              stroke='#101828'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          )}
        </svg>
      </div>

      <div className='overflow-y-auto'>
        <div className={`flex flex-col transition-all ${expand ? 'max-w-[328px] pl-6' : 'pl-2'} gap-6`}>
          {Array.from({ length: 20 }, (_, index) => index + 1).map((item) => (
            <button key={item} className='flex items-center text-start gap-3 self-stretch'>
              <div className='w-12 h-12 rounded-full overflow-hidden'>
                <Image src={'https://picsum.photos/50'} alt='image' width={50} height={50} />
              </div>
              {expand && (
                <div className='flex flex-col gap-2 flex-[1_0_0]'>
                  <div className='flex justify-between gap-2 items-center'>
                    <p className='font-semibold text-primary-purple-50'>James Rogur</p>
                    <p className='text-gray-400 text-right text-Text-xs'>10:05am</p>
                  </div>
                  <p
                    className='text-gray-500 overflow-hidden text-ellipsis text-xs'
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      lineClamp: 1,
                      alignSelf: 'stretch',
                      boxOrient: 'vertical',
                    }}
                  >
                    Are we still on for today? I would love to know so i can be informed accordingly. Look forward to
                    hearing from you. Thanks
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageSidebar;
