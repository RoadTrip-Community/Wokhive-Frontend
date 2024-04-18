import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

const Button: NextPage<ButtonProps> = ({
  size = 'md',
  hierarchy = 'primary',
  leftIcon,
  rightIcon,
  destructive = false,
  isLoading = false,
  disabled = false,
  onClick,
  children,
  href,
  spinnerColor,
  spinnerSize,
  className,
  ...props
}) => {
  const sizeClasses: { [key: string]: string } = {
    sm: 'py-2 px-3.5 gap-1 text-Text-xs md:text-Text-sm font-semibold',
    md: 'py-2.5 px-4 gap-1 text-Text-sxs md:text-Text-sm font-semibold',
    lg: 'py-2.5 px-[18px] gap-2 text-Text-sm md:text-Text-md font-semibold',
    xl: 'py-3 px-5 gap-2 text-Text-sm md:text-Text-md font-semibold',
    '2xl': 'py-4 px-8 gap-2 text-Text-md md:text-Text-lg font-semibold',
  };

  const hierarchyClasses: { [key: string]: string } = {
    primary: destructive
      ? 'rounded-lg border-error-600 bg-error-600 text-white shadow-xs hover:border-error-700 hover:bg-error-700 focus:border-error-600 focus:bg-error-600 focus:shadow-shadow/focused disabled:border-error-200 disabled:bg-error-200 disabled:cursor-not-allowed'
      : 'rounded-lg border border-primary-purple-60 bg-primary-purple-60 text-white shadow-xs hover:border-primary-purple-30 hover:bg-primary-milk-60 hover:text-primary-purple-70 focus:border-secondary-purple-60 focus:bg-secondary-purple-60 focus:text-primary-purple-60 focus:shadow-shadow/focused disabled:border-primary-200 disabled:bg-secondary-purple-30 disabled:text-primary-purple-20 disabled:cursor-not-allowed',
    secondary: destructive
      ? 'rounded-lg border-error-200 bg-error-50 text-error-700 shadow-xs hover:border-error-200 hover:bg-error-100 hover:text-error-800 focus:border-error-200 focus:bg-error-50 focus:text-error-700 focus:shadow-shadow/focused disabled:border-error-25 disabled:bg-error-25 disabled:text-error-300 disabled:cursor-not-allowed'
      : 'rounded-lg border border-primary-200 bg-primary-50 text-primary-purple-70 shadow-xs hover:border-primary-200 hover:bg-primary-milk-10 hover:text-primary-800 focus:border-primary-200 focus:bg-primary-50 focus:text-primary-700 focus:shadow-shadow/focused disabled:border-primary-25 disabled:bg-primary-25 disabled:text-primary-300 disabled:cursor-not-allowed',
    tertiary: destructive
      ? 'rounded-lg text-error-700 hover:text-error-800 hover:bg-error-50 focus:text-error-700 disabled:text-error-300 disabled:cursor-not-allowed'
      : 'rounded-lg text-primary-purple-70 hover:text-primary-800 hover:bg-primary-milk-10 focus:text-primary-700 disabled:text-gray-300 disabled:bg-transparent disabled:cursor-not-allowed',
    link: destructive
      ? 'text-error-700 hover:text-error-800 focus:text-error-700 disabled:text-error-300 disabled:cursor-not-allowed'
      : 'text-primary-purple-70 hover:text-primary-milk-70 focus:text-primary-700 disabled:text-gray-300 disabled:cursor-not-allowed',
  };

  const classNames = `outline-none transition-all flex items-center ${href ? 'justify-start' : 'justify-center'} ${
    sizeClasses[size]
  } ${hierarchyClasses[hierarchy]} ${isLoading ? 'opacity-50' : ''} ${className}`;

  if (href) {
    return (
      <Link className={`flex ${classNames}`} href={href} {...props} onClick={onClick}>
        <>
          {leftIcon && <span>{leftIcon}</span>}
          {children}
          {rightIcon && <span>{rightIcon}</span>}
        </>
      </Link>
    );
  }

  return (
    <button
      className={classNames}
      disabled={disabled || isLoading}
      onClick={onClick}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {isLoading ? (
        <svg
          className={`animate-spin -ml-1 mr-3 h-5 w-5 ${spinnerColor || 'text-primary-purple-70'}`}
          fill='none'
          height={spinnerSize || '24'}
          viewBox='0 0 24 24'
          width={spinnerSize || '24'}
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
          <path
            className='opacity-75'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            fill='currentColor'
          ></path>
        </svg>
      ) : (
        <>
          {leftIcon && <span className='mr-2'>{leftIcon}</span>}
          {children}
          {rightIcon && <span className='ml-2'>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
