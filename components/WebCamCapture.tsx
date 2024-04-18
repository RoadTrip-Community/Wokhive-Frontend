'use client';
import Button from '@/components/UI/Button';
import { NextPage } from 'next';
import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const WebcamCapture: NextPage<{ setImage: any; image: any }> = ({ setImage, image }) => {
  const webcamRef = useRef<Webcam>(null);

  const capture = React.useCallback(() => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();
    if (image) URL.revokeObjectURL(image);
    setImage(imageSrc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcamRef]);

  return (
    <>
      <div className='inline-flex flex-col items-start gap-8'>
        <div className='flex min-h-[395px] w-[539px] py-5 px-4 justify-center items-center gap-2.5 flex-[1_0_0] rounded border border-dashed border-gray-500'>
          <Webcam
            ref={webcamRef}
            audio={false}
            className='w-full h-full object-cover rounded-sm overflow-hidden'
            screenshotFormat='image/jpeg'
          />
        </div>
        <div className='flex gap-4'>
          <Button hierarchy='secondary' className='w-[230px]' onClick={() => setImage(null)}>
            Retake picture
          </Button>
          <svg
            fill='none'
            height='48'
            viewBox='0 0 48 48'
            width='48'
            xmlns='http://www.w3.org/2000/svg'
            onClick={capture}
          >
            <circle cx='23.9969' cy='23.9998' fill='#423366' r='19.2' />
            <circle cx='24' cy='24' r='23.5' stroke='#667085' />
          </svg>
          <Button hierarchy='primary' className='w-[230px]' onClick={() => {}}>
            Use picture
          </Button>
        </div>
      </div>
    </>
  );
};

export default WebcamCapture;
