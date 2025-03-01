import { NextPage } from 'next';
import Image from 'next/image';
import files from '@/public/assets/svgs/icons/file-attachment.svg';
import download from '@/public/assets/svgs/icons/download.svg';

const JobProposalDetails: NextPage = () => {
  return (
    <div className='flex flex-col gap-12 max-w-[500px] w-full'>
      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Project name/title</p>
        <p className='text-gray-700 text-Text-lg'>Web Design Project</p>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Project Description</p>
        <p className='text-gray-700 text-Text-lg self-stretch'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum ut velit at pretium. Aenean lobortis
          ante nec dapibus semper. Sed varius rhoncus odio, id consequat lectus luctus eu. Curabitur tristique rhoncus
          iaculis. Curabitur erat libero, egestas et tempus vitae, pharetra vel dui. Ut at sem ac neque hendrerit
          convallis
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Project Industry/Category</p>
        <p className='text-gray-700 text-Text-lg'>FIntech/Payment processing</p>
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
        <p className='text-gray-900 text-Text-lg font-semibold'>Project Budget</p>
        <p className='text-gray-700 text-Text-lg'>$150,000 (flexible)</p>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Project Timeline</p>
        <p className='text-gray-700 text-Text-lg'>July 16-September 16 (2 months)</p>
      </div>
      <div className='flex flex-col gap-6 flex-[1_0_0]'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Added Resources</p>
        <div className='flex w-full max-w-[518px] py-7 px-8 items-center gap-3 justify-between rounded-lg bg-gray-50'>
          <div className='flex w-full max-w-[328px] items-center gap-4'>
            <div className='p-3 rounded bg-secondary-purple-20'>
              <Image src={files} alt='file icon' />
            </div>
            <p className='text-gray-900 text-Text-xl font-semibold'>5 IMG, 1 DocX and 1 pdf</p>
          </div>
          <Image src={download} alt='download icon' />
        </div>
      </div>
    </div>
  );
};

export default JobProposalDetails;
