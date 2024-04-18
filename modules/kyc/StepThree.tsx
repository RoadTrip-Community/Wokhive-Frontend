import React from 'react';
import { NextPage } from 'next';
import freelancerImage from '@/public/assets/svgs/freelancerVerified.svg';
import clientImage from '@/public/assets/svgs/clientVerified.svg';
import Image from 'next/image';
import Button from '@/components/UI/Button';

const KycStepThree: NextPage<{
  type: 'CLIENT' | 'FREELANCER';
}> = ({ type }) => {
  return (
    <div className='flex flex-col gap-10 items-center w-full'>
      {type === 'CLIENT' && <Image alt='Kyc' height={120} src={clientImage} width={120} />}
      {type === 'FREELANCER' && <Image alt='Kyc' height={120} src={freelancerImage} width={120} />}

      <Button size='xl' className='w-full'>
        Close
      </Button>
    </div>
  );
};

export default KycStepThree;
