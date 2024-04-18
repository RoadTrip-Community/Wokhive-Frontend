import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import WebcamCapture from '@/components/WebCamCapture';
import Image from 'next/image';

const KycStepTwo: NextPage<StepsProps> = ({ onComplete }) => {
  const [image, setImage] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('upload');

  useEffect(() => {
    onComplete(image !== null);
  }, [image, onComplete]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (image) URL.revokeObjectURL(image);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className='flex flex-col items-start gap-8 self-stretch'>
      <p className='text-gray-900 text-Text-lg font-semibold'>Liveness check</p>
      <div className='flex flex-col items-start gap-4 self-stretch'>
        <div className='flex p-2.5 items-start gap-5 self-stretch rounded-lg bg-gray-25 shadow-[0px_4px_10px_0px_rgba(0,_0,_0,_0.08)_inset,_0px_-4px_10px_0px_rgba(0,_0,_0,_0.08)_inset]'>
          <button
            className={`flex h-8 py-2 px-4 justify-center items-center gap-2.5 flex-[1_0_0] rounded ${
              activeTab === 'upload' ? 'bg-primary-purple-60 text-gray-25' : 'text-primary-purple-40'
            }`}
            onClick={() => handleTabChange('upload')}
          >
            Upload picture
          </button>
          <button
            className={`flex h-8 py-2 px-4 justify-center items-center gap-2.5 flex-[1_0_0] rounded ${
              activeTab === 'live' ? 'bg-primary-purple-60 text-gray-25' : 'text-primary-purple-40'
            }`}
            onClick={() => handleTabChange('live')}
          >
            Live Camera
          </button>
        </div>

        {activeTab === 'upload' && (
          <div className='flex min-h-[395px] w-[539px] py-5 px-4 justify-center items-center gap-2.5 flex-[1_0_0] rounded border border-dashed border-gray-500'>
            <label className='cursor-pointer' htmlFor='image'>
              <p className='text-gray-500 text-Text-base font-semibold'>Click here to upload a picture</p>
            </label>
            <input className='hidden' id='image' name='image' type='file' onChange={handleImageUpload} />
          </div>
        )}

        {activeTab === 'live' && (
          <div>
            <WebcamCapture image={image} setImage={setImage} />
          </div>
        )}

        {image && <Image alt='Uploaded' className='hidden' height={295} src={image} width={539} />}
      </div>
    </div>
  );
};

export default KycStepTwo;
