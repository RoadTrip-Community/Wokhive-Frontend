import { NextPage } from 'next';
import React from 'react';
import bgOverlay from '@/public/assets/svgs/signup_bg.svg';
import signInImg from '@/public/assets/images/freelancer_signup_img.png';
import Image from 'next/image';
import Logo from '@/components/Logo';
import { Input } from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import { ROUTES } from '@/constants/routes';

const ResetPassword: NextPage = () => {
  return (
    <div className='bg-primary-purple-60'>
      <div className='max-w-[1440px] mx-auto relative min-h-screen flex justify-center items-center px-5'>
        <div className='w-[774px] min-h-[660px] rounded-[20px] bg-white shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] relative z-10 flex flex-col justify-center items-center p-10'>
          <div className='w-full max-w-[433px]'>
            <Logo fill='#423366' />
          </div>

          <div className='flex flex-col gap-6 justify-center items-center mt-[80px]'>
            <h3 className='text-gray-900 text-Display-xs font-medium text-center'>Reset Your Password</h3>

            <div className='w-full mb-5'>
              <Input label='New Password' className='mb-6' placeholder='********' type='password' />
              <Input label='Confirm New Password' placeholder='********' type='password' />
            </div>

            <Button hierarchy='primary' size='xl' className='w-full justify-center' href={ROUTES.RESETSUCCESS}>
              Reset password
            </Button>

            <Button hierarchy='link'>Need help? contact our support team is available</Button>
          </div>
        </div>
        <Image alt='bg overlay' className='absolute top-0 right-0 blur-[5px]' src={bgOverlay} />
        <Image alt='bg img' className='absolute bottom-0 right-0 blur-[5px]' height={799} src={signInImg} width={629} />
      </div>
    </div>
  );
};

export default ResetPassword;
