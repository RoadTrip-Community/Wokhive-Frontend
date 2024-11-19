import React from 'react';
import { Input } from '@/components/UI/Input';
import { NextPage } from 'next';
import { useClientOnboarding } from '@/context/ClientOnboardingContext';

const StepTwo: NextPage<StepsProps> = ({ onComplete }) => {
  const { careerInfo, setCareerInfo } = useClientOnboarding();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedCareerInfo = { ...careerInfo, [e.target.name]: e.target.value };
    setCareerInfo(updatedCareerInfo);
    onComplete(updatedCareerInfo.occupation.length > 0 && updatedCareerInfo.address.length > 0);
  };

  return (
    <div className='flex flex-col items-start gap-10 w-full'>
      <Input
        label='Occupation'
        name='occupation'
        placeholder='Software Developer'
        value={careerInfo.occupation}
        className='w-full'
        onChange={handleChange}
      />
      <Input
        label='Home office or address'
        name='address'
        placeholder='Sambisa, Nigeria'
        value={careerInfo.address}
        className='w-full'
        onChange={handleChange}
      />
    </div>
  );
};

export default StepTwo;
