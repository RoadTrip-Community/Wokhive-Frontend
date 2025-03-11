'use client';
import { useState } from 'react';
import Button from '@/components/UI/Button';
import Image from 'next/image';
import ViewModal from '@/components/client/viewModal';

interface Contract {
  id: string;
  image: string;
  title: string;
  size: string;
}

interface UploadContractProps {
  contracts: Contract[];
}

const EngineeringContract = ({ contracts }: UploadContractProps) => {
  const [viewModal, setViewModal] = useState(false);

  return (
    <div className='mt-5'>
      {contracts.length > 0 ? (
        <div className='flex gap-5 flex-wrap '>
          {contracts.map((items, index) => (
            <div
              key={index}
              className='flex flex-col gap-2 cursor-pointer hover:scale-90'
              onClick={() => setViewModal(true)}
            >
              <Image src={items.image} alt={items.title} width={240} height={190} />
              <h5 className='text-gray-900 font-semibold font-romela'>{items.title}</h5>
              <p className='text-gray-700 font-romela'>{items.size}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center my-72 gap-4'>
          <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'>
            <path
              d='M40 21V13.6C40 10.2397 40 8.55953 39.346 7.27606C38.7708 6.14708 37.8529 5.2292 36.7239 4.65396C35.4405 4 33.7603 4 30.4 4H17.6C14.2397 4 12.5595 4 11.2761 4.65396C10.1471 5.2292 9.2292 6.14708 8.65396 7.27606C8 8.55953 8 10.2397 8 13.6V34.4C8 37.7603 8 39.4405 8.65396 40.7239C9.2292 41.8529 10.1471 42.7708 11.2761 43.346C12.5595 44 14.2397 44 17.6 44H24M28 22H16M20 30H16M32 14H16M36 42V30M30 36H42'
              stroke='#423366'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          <h1 className='text-gray-900 text-Text-lg font-semibold'>
            You don’t have any contracts here yet. Try uploading one now
          </h1>

          <Button hierarchy='primary' className='w-52'>
            Upload a contract
          </Button>
        </div>
      )}

      {viewModal && <ViewModal setShowModal={setViewModal} />}
    </div>
  );
};

export default EngineeringContract;
