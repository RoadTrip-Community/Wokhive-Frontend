import React from 'react';
import { NextPage } from 'next';

const HelpCircle: NextPage<{
  className?: string;
}> = ({ className, ...props }) => (
  <svg
    className={className}
    fill='none'
    height='16'
    viewBox='0 0 16 16'
    width='16'
    xmlns='http://www.w3.org/2000/svg'
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <g id='help-circle'>
      <path
        d='M6.05967 5.99967C6.21641 5.55412 6.52578 5.17841 6.93298 4.9391C7.34018 4.69978 7.81894 4.6123 8.28446 4.69215C8.74998 4.772 9.17222 5.01402 9.47639 5.37536C9.78057 5.7367 9.94705 6.19402 9.94634 6.66634C9.94634 7.99967 7.94634 8.66634 7.94634 8.66634M7.99967 11.333H8.00634M14.6663 7.99967C14.6663 11.6816 11.6816 14.6663 7.99967 14.6663C4.31778 14.6663 1.33301 11.6816 1.33301 7.99967C1.33301 4.31778 4.31778 1.33301 7.99967 1.33301C11.6816 1.33301 14.6663 4.31778 14.6663 7.99967Z'
        id='Icon'
        stroke='#98A2B3'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.33333'
      />
    </g>
  </svg>
);

export default HelpCircle;
