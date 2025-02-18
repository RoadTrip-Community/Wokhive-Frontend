'use client';
import { NextPage } from 'next';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import ContractInfo from "./contractInfo";
import ProgressReview from './progress';
import ProjectTimeline from './timeline';

const Details: NextPage = () => {
  const { name } = useParams<{ name?: string }>();

  const [activeTab, setActiveTab] = useState('contract');

  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-gray-900 font-whyte text-3xl font-medium'>{name?.split('-').join(' ')}</h1>

      <p className='text-gray-700 font-romela text-xl font-normal'>
        You’re contracting for <span className='text-gray-900 font-semibold'>John Doe</span>
      </p>


      <div className='flex gap-10 border-b rounded-lg border-gray-200 mt-5 mb-5'>
        <button onClick={() => setActiveTab('contract')}>
          <p
            className={`border-b-4 ${
              activeTab === 'contract'
                ? 'border-primary-purple-60 text-primary-purple-60'
                : 'border-none text-gray-500 '
            } text-Text-xl font-semibold`}
          >
            Contract information
          </p>
        </button>
        <button onClick={() => setActiveTab('progress')}>
          <p
            className={`border-b-4 ${
              activeTab === 'progress'
                ? 'border-primary-purple-60 text-primary-purple-60'
                : 'border-none text-gray-500 '
            } text-Text-xl font-semibold`}
          >
            Progress review document
          </p>
        </button>
        <button onClick={() => setActiveTab('timeline')}>
          <p
            className={`border-b-4 ${
              activeTab === 'timeline' ? 'border-primary-purple-60 text-primary-purple-60' : 'border-none text-gray-500 '
            } text-Text-xl font-semibold`}
          >
            Project timeline
          </p>
        </button>
      </div>
        {activeTab === "contract" && <ContractInfo/>}
        {activeTab === "progress" && <ProgressReview/>}
        {activeTab === "timeline" && <ProjectTimeline/>}
    </div>
  );
};

export default Details;
