'use client';
import { NextPage } from 'next';
import { useState } from 'react';
import ContractInfo from './contractInfo';
import ProgressReview from './progressReview';
import ProjectTimeline from './projectTimeline';

const Projects: NextPage = () => {
  const [activeTab, setActiveTab] = useState('contract');

  return (
    <div className='flex pt-6 flex-col gap-10 px-10'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-gray-900 font-medium text-Display-sm'>Website Design Project</h3>
        <p className='text-gray-700 text-Text-xl'>
          You’re contracting for <span className='text-gray-900 font-semibold'>John Doe</span>
        </p>
      </div>

      <div className='flex gap-10 border-b rounded-lg border-gray-200'>
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
        <button onClick={() => setActiveTab('project')}>
          <p
            className={`border-b-4 ${
              activeTab === 'project' ? 'border-primary-purple-60 text-primary-purple-60' : 'border-none text-gray-500 '
            } text-Text-xl font-semibold`}
          >
            Project timeline
          </p>
        </button>
      </div>

      {activeTab === 'contract' && <ContractInfo />}
      {activeTab === 'progress' && <ProgressReview />}
      {activeTab === 'project' && <ProjectTimeline />}
    </div>
  );
};

export default Projects;
