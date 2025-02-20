'use client';
import { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // or 'next/router' depending on your Next.js version
import Steps from './stepNav';
import ProjectDetails from './projectDetails';
import ProjectProposal from './projectProposal';
import ProposalReview from './projectReview';
import Confirmation from './confirmation';
import Button from '@/components/UI/Button';

const NewProject: NextPage = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (step === 4) {
      // When on the last step, navigate to the homepage
      router.push('/client/job-postings');
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className='flex flex-col h-full w-full items-center'>
      <Steps step={step} />
      <div className='flex-grow mb-[75px] overflow-x-hidden overflow-y-scroll p-12 bg-white w-full flex justify-center'>
        {step === 1 && <ProjectDetails />}
        {step === 2 && <ProjectProposal />}
        {step === 3 && <ProposalReview />}
        {step === 4 && <Confirmation />}
      </div>

      <div className='fixed bottom-0 left-[280px] flex justify-center gap-5 h-[100px] items-center bg-primary-purple-10 w-[calc(100%-300px)] mx-auto'>
        <Button
          size='xl'
          onClick={handleBack}
          className='w-52'
          disabled={step === 1} // Disables the button on the first step
        >
          Back
        </Button>
        <Button size='xl' className='w-52' onClick={handleNext}>
          {step === 4 ? 'Confirm' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default NewProject;
