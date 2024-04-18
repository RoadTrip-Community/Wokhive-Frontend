import React from 'react';
import Team from './team';
import { NextPage } from 'next';
import { teamData } from '@/constants/team';

const OurTeam: NextPage = () => {
  return (
    <div className='flex flex-col max-w-[1440px] py-14 items-center gap-16 self-stretch px-5'>
      <div className='flex flex-col md:items-center gap-5'>
        <h3 className='text-Display-sm lg:text-Display-lg font-medium text-gray-900 md:text-center mt-8'>
          Meet our team
        </h3>
        <p className='max-w-[768px] md:w-11/12 text-gray-900 self-stretch md:text-center text-Text-md lg:text-Text-xl'>
          Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to
          do your best work.
        </p>
      </div>

      <div className='flex justify-center flex-wrap gap-8 lg:gap-y-16 self-stretch'>
        {teamData.map((detail, index) => (
          <Team key={index} {...detail} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
