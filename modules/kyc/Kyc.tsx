'use client';
import React from 'react';
import { NextPage } from 'next';
import Button from '@/components/UI/Button';
import Logo from '@/components/Logo';
import { useState } from 'react';
import KycStepOne from '@/modules/kyc/StepOne';
import KycStepTwo from '@/modules/kyc/StepTwo';
import KycStepThree from '@/modules/kyc/StepThree';
import { ArrowLeft } from 'iconsax-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

const Kyc: NextPage<userType> = ({ userType }) => {
  const router = useRouter();
  const searchParms = useSearchParams();
  const [isStepOneComplete, setIsStepOneComplete] = useState(false);
  const [isStepTwoComplete, setIsStepTwoComplete] = useState(false);
  const step = searchParms.get('step') ? Number(searchParms.get('step')) : 1;

  const isNextButtonDisabled = () => {
    switch (step) {
      case 1:
        return !isStepOneComplete;
      case 2:
        return !isStepTwoComplete;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (step === 3) return;

    router.push(`${ROUTES.KYC(userType)}?step=${step + 1}`);
  };

  const handlePrevious = () => {
    router.push(`${ROUTES.KYC(userType)}?step=${step - 1}`);
    setIsStepTwoComplete(false);
    setIsStepOneComplete(false);
  };

  return (
    <div className='m-16 relative flex flex-col justify-center items-center'>
      <div className='absolute top-0 left-0'>
        <Logo fill='#423366' />
      </div>

      <div className='flex flex-col items-start gap-8 mt-16'>
        <div className='flex flex-col items-start gap-8'>
          <p className='text-gray-900'>Step {step}/3</p>
          <div className={`flex flex-col ${step === 3 ? 'items-center' : 'items-start'} gap-2`}>
            <h3 className='text-gray-900 text-Display-md font-bold'>KYC Verification</h3>
            <p className={`text-gray-500 w-[532px] ${step === 3 && 'text-center'}`}>
              {step < 3
                ? 'We need to verify your identity to give you a full and uninterrupted experience and also ensure the safety of all wokhivers'
                : 'Your details are being verified and a verification notification would be sent to you upon completion'}
            </p>
          </div>
        </div>

        <div className={`${step === 3 && 'w-full'}`}>
          {step === 1 && <KycStepOne onComplete={setIsStepOneComplete} />}
          {step === 2 && <KycStepTwo onComplete={setIsStepTwoComplete} />}
          {step === 3 && <KycStepThree userType={userType} />}
        </div>
      </div>
      {step < 3 && (
        <div className={`inline-flex mt-20 ${step > 1 ? 'justify-between' : 'justify-end'} gap-8 w-full`}>
          {step > 1 && (
            <Button
              disabled={step < 2}
              hierarchy='tertiary'
              leftIcon={<ArrowLeft />}
              size='2xl'
              onClick={handlePrevious}
            >
              Go back
            </Button>
          )}
          <div className='inline-flex items-start gap-8'>
            <Button disabled={step !== 3 ? isNextButtonDisabled() : false} hierarchy='secondary'>
              Save and exit
            </Button>
            <Button disabled={step !== 3 ? isNextButtonDisabled() : false} onClick={handleNext}>
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kyc;
