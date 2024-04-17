import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Team: NextPage<TeamProps> = ({ name, role, image, socials }) => {
  return (
    <div className='flex p-6 flex-col flex-1 self-stretch items-center gap-5 min-w-[280px] w-full max-w-[280px] h-[252px] rounded'>
      <div className='flex justify-center items-center rounded-full min-w-[96px] min-h-[96px] w-full h-full max-w-[96px] max-h-[96px] overflow-hidden border'>
        <Image src={image} alt={name} width={96} height={96} className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col items-center gap-4 self-stretch'>
        <div className='flex flex-col items-center gap-2 self-stretch'>
          <p className='self-stretch text-gray-900 text-center text-Text-lg font-semibold opacity-90 capitalize'>
            {name}
          </p>
          <p className='self-stretch text-primary-purple-60 text-Text-md text-center capitalize'>{role}</p>
        </div>
        <div className='flex justify-center items-center gap-4 self-stretch'>
          {socials.map((social) => (
            <Link href={social.link} key={social.name} target='_blank'>
              <Image src={social.name} alt={social.name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
