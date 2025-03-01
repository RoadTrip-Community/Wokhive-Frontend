import React from 'react';
import MessageSidebar from './messageSidebar';
import { NextPage } from 'next';
import MessageTopNav from './messageTopNav';
import { chats } from './chats';

const Messages: NextPage = () => {
  return (
    <div className='flex'>
      <MessageSidebar />

      <div className='flex flex-col overflow-hidden w-full'>
        <MessageTopNav />
        <div className='overflow-hidden h-[calc(100vh-150px)] flex flex-col'>
          <div className='p-4 space-y-4 overflow-y-scroll h-full relative flex-1'>
            {chats.map((chat) => (
              <div key={chat.id} className={`flex ${chat.sender === 'User' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-lg py-6 px-8 flex items-center gap-2.5 rounded-lg ${
                    chat.sender === 'User'
                      ? 'bg-primary-purple-60 text-secondary-purple-10'
                      : 'bg-secondary-purple-30 text-secondary-purple-110'
                  }`}
                >
                  {chat.type === 'text' && <p>{chat.message}</p>}
                  {chat.type === 'file' && (
                    <div className='flex items-center gap-6'>
                      <div className='flex p-3 items-center rounded bg-primary-purple-60'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='33' height='32' viewBox='0 0 33 32' fill='none'>
                          <path
                            d='M17.1667 2.66602H20.7667C23.0069 2.66602 24.127 2.66602 24.9826 3.10199C25.7353 3.48548 26.3472 4.09741 26.7307 4.85005C27.1667 5.7057 27.1667 6.82581 27.1667 9.06602V22.9327C27.1667 25.1729 27.1667 26.293 26.7307 27.1486C26.3472 27.9013 25.7353 28.5132 24.9826 28.8967C24.127 29.3327 23.0069 29.3327 20.7667 29.3327H12.2333C9.99312 29.3327 8.87302 29.3327 8.01737 28.8967C7.26472 28.5132 6.6528 27.9013 6.26931 27.1486C5.83333 26.293 5.83333 25.1729 5.83333 22.9327V21.9993M21.8333 17.3327H15.8333M21.8333 11.9993H17.1667M21.8333 22.666H11.1667M8.5 13.3327V5.99935C8.5 4.89478 9.39543 3.99935 10.5 3.99935C11.6046 3.99935 12.5 4.89478 12.5 5.99935V13.3327C12.5 15.5418 10.7091 17.3327 8.5 17.3327C6.29086 17.3327 4.5 15.5418 4.5 13.3327V7.99935'
                            stroke='#F6F4FF'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='flex flex-col gap-3'>
                        <p className='font-semibold text-primary-purple-60 text-Text-lg'>{chat.message}</p>
                        <a
                          href={chat.file_url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-primary-purple-60'
                        >
                          Click to view
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className='p-6 h-20 flex items-center'>
            <div className='flex w-full items-center gap-6'>
              <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
                <path
                  d='M16.0013 6.66602V25.3327M6.66797 15.9993H25.3346'
                  stroke='#423366'
                  strokeWidth='2.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <input
                type='text'
                className='h-16 px-5 flex-[1_0_0] w-full rounded-lg bg-gray-100 focus:outline-gray-400 focus:outline active:ring-0'
              />

              <div className='flex p-5 rounded-lg bg-primary-purple-60'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M10.5014 12.0008H5.0014M4.91675 12.2923L2.58183 19.267C2.39839 19.8149 2.30668 20.0889 2.3725 20.2576C2.42966 20.4041 2.55242 20.5152 2.7039 20.5575C2.87834 20.6061 3.1418 20.4876 3.66874 20.2505L20.3802 12.7303C20.8945 12.4989 21.1517 12.3831 21.2312 12.2224C21.3002 12.0827 21.3002 11.9188 21.2312 11.7792C21.1517 11.6184 20.8945 11.5027 20.3802 11.2712L3.66291 3.74849C3.13757 3.51209 2.87489 3.39389 2.70063 3.44237C2.54929 3.48448 2.42654 3.59527 2.36918 3.74151C2.30314 3.90991 2.39388 4.18328 2.57535 4.73004L4.9174 11.7863C4.94857 11.8802 4.96415 11.9272 4.9703 11.9752C4.97576 12.0178 4.97571 12.0609 4.97014 12.1035C4.96386 12.1515 4.94816 12.1984 4.91675 12.2923Z'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
