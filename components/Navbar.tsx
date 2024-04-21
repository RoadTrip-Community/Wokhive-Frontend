'use client';
import React from 'react';
import Logo from './Logo';
import { NextPage } from 'next';
import Button from './UI/Button';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { usePathname } from 'next/navigation';

const Navbar: NextPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (innerWidth <= 1024) {
      if (mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [mobileMenuOpen]);

  return (
    <nav className='bg-white lg:bg-primary-purple-10 sticky top-0 z-50 m-auto'>
      <div className='max-w-[1440px] w-full flex justify-between items-center py-4 px-6 lg:px-20 m-auto relative'>
        <Link href='/'>
          <Logo fill='#423366' />
        </Link>
        <div className='lg:hidden relative'>
          <button className='absolute z-20 right-0 -top-4' onClick={() => setMobileMenuOpen((prevState) => !prevState)}>
            <svg fill='none' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M3 12H15M3 6H21M3 18H21'
                stroke='black'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
              />
            </svg>
          </button>
        </div>
        <div
          className={`absolute top-16 lg:top-0 lg:basis-[66%] left-0 w-full h-screen bg-white flex flex-col gap-5 items-start p-2 pt-10 lg:pt-2 transform transition-transform duration-200 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:relative lg:flex lg:flex-row lg:items-center lg:justify-between lg:bg-transparent lg:h-auto`}
        >
          <div className='flex flex-col lg:flex-row gap-5 lg:items-center text-[#3A383F] font-medium'>
            <Button
              hierarchy='link'
              href={ROUTES.ABOUT}
              size='sm'
              onClick={() => setMobileMenuOpen((prevState) => !prevState)}
              className={pathname === ROUTES.ABOUT ? '!text-primary-700' : ''}
            >
              About us
            </Button>
            <Button
              hierarchy='link'
              href={ROUTES.SERVICES}
              size='sm'
              onClick={() => setMobileMenuOpen((prevState) => !prevState)}
              className={pathname === ROUTES.SERVICES ? '!text-primary-700' : ''}
            >
              Services
            </Button>
            <Button
              hierarchy='link'
              href={ROUTES.COMINGSOON}
              size='sm'
              onClick={() => setMobileMenuOpen((prevState) => !prevState)}
              className={pathname === ROUTES.PRICING ? '!text-primary-700' : ''}
            >
              Pricing
            </Button>
          </div>
          <div ref={dropdownRef} className='flex flex-col lg:flex-row gap-5 relative pl-3'>
            <Button
              hierarchy='primary'
              size='sm'
              href='/#waitlist'
              onClick={() => setMobileMenuOpen((prevState) => !prevState)}
            >
              Join waitlist
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
