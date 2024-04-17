/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';

const SocialButton: NextPage<SocialButtonProps> = ({
  platform = 'google',
  theme = 'brand',
  supportingText = true,
  className,
  isLoading,
  disabled,
  spinnerColor,
  spinnerSize,
  ...props
}) => {
  const platformLogos = {
    facebook: {
      brand: '/assets/svgs/social-icons/social-icon.svg',
      colorWithBrand: '/assets/svgs/social-icons/social-icon-1.svg',
      color: '/assets/svgs/social-icons/social-icon-2.svg',
    },
    google: {
      brand: '/assets/svgs/social-icons/social-icon-3.svg',
      colorWithBrand: '/assets/svgs/social-icons/social-icon-3.svg',
      color: '/assets/svgs/social-icons/social-icon-4.svg',
    },
    figma: {
      brand: '/assets/svgs/social-icons/social-icon-5.svg',
      colorWithBrand: '/assets/svgs/social-icons/social-icon-5.svg',
      color: '/assets/svgs/social-icons/social-icon-6.svg',
    },
    dribble: {
      brand: '/assets/svgs/social-icons/social-icon-10.svg',
      colorWithBrand: '/assets/svgs/social-icons/social-icon-11.svg',
      color: '/assets/svgs/social-icons/social-icon-7.svg',
    },
    twitter: {
      brand: '/assets/svgs/social-icons/social-icon-12.svg',
      colorWithBrand: '/assets/svgs/social-icons/social-icon-13.svg',
      color: '/assets/svgs/social-icons/social-icon-14.svg',
    },
    apple: {
      brand: '/assets/svgs/social-icons/social-icon-8.svg',
      colorWithBrand: '/assets/svgs/social-icons/social-icon-15.svg',
      color: '/assets/svgs/social-icons/social-icon-16.svg',
    },
  };

  const platformNames = {
    google: 'Google',
    facebook: 'Facebook',
    figma: 'Figma',
    dribble: 'Dribble',
    twitter: 'Twitter',
    apple: 'Apple',
  };

  const color =
    'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:shadow-shadow/focused disabled:bg-white disabled:cursor-not-allowed';

  const themeClasses = {
    google: {
      brand: color,
      colorWithBrand: color,
      color: color,
    },
    facebook: {
      brand:
        'bg-[#1877F2] text-white hover:bg-[#0C63D4] focus:shadow-shadow/focused disabled:bg-[#0C63D4] disabled:cursor-not-allowed',
      colorWithBrand: color,
      color: color,
    },
    figma: {
      brand:
        'bg-black text-white hover:bg-black focus:shadow-shadow/focused disabled:bg-black disabled:cursor-not-allowed',
      colorWithBrand: color,
      color: color,
    },
    dribble: {
      brand:
        'bg-[#EA4C89] text-white hover:bg-[#E62872] focus:shadow-shadow/focused disabled:bg-[#E62872] disabled:cursor-not-allowed',
      colorWithBrand: color,
      color: color,
    },
    twitter: {
      brand:
        'bg-[#1DA1F2] text-white hover:bg-[#0C8BD9] focus:shadow-shadow/focused disabled:bg-[#0C8BD9] disabled:cursor-not-allowed',
      colorWithBrand: color,
      color: color,
    },
    apple: {
      brand:
        'bg-black text-white hover:bg-black focus:shadow-shadow/focused disabled:bg-black disabled:cursor-not-allowed',
      colorWithBrand: color,
      color: color,
    },
  };

  return (
    <button
      className={`inline-flex py-2.5 px-4 justify-center items-center gap-3 rounded-lg shadow-shadow/xs border font-semibold ${themeClasses[platform][theme]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          className={`animate-spin h-5 w-5 text-white ${spinnerColor || 'text-primary-800'}`}
          fill='none'
          height={spinnerSize || '24'}
          viewBox='0 0 24 24'
          width={spinnerSize || '24'}
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
          <path
            className='opacity-75'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.94l3-2.65z'
            fill='currentColor'
          />
        </svg>
      ) : (
        <>
          <Image alt={`${platformNames[platform]} logo`} height={24} src={platformLogos[platform][theme]} width={24} />

          {supportingText && `Sign in with ${platformNames[platform]}`}
        </>
      )}
    </button>
  );
};

export default SocialButton;
