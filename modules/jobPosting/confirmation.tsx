import { NextPage } from 'next';
import Image from 'next/image';
import completedImg from '@/public/assets/svgs/congratulations.svg';

const Confirmation: NextPage = () => {
  return (
    <div className='flex flex-col gap-12 max-w-[600px] w-full items-center'>
      <Image src={completedImg} alt='completed img' />

      <div className='flex flex-col gap-10 items-center'>
        <h3 className='font-medium text-gray-900 text-Display-md'>Congratulations</h3>
        <div className='flex gap-4 items-center flex-col'>
          <p className='font-semibold text-Text-lg text-center'>
            You have successfully sent out a proposal for this project
          </p>
          <p className='text-Text-lg text-center text-gray-500'>The client would be notified on your sent proposal.</p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
