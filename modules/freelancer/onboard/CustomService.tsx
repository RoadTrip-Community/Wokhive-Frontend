import { NextPage } from 'next';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type CustomServiceProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
  children: React.ReactNode;
  color?: string;
};

const CustomService: NextPage<CustomServiceProps> = ({ children, color = 'purple', ...props }) => {
  let style: string;
  switch (color) {
    case 'purple':
      style = 'bg-secondary-purple-10';
      break;
    case 'lemon':
      style = 'bg-secondary-lemon-10';
      break;
    case 'milk':
      style = 'bg-primary-milk-10';
      break;
    default:
      style = 'bg-secondary-purple-10';
  }

  return (
    <>
      <h4
        className={`py-4 px-6 flex justify-center items-center gap-2.5 rounded text-primary-purple-40 text-Text-lg font-semibold cursor-pointer ${style}`}
        onClick={props.onClick}
      >
        {children}
      </h4>
    </>
  );
};

export default CustomService;
