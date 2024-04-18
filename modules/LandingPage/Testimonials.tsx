'use client';
import React from 'react';
import Testimony from './Testimony';
import { testimonies } from '@/constants/testimonies';
import { NextPage } from 'next';

const Testimonials: NextPage = () => {
  return (
    <>
      <section className='max-w-[2540px] m-auto'>
        <div className='pb-20 flex flex-col gap-2 px-6 md:px-8'>
          <h2 className='text-primary-purple-60 text-Display-xs md:text-Display-extra font-medium sm:text-center'>
            Customer Testimonials
          </h2>
          <p className='text-secondary sm:text-center sm:w-[500px] sm:m-auto md:text-Text-xl'>
            Join thousand of freelancers who have found success using WokHive
          </p>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex relative overflow-x-hidden w-full gap-6'>
            <div className='flex-[0_0_auto] min-w-full z-10 flex flex-row animate-scroll gap-6 items-center'>
              {testimonies.map((testimony) => (
                <Testimony
                  key={testimony.id}
                  name={testimony.name}
                  role={testimony.role}
                  testimony={testimony.testimony}
                />
              ))}
            </div>
            <div className='flex-[0_0_auto] min-w-full z-10 flex flex-row animate-scroll gap-6 items-center'>
              {testimonies.map((testimony) => (
                <Testimony
                  key={testimony.id}
                  name={testimony.name}
                  role={testimony.role}
                  testimony={testimony.testimony}
                />
              ))}
            </div>
          </div>

          <div className='flex relative overflow-x-hidden w-full gap-6'>
            <div className='flex-[0_0_auto] min-w-full z-10 flex flex-row animate-scroll-reverse gap-6 items-center'>
              {testimonies.map((testimony) => (
                <Testimony
                  key={testimony.id}
                  name={testimony.name}
                  role={testimony.role}
                  testimony={testimony.testimony}
                />
              ))}
            </div>
            <div className='flex-[0_0_auto] min-w-full z-10 flex flex-row animate-scroll-reverse gap-6 items-center'>
              {testimonies.map((testimony) => (
                <Testimony
                  key={testimony.id}
                  name={testimony.name}
                  role={testimony.role}
                  testimony={testimony.testimony}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
