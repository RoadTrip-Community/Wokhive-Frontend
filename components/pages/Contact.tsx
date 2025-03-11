import React from 'react';
import { NextPage } from 'next';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Image from 'next/image';
import mail from '@/public/assets/svgs/icons/mail.svg';
import phone from '@/public/assets/svgs/icons/phone.svg';
import location from '@/public/assets/svgs/icons/location.svg';
import clock from '@/public/assets/svgs/icons/clock.svg';
import orangeFlower from '@/public/assets/svgs/cta_orange_flower.svg';
import whiteFlower from '@/public/assets/svgs/white_flower.svg';
import Link from 'next/link';
import { Input, TextArea } from '../UI/Input';
import Button from '../UI/Button';

const Contact: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className='flex flex-col lg:items-center gap-6 lg:gap-[90px] items-start px-4 mt-12 mb-[100px] max-w-[1440px] mx-auto'>
        <section className='flex gap-3 flex-col lg:items-center'>
          <h2 className=' text-gray-900 text-Display-sm font-medium'>Contact Us</h2>
          <p className=' text-gray-500 text-md '>Any question or remarks? Just write us a message!</p>
        </section>

        <section className='w-full flex flex-col gap-16 lg:gap-28 lg:flex-row'>
          <div className='flex flex-col self-stretch rounded-l-lg bg-primary-purple-50 h-[460px] lg:h-auto lg:order-2 w-full relative overflow-hidden'>
            <div className='flex flex-col gap-5 px-10 pt-10 pb-5 lg:pb-10'>
              <h4 className='text-gray-25 text-Display-xs lg:text-Display-sm font-medium'>Closer Than a Click Away</h4>
              <div className='flex flex-col gap-6'>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center justify-center w-10 h-10 p-2 rounded-xl border border-gray-25'>
                    <Image src={mail} alt='mail' />
                  </div>
                  <Link href='mailto:wokhive@gmail.com' className='text-gray-25 text-lg'>
                    wokhive@gmail.com
                  </Link>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='flex items-center justify-center w-10 h-10 p-2 rounded-xl border border-gray-25'>
                    <Image src={phone} alt='phone' />
                  </div>
                  <Link href='tel:+123 456 789 10' className='text-gray-25 text-lg'>
                    +123 456 789 10
                  </Link>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='flex items-center justify-center w-10 h-10 p-2 rounded-xl border border-gray-25'>
                    <Image src={location} alt='location' />
                  </div>
                  <p className='text-gray-25 text-lg'>Lagos, Nigeria</p>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='flex items-center justify-center w-10 h-10 p-2 rounded-xl border border-gray-25'>
                    <Image src={clock} alt='clock' />
                  </div>
                  <p className='text-gray-25 text-lg'>08:00 - 17:00 GMT +1</p>
                </div>
              </div>
            </div>

            <div className='bg-primary-milk-50 h-[1px] w-full' />

            <Image
              alt='flower'
              className='absolute -right-4 top-[265px] lg:right-16 lg:top-[160px] w-[57px] h-[55px] lg:w-auto lg:h-auto'
              src={orangeFlower}
            />
            <Image
              alt='flower'
              className='absolute -right-8 -bottom-8 lg:-right-[52px] lg:-bottom-[22px] w-[110px] h-[108px] lg:w-auto lg:h-auto'
              src={whiteFlower}
            />
          </div>

          <div className='flex flex-col items-start gap-10 self-stretch lg:order-1 lg:max-w-[400px]'>
            <p className='text-gray-500 text-md self-stretch'>
              Feel free to contact us any time. We will get back to you as soon as we can.
            </p>

            <div className='flex flex-col gap-6 w-full'>
              <Input label='Name' placeholder='Enter your name' name='name' />
              <Input label='Email' placeholder='Enter your email' name='email' />
              <TextArea label='Message' placeholder='Enter your message' name='message' size='sm' />
            </div>

            <Button className='w-full'>Submit</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
