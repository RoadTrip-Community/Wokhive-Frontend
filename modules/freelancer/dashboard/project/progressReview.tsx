import React from 'react';
import ReviewCard from './reviewCard';

const ProgressReview = () => {
  return (
    // <div className='overflow-hidden '>
    <div className='flex flex-col gap-5 h-[calc(100vh-300px)] overflow-scroll'>
      {Array.from({ length: 10 }, (_, index) => (
        <ReviewCard key={index} />
      ))}
    </div>
    // </div>
  );
};

export default ProgressReview;
