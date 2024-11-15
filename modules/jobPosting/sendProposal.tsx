'use client';
import { NextPage } from 'next';
import ProposalTopNav from './topNav';
import { useState } from 'react';
import JobProposalDetails from './jobProposalDetails';
import Button from '@/components/UI/Button';
import Proposal from './proposal';
import ProposalReview from './review';
import Confirmation from './confirmation';

const SendProposal: NextPage = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div className='flex flex-col h-full w-full items-center'>
      <ProposalTopNav step={step} />
      <div className='flex-grow mt-[100px] mb-[75px] overflow-x-hidden overflow-y-scroll p-12 bg-white w-full flex justify-center'>
        {step === 1 && <JobProposalDetails />}
        {step === 2 && <Proposal />}
        {step === 3 && <ProposalReview />}
        {step === 4 && <Confirmation />}
      </div>
      <div className='fixed bottom-0 left-[280px] flex justify-center h-[100px] items-center bg-primary-purple-10 w-[calc(100%-300px)] mx-auto'>
        <Button size='xl' className='w-full max-w-[490px]' onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default SendProposal;
