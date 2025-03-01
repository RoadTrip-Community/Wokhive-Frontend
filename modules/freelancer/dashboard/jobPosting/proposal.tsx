import { Input, TextArea } from '@/components/UI/Input';
import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import linkedin from '@/public/assets/svgs/icons/linkedin.svg';
import twitter from '@/public/assets/svgs/icons/twitter.svg';
import globe from '@/public/assets/svgs/icons/globe.svg';
import file from '@/public/assets/svgs/icons/file-upload.svg';

const Proposal: NextPage = () => {
  return (
    <div className='flex flex-col gap-10 max-w-[500px] w-full'>
      <TextArea
        size='sm'
        name='cover_letter'
        className='h-[150px]'
        placeholder='Write your cover letter...'
        label='Cover Letter'
      />
      <Input name='budget' label='Project budget (how much do you want to charge?)' placeholder='Enter your budget' />

      <div className='flex flex-col gap-4'>
        <p className='text-gay-900 text-Text-sm'>Project timeline (how long do you will it to execute task?)</p>
        <div className='flex gap-4 items-center justify-between'>
          <Input name='start_date' placeholder='Start Date' type='date' />
          <p className='text-gay-900 text-Text-sm'>-</p>
          <Input name='end_date' placeholder='End Date' type='date' />
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <p>Pictures and other attachments</p>
        <div className='flex flex-col gap-4 items-center justify-center h-[318px] rounded-lg border border-gray-300 bg-secondary-purple-10'>
          <label htmlFor='attachment' className='flex flex-col items-center gap-2 cursor-pointer w-full mx-auto'>
            <Image src={file} alt='file' />
            <p className='text-gray-700 text-center text-Text-sm max-w-[350px]'>
              <span className='font-semibold'>Click to Upload</span> or drag and drop a file
              <br /> PDF, DOC and DOCX Formats only (2MB max size)
            </p>
          </label>
          <Input name='attachment' type='file' multiple className='hidden' id='attachment' />
        </div>
      </div>

      <div className='flex flex-col w-full gap-6'>
        <p className='text-gray-700 font-semibold'>External Links</p>
        <div className='flex flex-col gap-10 w-full'>
          <Input
            name='linkedin'
            label='LinkedIn'
            placeholder='Enter your LinkedIn profile'
            icon={<Image src={linkedin} alt='linkedin' />}
            inputType='iconLeading'
          />
          <Input
            name='twitter'
            label='Twitter'
            placeholder='Enter your Twitter profile'
            icon={<Image src={twitter} alt='twitter' />}
            inputType='iconLeading'
          />
          <Input
            name='portfolio'
            label='External portfolio'
            placeholder='Enter your portfolio link'
            icon={<Image src={globe} alt='globe' />}
            inputType='iconLeading'
          />
        </div>
      </div>
    </div>
  );
};

export default Proposal;
