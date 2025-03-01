import { NextPage } from 'next';
import React, { useEffect } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: NextPage<ModalProps> = ({ open, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className='h-screen w-screen flex justify-center items-center bg-gray-950/10 fixed top-0 left-0 z-50'
      onClick={onClose}
    >
      <div
        className='inline-flex min-h-[254px] py-12 px-7 items-center rounded-xl bg-white'
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
