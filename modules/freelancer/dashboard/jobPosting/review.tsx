import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

const ProposalReview: NextPage = () => {
  return (
    <div className='flex flex-col gap-12 max-w-[500px] w-full'>
      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Project name/title</p>
        <p className='text-gray-700 text-Text-lg'>Web Design Project</p>
      </div>

      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Cover letter</p>
        <p className='text-gray-700 text-Text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum ut velit at pretium. Aenean lobortis
          ante nec dapibus semper. Sed varius rhoncus odio, id consequat lectus luctus eu. Curabitur tristique rhoncus
          iaculis. Curabitur erat libero, egestas et tempus vitae, pharetra vel dui. Ut at sem ac neque hendrerit
          convallis
        </p>
      </div>

      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Project Budget</p>
        <p className='text-gray-700 text-Text-lg'>40$</p>
      </div>

      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Project Industry/Category</p>
        <div className='flex gap-4 self-stretch flex-wrap'>
          <p className='w-max px-4 py-2 bg-secondary-purple-10 rounded-[34px] flex text-primary-purple-60 text-Text-lg'>
            Illustration
          </p>
          <p className='w-max px-4 py-2 bg-secondary-purple-10 rounded-[34px] flex text-primary-purple-60 text-Text-lg'>
            Wireframing
          </p>
          <p className='w-max px-4 py-2 bg-secondary-purple-10 rounded-[34px] flex text-primary-purple-60 text-Text-lg'>
            Branding
          </p>
          <p className='w-max px-4 py-2 bg-secondary-purple-10 rounded-[34px] flex text-primary-purple-60 text-Text-lg'>
            Animation
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>External links & attachments</p>
        <p className='text-gray-700 text-Text-lg'>Added Resources</p>
        <div className='flex gap-5 overflow-scroll'>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className='w-[103px] h-[106px] rounded overflow-hidden relative border shrink-0'>
              <p className='text-lg font-semibold text-center absolute translate translate-y-1/2 translate-x-1/2'>
                .jpeg
                <br />
                <span className='text-sm'>4mb</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <Link href={'https://www.linkedin.com/slnf'}>https://www.linkedin.com/slnf</Link>
        <Link href={'https://www.x.com/slnf'}>https:/www.x.com/slnf</Link>
        <Link href={'https://www.dribble.com/slnf'}>https://www.dribble.com/slnf</Link>
      </div>

      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Project timeline</p>
        <p className='text-gray-700 text-Text-lg'>July 16-September 16 (2 months)</p>
      </div>
    </div>
  );
};

export default ProposalReview;
