import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import slugify from 'slugify';

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
];

const Project: NextPage = () => {
  return (
    <div className='flex flex-col gap-5 mb-5'>
      <div className='flex justify-between items-center'>
        <h1 className='text-gray-900 font-whyte font-medium text-3xl'>Ongoing projects</h1>
        <Link
          href={ROUTES.CLIENT_NEW_PROJECT}
          className=' bg-primary-purple-60 hover:bg-primary-300 hover:text-primary-purple-60 rounded-lg px-4 py-2 text-center text-white shadow-shadow/xs font-inter text-sm font-semibold'
        >
          New project
        </Link>
      </div>

      {/* router.push(`/dashboard/assets/edit/${itemId}`); */}
      <div className='flex justify-between flex-wrap gap-5'>
        {project.map((project, index) => (
          <Link
            href={`${ROUTES.CLIENT_PROJECTS}/${slugify(project.title, { lower: true })}`}
            key={index}
            className='flex-shrink-0 flex flex-col gap-2 cursor-pointer hover:scale-90'
          >
            <Image
              src={project.image}
              alt={project.title}
              width={332}
              height={189}
              className='rounded-xl border border-primary-purple-20'
            />
            <h1 className='text-gray-900 text-xl font-semibold font-romela'>{project.title}</h1>
            <p className='text-gray-400 text-base font-normal font-romela'>{project.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
