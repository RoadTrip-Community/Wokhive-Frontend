'use client';

import { useState } from 'react';

interface UploadModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UploadModal = ({ setShowModal }: UploadModalProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      validateFile(event.target.files[0]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files.length) {
      validateFile(event.dataTransfer.files[0]);
    }
  };

  const validateFile = (selectedFile: File) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (!allowedTypes.includes(selectedFile.type)) {
      setError('Invalid file type. Please upload a PDF, DOC, or DOCX file.');
      setFile(null);
      return;
    }

    if (selectedFile.size > maxSize) {
      setError('File size exceeds 2MB limit.');
      setFile(null);
      return;
    }

    setError(null);
    setFile(selectedFile);
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-3xl p-10 w-[30%] h-[50%]'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-gray-900 text-2xl font-semibold'>Upload a contract</h1>
            <p className='text-gray-600 text-sm'>Upload a custom contract document to Wokhive</p>
          </div>
          <div className='bg-secondary-purple-10 rounded-lg p-3 cursor-pointer' onClick={() => setShowModal(false)}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M18 6L6 18M6 6L18 18'
                stroke='#EB5757'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>

        <div
          className='bg-secondary-purple-10 flex justify-center items-center mt-5 border-2 border-gray-300 h-[80%] cursor-pointer'
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleDrop}
        >
          <div className='flex justify-center items-center flex-col gap-5'>
            <input type='file' accept='.pdf,.doc,.docx' className='hidden' id='fileInput' onChange={handleFileUpload} />
            <label htmlFor='fileInput' className='cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='38' height='45' viewBox='0 0 38 45' fill='none'>
                <path
                  d='M34 19.5V12.1C34 8.73969 34 7.05953 33.346 5.77606C32.7708 4.64708 31.8529 3.7292 30.7239 3.15396C29.4405 2.5 27.7603 2.5 24.4 2.5H11.6C8.23969 2.5 6.55953 2.5 5.27606 3.15396C4.14708 3.7292 3.2292 4.64708 2.65396 5.77606C2 7.05953 2 8.73969 2 12.1V32.9C2 36.2603 2 37.9405 2.65396 39.2239C3.2292 40.3529 4.14708 41.2708 5.27606 41.846C6.55953 42.5 8.23969 42.5 11.6 42.5H18M22 20.5H10M14 28.5H10M26 12.5H10M30 40.5V28.5M24 34.5H36'
                  stroke='#423366'
                  strokeWidth='3.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </label>
            <p className='text-gray-700 text-center font-romela font-normal'>
              <span className='font-semibold'>Click to Upload</span> or drag and drop a file <br />
              PDF, DOC and DOCX Formats only (2MB max size)
            </p>
            {file && <p className='text-green-600 text-sm'>{file.name} uploaded successfully!</p>}
            {error && <p className='text-red-600 text-sm'>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
