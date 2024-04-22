'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NextPage } from 'next';
import React from 'react';
import { ArrowLeft } from 'iconsax-react';

const BreadCrumbs: NextPage<BreadCrumbProps> = ({
  homeElement,
  separator = <span>/</span>,
  activeClasses = '!text-gray-700',
  containerClasses = 'flex items-center h-6 gap-2 text-Text-sm',
  listClasses = 'text-gray-500 capitalize hover:text-black transition-colors duration-300',
  capitalizeLinks = true,
  goBack = true,
}) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <section className='flex items-center gap-6'>
      {goBack && <ArrowLeft color='#101828' />}
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
          let pathname = itemLink === 'Dashboard' ? 'Overview' : itemLink;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{pathname}</Link>
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
