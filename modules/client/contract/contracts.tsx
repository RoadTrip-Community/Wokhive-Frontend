'use client';
import { NextPage } from 'next';
import { useState } from 'react';
import Button from '@/components/UI/Button';
import UploadContract from './upload';
import SavedContract from './saved';
import EngineeringContract from './engineering';
import AnalystContract from './analyst';
import WriterContract from './writer';

interface Contract {
  id: string;
  image: string;
  title: string;
  size: string;
}

const contracts: Contract[] = [
  {
    id: '1',
    image: '/assets/images/pdf-image.png',
    title: 'Non-Disclosure Agreement.pdf',
    size: '2.5MB',
  },
];

const Contracts: NextPage = () => {
  const [activeTab, setActiveTab] = useState('uploadcontract');
  return (
    <div className='flex flex-col gap-5 mb-5'>
      <div className='flex justify-between items-center px-10 py-6 bg-secondary-lemon-10 rounded-lg'>
        <p>
          Pre-made contracts template that have been proofread multiple times and set up to ensure safety <br />
          of all parties involved. Pick a contract below or upload a contract if you have specific needs
        </p>
        <Button hierarchy='secondary' className='min-w-[150px]'>
          Complete now
        </Button>
      </div>

      <div className='flex justify-between gap-10 border-b rounded-lg border-gray-200 mt-5 mb-5'>
        <button onClick={() => setActiveTab('uploadcontract')}>
          <p
            className={`border-b-4 ${
              activeTab === 'uploadcontract'
                ? 'border-primary-purple-60 text-primary-purple-60'
                : 'border-none text-gray-500 '
            } text-Text-xl font-semibold`}
          >
            Uploaded Contracts
          </p>
        </button>
        <button onClick={() => setActiveTab('savedcontract')}>
          <p
            className={`border-b-4 ${
              activeTab === 'savedcontract'
                ? 'border-primary-purple-60 text-primary-purple-60'
                : 'border-none text-gray-500 '
            } text-Text-xl font-semibold`}
          >
            Saved Contracts
          </p>
        </button>
        <button onClick={() => setActiveTab('engineeringcontract')}>
          <p
            className={`border-b-4 ${
              activeTab === 'engineeringcontract'
                ? 'border-primary-purple-60 text-primary-purple-60'
                : 'border-none text-gray-500 '
            } text-Text-xl font-semibold`}
          >
            Engineering Contracts
          </p>
        </button>
        <button onClick={() => setActiveTab('analystcontract')}>
          <p
            className={`border-b-4 ${
              activeTab === 'analystcontract'
                ? 'border-primary-purple-60 text-primary-purple-60'
                : 'border-none text-gray-500 '
            } text-Text-xl font-semibold`}
          >
            Analyst contracts
          </p>
        </button>
        <button onClick={() => setActiveTab('writercontract')}>
          <p
            className={`border-b-4 ${
              activeTab === 'writercontract'
                ? 'border-primary-purple-60 text-primary-purple-60'
                : 'border-none text-gray-500 '
            } text-Text-xl font-semibold`}
          >
            Writer contracts
          </p>
        </button>
      </div>

      {activeTab === 'uploadcontract' && <UploadContract contracts={contracts} />}
      {activeTab === 'savedcontract' && <SavedContract contracts={contracts} />}
      {activeTab === 'engineeringcontract' && <EngineeringContract contracts={contracts} />}
      {activeTab === 'analystcontract' && <AnalystContract contracts={contracts} />}
      {activeTab === 'writercontract' && <WriterContract contracts={contracts} />}
    </div>
  );
};

export default Contracts;
