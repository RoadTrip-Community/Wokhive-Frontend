/* eslint-disable camelcase */
'use client';
import React from 'react';
import Logo from '@/components/Logo';
import Button from '@/components/UI/Button';
import OnboardingStartScreen from '@/modules/freelancer/onboard/OnboardingStartScreen';
import StepFour from '@/modules/freelancer/onboard/StepFour';
import StepOne from '@/modules/freelancer/onboard/StepOne';
import StepThree from '@/modules/freelancer/onboard/StepThree';
import StepTwo from '@/modules/freelancer/onboard/StepTwo';
import { ArrowLeft } from 'iconsax-react';
import { NextPage } from 'next';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { useUpdateFreelancerProfile } from '@/hooks/updateFreelancerProfile';
import { useFreelancerOnboarding } from '@/context/FreelancerOnboardingContext';

const FreelancerOnboard: NextPage = () => {
  const router = useRouter();
  const searchParms = useSearchParams();
  const { loading, updateCareerLevel, updateLanguages, updateServices } = useUpdateFreelancerProfile();
  const { spokenLanguages, experienceLevel, servicesOffered } = useFreelancerOnboarding();
  const [isStepOneComplete, setIsStepOneComplete] = useState(false);
  const [isStepTwoComplete, setIsStepTwoComplete] = useState(false);
  const [isStepThreeComplete, setIsStepThreeComplete] = useState(false);
  const step = searchParms.get('step') ? Number(searchParms.get('step')) : 0;

  console.log('spokenLanguages', spokenLanguages);

  const isNextButtonDisabled = () => {
    switch (step) {
      case 1:
        return !isStepOneComplete;
      case 2:
        return !isStepTwoComplete;
      case 3:
        return !isStepThreeComplete;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (step === 1) {
      try {
        updateCareerLevel(experienceLevel);
      } catch (error) {
        throw error;
      }
    }

    if (step === 2) {
      try {
        updateServices(servicesOffered);
      } catch (error) {
        throw error;
      }
    }

    if (step === 3) {
      try {
        updateLanguages({ spokenLanguages });
      } catch (error) {
        throw error;
      }
    }

    if (step === 4) {
      router.push(ROUTES.FREELANCERKYC);
      return;
    }

    router.push(`${ROUTES.ONBOARDFREELANCER}?step=${Number(step) + 1}`);
  };

  const handlePrevious = () => {
    if (step === 1) {
      router.push(ROUTES.ONBOARDFREELANCER);
      return;
    }
    router.push(`${ROUTES.ONBOARDFREELANCER}?step=${Number(step) - 1}`);
  };

  if (!step) {
    return <OnboardingStartScreen onStart={() => router.push(`${ROUTES.ONBOARDFREELANCER}?step=1`)} />;
  }

  const handleSkip = () => {
    router.push(ROUTES.FREELANCERKYC);
    return;
  };

  return (
    <>
      <div className='my-8 max-w-[1440px] mx-auto max-h-screen overflow-hidden flex flex-col justify-start px-4'>
        <div className='basis-[220px]'>
          <Logo fill='#423366' />
          <div className='flex w-full justify-between items-center mt-14'>
            <div className='inline-flex flex-col items-start gap-4'>
              <p className='text-gray-900 text-Text-xl font-semibold'>Step {step} of 4</p>
              <div className='flex gap-4 items-start'>
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className={`border-none w-[80px] h-[10px] ${
                      index + 1 <= step ? 'bg-primary-purple-60' : 'bg-[#D9D9D9]'
                    } rounded`}
                  />
                ))}
              </div>
            </div>
            <Button disabled={step === 4} hierarchy='tertiary' size='2xl' onClick={handleSkip}>
              Skip for now
            </Button>
          </div>
        </div>

        {step === 1 && <StepOne onComplete={setIsStepOneComplete} />}
        {step === 2 && <StepTwo onComplete={setIsStepTwoComplete} />}
        {step === 3 && <StepThree onComplete={setIsStepThreeComplete} />}
        {step === 4 && <StepFour />}

        <div
          className={`mt-4 flex space-x-4 w-full ${
            step > 1 ? 'justify-between' : 'justify-end'
          } basis-[150px] items-end`}
        >
          {step > 1 && (
            <Button
              disabled={step === 1}
              hierarchy='tertiary'
              leftIcon={<ArrowLeft />}
              size='2xl'
              onClick={handlePrevious}
            >
              Go back
            </Button>
          )}

          <Button
            disabled={loading || step !== 4 ? isNextButtonDisabled() : false}
            isLoading={loading}
            hierarchy='primary'
            size='2xl'
            className='w-[193px]'
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default FreelancerOnboard;
