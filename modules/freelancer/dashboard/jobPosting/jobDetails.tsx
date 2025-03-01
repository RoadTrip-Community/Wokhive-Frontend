'use client';
import Image from 'next/image';
import files from '@/public/assets/svgs/icons/file-attachment.svg';
import download from '@/public/assets/svgs/icons/download.svg';
import Button from '@/components/UI/Button';
import { NextPage } from 'next';
import { ROUTES } from '@/constants/routes';


const JobDetails: NextPage = () => {
  return (
    <div className='flex flex-col gap-6 self-stretch overflow-x-hidden overflow-y-scroll h-full px-3 pt-6'>
      <div className='flex flex-col gap-5 self-stretch'>
        <div className='h-[206px] self-stretch rounded-t-lg w-full overflow-hidden'>
          <Image
            src='https://picsum.photos/2000/1000'
            alt='job detail'
            width={2000}
            height={1000}
            className='rounded-t-lg w-full object-cover'
          />
        </div>
        <div className='flex justify-between items-end gap-3 self-stretch'>
          <div className='flex flex-col gap-3'>
            <p className='text-gray-700 text-Display-sm font-semibold'>Web Designer needed</p>
            <p className='text-Text-lg font-semibold text-gray-500'>$150,000</p>
          </div>
          <p className='text-Text-lg text-gray-500'>Post made 15h ago</p>
        </div>
      </div>

      <div className='flex flex-col self-stretch gap-14'>
        <div className='flex w-full flex-col gap-4'>
          <p className='text-gray-700 text-Text-lg font-semibold'>Project description</p>
          <p className='self-stretch text-gray-500 text-Text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum ut velit at pretium. Aenean lobortis
            ante nec dapibus semper. Sed varius rhoncus odio, id consequat lectus luctus eu. Curabitur tristique rhoncus
            iaculis. Curabitur erat libero, egestas et tempus vitae, pharetra vel dui. Ut at sem ac neque hendrerit
            convallis
          </p>
        </div>
        <div className='flex w-full flex-col gap-4'>
          <p className='text-gray-700 text-Text-lg font-semibold'>Project details</p>
          <div className='flex gap-10'>
            <div className='flex flex-col gap-4'>
              <p className='text-gray-500 text-Text-lg'>Project timeline</p>
              <p className='text-gray-500 text-Text-xl font-semibold'>3 months</p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-gray-500 text-Text-lg'>Flexible?</p>
              <p className='text-gray-500 text-Text-xl font-semibold'>Yes</p>
            </div>{' '}
            <div className='flex flex-col gap-4'>
              <p className='text-gray-500 text-Text-lg'>Project category</p>
              <p className='text-gray-500 text-Text-xl font-semibold'>Web design</p>
            </div>{' '}
            <div className='flex flex-col gap-4'>
              <p className='text-gray-500 text-Text-lg'>Project industry</p>
              <p className='text-gray-500 text-Text-xl font-semibold'>Construction and engineering</p>
            </div>
          </div>
        </div>
        <div className='flex gap-6 justify-between self-stretch'>
          <div className='flex flex-col gap-6 flex-[1_0_0]'>
            <p className='text-gray-700 text-Text-lg font-semibold'>Skills/Expertise</p>
            <div className='flex gap-4 self-stretch flex-wrap'>
              <p className='px-4 py-2 bg-secondary-purple-10 rounded-[34px] flex text-primary-purple-60 text-Text-lg'>
                Illustration
              </p>
              <p className='px-4 py-2 bg-secondary-purple-10 rounded-[34px] flex text-primary-purple-60 text-Text-lg'>
                Wireframing
              </p>
              <p className='px-4 py-2 bg-secondary-purple-10 rounded-[34px] flex text-primary-purple-60 text-Text-lg'>
                Branding
              </p>
              <p className='px-4 py-2 bg-secondary-purple-10 rounded-[34px] flex text-primary-purple-60 text-Text-lg'>
                User experience
              </p>
              <p className='px-4 py-2 bg-secondary-purple-10 rounded-[34px] flex text-primary-purple-60 text-Text-lg'>
                Prototyping
              </p>
              <p className='px-4 py-2 bg-secondary-purple-10 rounded-[34px] flex text-primary-purple-60 text-Text-lg'>
                Animation
              </p>
            </div>
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
      </div>
      <div className='w-full flex justify-center mt-6'>
        <Button className='max-w-[490px] min-w-[150px] w-full justify-center' size='xl' href={ROUTES.SENDPROPOSAL('s')}>
          Send Proposal
        </Button>
      </div>
    </div>
  );
};

export default JobDetails;
