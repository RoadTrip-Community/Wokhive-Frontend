import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import clock from '@/public/assets/svgs/icons/clock-stopwatch.svg';
import verified from '@/public/assets/svgs/icons/check-verified-02.svg';
import bulb from '@/public/assets/svgs/icons/lightbulb-02.svg';
import pencil from '@/public/assets/svgs/icons/pencil-line.svg';
import clientImg from '@/public/assets/images/client_onboard_img.png';
import onboardEllipse from '@/public/assets/svgs/onboard_ellipse.svg';
import Logo from '@/components/Logo';
import Button from '@/components/UI/Button';
import ClientSvgs from './clientSvgs';

const ClientOnboardingStartScreen: NextPage<{
  onStart: () => void;
}> = ({ onStart }) => {
  return (
    <section className='overflow-hidden '>
      <div className='relative max-w-[1440px] p-8 m-auto pr-0'>
        <div className='flex justify-between items-center max-w-[1340px] absolute top-6 w-full z-20'>
          <Logo fill='#423366' />
        </div>

        <div className='flex items-center justify-between w-full mt-14'>
          <div className='flex flex-col items-start gap-24'>
            <h2 className='text-[#1B1B1B] text-Display-md font-medium w-[762px]'>
              Hey John Doe, Ready to experience the possibility of managing your projects and get connected to great
              talents?
            </h2>

            <div className='flex w-[644px] flex-col items-start gap-10'>
              <div className='flex justify-between items-start self-stretch'>
                <div className='flex w-[306px] items-start gap-6'>
                  <Image alt='clock' className='shrink-0' src={clock} />
                  <p className='min-w-[238px] text-[#585858] text-Text-xl font-semibold'>
                    Answer a few questions and start building your profile
                  </p>
                </div>
                <div className='flex w-[306px] items-start gap-6'>
                  <Image alt='user edit' className='shrink-0' src={verified} />
                  <p className='min-w-[238px] text-[#585858] text-Text-xl font-semibold'>
                    Hire top verified talents for your next job
                  </p>
                </div>
              </div>

              <div className='flex justify-between items-start self-stretch'>
                <div className='flex w-[306px] items-start gap-6'>
                  <Image alt='people' className='shrink-0' src={bulb} />
                  <p className='min-w-[238px] text-[#585858] text-Text-xl font-semibold'>
                    Get access to a wide range of potential employees
                  </p>
                </div>
                <div className='flex w-[306px] items-start gap-6'>
                  <Image alt='file' className='shrink-0' src={pencil} />
                  <p className='min-w-[238px] text-[#585858] text-Text-xl font-semibold'>
                    Make use of thoroughly crafted legal contract templates
                  </p>
                </div>
              </div>
            </div>

            <div className='flex w-[644px] flex-col items-start gap-9'>
              <p className='flex gap-2 items-center w-[610px]'>
                <svg fill='none' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z'
                    stroke='#E2B93B'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                  />
                  <path d='M12 8V13' stroke='#E2B93B' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' />
                  <path
                    d='M11.9961 16H12.0051'
                    stroke='#E2B93B'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
                <span>It only takes 5-10 minutes and you can edit it later. We’ll save as you go.</span>
              </p>

              <Button hierarchy='primary' size='2xl' className='w-full' onClick={onStart}>
                Let’s get started
              </Button>
            </div>
          </div>
          <div className='relative h-[650px] basis-1/2 '>
            <div className='absolute -right-[400px] w-[966.5px] h-[722px]'>
              <Image
                alt='ellipse'
                className='absolute -top-[calc(50%-315px)] left-[calc(50%-350px)] -z-10 w-[700.4px] h-[700.4px]'
                src={onboardEllipse}
              />
              <Image alt='freelancer' className='absolute top-0 right-0 -z-10 w-[966.5px] h-[695px]' src={clientImg} />

              {/* NOTE: absolute SVGs */}
              <ClientSvgs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientOnboardingStartScreen;
