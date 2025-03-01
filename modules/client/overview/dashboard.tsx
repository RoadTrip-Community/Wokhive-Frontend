import Button from '@/components/UI/Button';
import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

const project = [
  {
    image: '/assets/images/code.png',
    title: 'Website Design Project',
    subtitle: 'You and James rogur',
  },
  {
    image: '/assets/images/custom.png',
    title: 'Custom illustrations project',
    subtitle: 'You and Filomena',
  },
  {
    image: '/assets/images/web_app.png',
    title: 'Web app project',
    subtitle: 'You and Filomena',
  },
  {
    image: '/assets/images/custom.png',
    title: 'Custom illustrations project',
    subtitle: 'You and Filomena',
  },
  {
    image: '/assets/images/web_app.png',
    title: 'Web app project',
    subtitle: 'You and Filomena',
  },
  {
    image: '/assets/images/web_app.png',
    title: 'Web app project',
    subtitle: 'You and Filomena',
  },
  {
    image: '/assets/images/web_app.png',
    title: 'Web app project',
    subtitle: 'You and Filomena',
  },
  {
    image: '/assets/images/web_app.png',
    title: 'Web app project',
    subtitle: 'You and Filomena',
  },
  {
    image: '/assets/images/web_app.png',
    title: 'Web app project',
    subtitle: 'You and Filomena',
  },
  {
    image: '/assets/images/web_app.png',
    title: 'Web app project',
    subtitle: 'You and Filomena',
  },
];

const Dashboard: NextPage = () => {
  return (
    <div className='flex pb-20 flex-col gap-8 w-full'>
      {/* SECTION onboarding banner */}
      <div className='flex w-full p-6 justify-between items-center gap-10 rounded-lg bg-secondary-lemon-10'>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold text-primary-purple-80 text-Text-lg'>Onboarding stage 3/3</p>
          <p className='text-gray-900 text-Text-sm'>
            Your details are being verified and a verification notification would be sent to you upon completion
          </p>
        </div>
        <Button hierarchy='secondary' className='min-w-[150px]'>
          Complete now
        </Button>
      </div>
      {/* !SECTION onboarding banner */}

      <div className='flex flex-col gap-5 w-full'>
        <h1 className='text-Display-md font-medium text-gray-700'>Hello John,</h1>
        <div className='flex flex-col gap-4'>
          <div>
            <Link
              href={ROUTES.CLIENT_NEW_PROJECT}
              className='bg-primary-purple-60 rounded-lg px-4 py-3 text-center text-white shadow-shadow/xs font-inter text-sm font-semibold'
            >
              Post a new job
            </Link>
          </div>
         

          <div className='flex justify-between items-center'>
            <h1 className='text-gray-700 font-romela text-2xl'>Ongoing projects</h1>
            <Link href={ROUTES.CLIENT_PROJECTS} className='font-romela font-normal text-base text-gray-700 capitalize'>
              {' '}
              see more
            </Link>
          </div>

          {/* Scrollable section */}
          <div className='overflow-x-auto mt-5 hide-scrollbar'>
            <div className='flex space-x-4'>
              {project.map((project, index) => (
                <div key={index} className='flex-shrink-0 flex flex-col gap-2'>
                  <Image src={project.image} alt={project.title} width={332} height={189} className='rounded-xl' />
                  <h1 className='text-gray-900 text-xl font-semibold'>{project.title}</h1>
                  <p className='text-gray-500 text-base font-normal'>{project.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='flex justify-between items-center  mt-5'>
            <h1 className='text-gray-700 font-romela text-2xl'>Job Posting</h1>
            <Link
              href={ROUTES.CLIENT_JOB_POSTINGS}
              className='font-romela font-normal text-base text-gray-700 capitalize'
            >
              {' '}
              see more
            </Link>
          </div>

          <div className='overflow-x-auto mt-5 hide-scrollbar'>
            <div className='flex space-x-4'>
              {project.map((project, index) => (
                <div key={index} className='flex-shrink-0 flex flex-col gap-2'>
                  <Image src={project.image} alt={project.title} width={332} height={189} className='rounded-xl' />
                  <h1 className='text-gray-900 text-xl font-semibold'>{project.title}</h1>
                  <p className='text-gray-500 text-base font-normal'>{project.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
