import React from 'react';
import { NextPage } from 'next';
import { Input } from '@/components/UI/Input';
import { useState } from 'react';

const KycStepOne: NextPage<StepsProps> = ({ onComplete }) => {
  const [nin, setNin] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedNin = e.target.value;
    setNin(updatedNin);
    const isElevenDigits = /^\d{11}$/.test(updatedNin);
    onComplete(isElevenDigits);
  };

  return (
    <div className='flex flex-col items-start gap-10'>
      <Input label='NIN' placeholder='Enter your NIN' value={nin} className='w-full' onChange={handleChange} />

      <div className='flex w-[533px] py-5 px-4 items-start gap-2.5 rounded bg-secondary-lemon-10'>
        <p className='text-Text-sm font-medium flex-[1_0_0] text-primary-purple-40'>
          Your NIN would be used to
          <span className='font-semibold text-primary-purple-50'> ONLY </span>
          verify your full name date of birth and identity (picture).
        </p>
      </div>
    </div>
  );
};

export default KycStepOne;
