'use client';
import { useState } from 'react';
import { NextPage } from 'next';
import avatar from '@/public/assets/svgs/freelancerVerified.svg';
import toggleButton from '@/public/assets/svgs/icons/toggle-button.svg';
import Image from 'next/image';
import Button from '@/components/UI/Button';
import { Input, Select, TextArea } from '@/components/UI/Input';

const SettingsProfile: NextPage = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='flex flex-col gap-20'>
      <div className='flex items-center gap-8'>
        <div className='w-20 h-20 shrink-0 rounded-full overflow-hidden'>
          <Image src={avatar} height={80} width={80} alt='avatar' />
        </div>
        <div className='flex gap-2'>
          <Button hierarchy='secondary' size='sm'>
            Change picture
          </Button>
          <Button hierarchy='tertiary' size='sm' destructive>
            Delete
          </Button>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <p className='text-gray-900 text-Text-xl font-semibold'>Personal Information</p>
        <div className='flex flex-col gap-10'>
          {/* First Name */}
          <div className='flex w-full max-w-[690px] justify-between items-center gap-8'>
            <label className='text-gray-600 shrink-0 flex'>First Name</label>
            <div className='max-w-[381px] w-full'>
              <Input placeholder='Enter First Name' size='md' />
            </div>
          </div>
          {/* Last Name */}
          <div className='flex w-full max-w-[690px] justify-between items-center gap-8'>
            <label className='text-gray-600 shrink-0 flex'>Last Name</label>
            <div className='max-w-[381px] w-full'>
              <Input placeholder='Enter Last Name' size='md' />
            </div>
          </div>
          {/* Home Address */}
          <div className='flex w-full max-w-[690px] justify-between items-center gap-8'>
            <label className='text-gray-600 shrink-0 flex'>Home Address</label>
            <div className='max-w-[381px] w-full'>
              <Input placeholder='Enter Address' size='md' />
            </div>
          </div>
          {/* Bio */}
          <div className='flex w-full max-w-[690px] justify-between items-center gap-8'>
            <label className='text-gray-600 shrink-0 flex'>Bio</label>
            <div className='max-w-[381px] w-full'>
              <TextArea placeholder='Enter Bio here' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <p className='text-gray-900 text-Text-xl font-semibold'>Career Information</p>
        <div className='flex flex-col gap-10'>
          {/* Occupation */}
          <div className='flex w-full max-w-[690px] justify-between items-center gap-8'>
            <label className='text-gray-600 shrink-0 flex'>Occupation</label>
            <div className='max-w-[381px] w-full'>
              <Input placeholder='Enter Occupation' size='md' />
            </div>
          </div>
          {/* Company */}
          <div className='flex w-full max-w-[690px] justify-between items-center gap-8'>
            <label className='text-gray-600 shrink-0 flex'>Company</label>
            <div className='max-w-[381px] w-full'>
              <Input placeholder='Enter Company' size='md' />
            </div>
          </div>
          {/* Office Address */}
          <div className='flex w-full max-w-[690px] justify-between items-center gap-8'>
            <label className='text-gray-600 shrink-0 flex'>Office Address</label>
            <div className='max-w-[381px] w-full'>
              <Input placeholder='Enter Address' size='md' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <p className='text-gray-900 text-Text-xl font-semibold'>Bank Information</p>
        <div className='flex flex-col gap-10'>
          {/* Bank Name */}
          <div className='flex w-full max-w-[690px] justify-between items-center gap-8'>
            <label className='text-gray-600 shrink-0 flex'>Bank Name</label>
            <div className='max-w-[381px] w-full'>
              <Input placeholder='Enter Bank Name' size='md' />
            </div>
          </div>
          {/* Account Number */}
          <div className='flex w-full max-w-[690px] justify-between items-center gap-8'>
            <label className='text-gray-600 shrink-0 flex'>Account Number</label>
            <div className='max-w-[381px] w-full'>
              <Input placeholder='Enter Account Number' size='md' />
            </div>
          </div>
          {/* Account Name */}
          <div className='flex w-full max-w-[690px] justify-between items-center gap-8'>
            <label className='text-gray-600 shrink-0 flex'>Account Name</label>
            <div className='max-w-[381px] w-full'>
              <Input placeholder='Enter Account Name' size='md' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-6 max-w-[690px]'>
        <p className='text-gray-900 text-Text-xl font-semibold'>Account Settings</p>

        <div className='flex justify-between items-center gap-5'>
          <div className='flex flex-col gap-2'>
            <p className='text-gray-600 font-semibold'>Profile visibility</p>
            <p className='max-w-[290px] text-gray-400 text-Text-xs'>
              Control when you hide and your show your profile to potential clients
            </p>
          </div>

          <div
            className={`flex w-11 h-6 p-0.5 items-center shrink-0 rounded-xl transition-all duration-300 ${
              toggle ? 'bg-primary-purple-50 justify-end' : 'bg-primary-milk-50'
            }`}
          >
            <Image
              src={toggleButton}
              alt='toggle'
              onClick={() => setToggle(!toggle)}
              className='cursor-pointer h-full'
            />
          </div>
        </div>

        <div className='flex justify-between items-center gap-5'>
          <div className='flex flex-col gap-2'>
            <p className='text-gray-600 font-semibold'>Profile visibility</p>
            <p className='max-w-[290px] text-gray-400 text-Text-xs'>
              Control when you hide and your show your profile to potential clients
            </p>
          </div>

          <div className='max-w-[320px] w-full'>
            <Select
              size='md'
              options={[
                { label: 'Public', value: 'public' },
                { label: 'Private', value: 'private' },
              ]}
            />
          </div>
        </div>

        <div className='flex justify-between items-center gap-5'>
          <div className='flex flex-col gap-2'>
            <p className='text-gray-600 font-semibold'>Profile visibility</p>
            <p className='max-w-[290px] text-gray-400 text-Text-xs'>
              Control when you hide and your show your profile to potential clients
            </p>
          </div>

          <div className='max-w-[320px] w-full'>
            <Select
              size='md'
              options={[
                { label: 'Public', value: 'public' },
                { label: 'Private', value: 'private' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
