'use client';
import { useState } from 'react';
import Image from 'next/image';
import ViewModal from '@/components/client/viewModal';

interface Invoice {
  id: string;
  image: string;
  title: string;
  name: string;
  profile: string;
}

interface ApprovedInvoiceProps {
  invoices: Invoice[];
}

const PendingInvoice = ({ invoices }: ApprovedInvoiceProps) => {
  const [viewModal, setViewModal] = useState(false);
  return (
    <div>
      {invoices.length > 0 ? (
        <div className='flex gap-5 flex-wrap'>
          {invoices.map((items, index) => (
            <div key={index}>
              <Image src={items.image} alt={items.title} width={300} height={300} className='rounded-3xl' />

              <div className='mt-5'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>{items.title}</h2>
                  <div className='cursor-pointer' onClick={() => setViewModal(true)}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                      <path
                        d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
                        stroke='#423366'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z'
                        stroke='#423366'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z'
                        stroke='#423366'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
                <div className='flex gap-3 text-gray-400  text-Text-sm font-normal font-whyte'>
                  {items.name}- {items.profile}
                </div>
              </div>
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

          <h1 className='text-gray-900 text-Text-lg font-semibold'>No pending invoices</h1>

          <p className='text-center text-gray-900 opacity-70'>
            Keep up the good work! Your invoices have been processed and no pending tasks remain.
          </p>
        </div>
      )}

      {viewModal && <ViewModal setShowModal={setViewModal} />}
    </div>
  );
};

export default PendingInvoice;
