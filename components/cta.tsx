'use client';
import { NextPage } from 'next';
import React from 'react';
import Button from './UI/Button';
import Image from 'next/image';
import orangeFlower from '@/public/assets/svgs/cta_orange_flower.svg';
import blueFlower from '@/public/assets/svgs/cta_blue_flower.svg';
import { Input } from './UI/Input';
import { useWaitlist } from '@/hooks/mailing';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
});

const CTA: NextPage = () => {
  const waitlist = useWaitlist();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: { email: string }) => {
    waitlist.mutate(data.email);
  };

  return (
    <div className='p-6 lg:px-20 lg:py-32'>
      <div className='flex py-6 px-4 lg:p-14 flex-col gap-10 rounded-t-2xl bg-gray-100 relative overflow-hidden'>
        <Image
          src={blueFlower}
          alt='blue flower'
          width={91}
          height={89}
          className='absolute left-2 lg:left-8 top-20 lg:top-32'
        />
        <Image
          src={orangeFlower}
          alt='orange flower'
          width={91}
          height={89}
          className='absolute top-28 lg:top-6 -right-10 lg:right-24 lg:left-0 lg:mx-auto transform -rotate-[30deg]'
        />
        <Image
          src={blueFlower}
          alt='blue flower'
          width={91}
          height={89}
          className='absolute right-2 lg:right-[446px] bottom-36 lg:bottom-0 lg:top-0 lg:my-auto'
        />
        <Image
          src={blueFlower}
          alt='blue flower'
          width={203}
          height={200}
          className='hidden lg:flex absolute right-14 top-[132px]'
        />

        <div className='h-[227px] w-full rounded-t-2xl' />

        <div className='flex max-w-[1168px] w-full justify-between gap-10 flex-col lg:flex-row lg:items-end relative z-10'>
          <div className='flex flex-col gap-2 lg:min-w-[548px] xl:min-w-[648px] flex-1 w-full'>
            <h4 className='text-primary-purple-60 text-Display-xs lg:text-Display-extra font-bold lg:max-w-[484px]'>
              Join our waitlist and be notified when we go live.
            </h4>
            <p className='self-stretch text-gray-900 text-Text-lg lg:text-Text-xl'>
              {"We're"} not just a platform - {"we're"} your co-pilot on the freelance journey. With Wokhive, {"you'll"}{' '}
              have the tools and support you need to confidently navigate your freelance career.
            </p>
          </div>
          <form className='w-full flex flex-col gap-4 min-w-[200px]' onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder='Enter your email address'
              className='h-[64px]'
              name='email'
              register={register}
              destructive={!!errors.email}
            />
            <Button
              size='lg'
              disabled={waitlist.isPending || waitlist.isPaused}
              isLoading={waitlist.isPending || waitlist.isPaused}
              className='min-w-[150px]'
            >
              Join the Waitlist
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CTA;
