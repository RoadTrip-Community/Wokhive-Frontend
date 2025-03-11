'use client';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { NextPage } from 'next';
import React from 'react';
import { ArrowLeft } from 'iconsax-react';

const BreadCrumbs: NextPage<BreadCrumbProps> = ({
  homeElement,
  separator,
  activeClasses = '!text-gray-700',
  containerClasses = 'flex items-center h-6 gap-2 text-Text-sm',
  listClasses = 'text-gray-500 capitalize hover:text-black transition-colors duration-300',
  capitalizeLinks = true,
  goBack = true,
}) => {
  const paths = usePathname();
  const { back } = useRouter();
  const pathNames = paths.split('/').filter((path) => path);

  separator = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M7 24L17 0' />
    </svg>
  );

  return (
    <section className='flex items-center gap-6'>
      {goBack && <ArrowLeft onClick={back} className='cursor-pointer' color='#101828' />}
      <ul className={containerClasses}>
        {homeElement && (
          <>
            <li className={listClasses}>
              <Link href={'/'}>{homeElement}</Link>
            </li>
            {pathNames.length > 0 && separator}
          </>
        )}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`;
          let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? (link[0].toUpperCase() + link.slice(1, link.length)).split('-').join(' ')
            : link.split('-').join(' ');

          if (pathNames.length > 3 && index !== 0 && index < pathNames.length - 2) {
            return index === 1 ? (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  width='18px'
                  height='18px'
                >
                  <path d='M0 0h24v24H0z' fill='none' />
                  <path d='M5 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' />
                </svg>
                {pathNames.length !== index + 1 && separator}
              </>
            ) : null;
          }

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </section>
  );
};

export default BreadCrumbs;
