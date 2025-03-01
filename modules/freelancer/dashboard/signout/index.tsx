import { NextPage } from 'next';
import Modal from '@/components/UI/modal';
import Button from '@/components/UI/Button';

const Signout: NextPage<{ isModalOpen: boolean; setIsModalOpen: (value: boolean) => void }> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className='flex flex-col gap-10'>
        <div className='inline-flex gap-3 flex-col'>
          <p className='text-gray-900 text-Text-xl font-semibold'>Account Signout</p>
          <p className='max-w-[442px] text-gray-600 text-Text-sm'>
            Are you sure you want to sign out from your account? This action will sign you out and take you to the home
            page.
          </p>
        </div>

        <div className='flex items-center gap-6'>
          <Button>Signout</Button>
          <Button hierarchy='secondary' onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Signout;
