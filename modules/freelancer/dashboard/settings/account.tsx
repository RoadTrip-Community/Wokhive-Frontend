import Button from '@/components/UI/Button';
import { NextPage } from 'next';

const Account: NextPage = () => {
  return (
    <div>
      <div className='flex flex-col gap-2'>
        <p className='text-gray-900 font-semibold'>Email Address</p>
        <div className='flex items-center gap-2'>
          <p className='text-Text-xs text-gray-600'>
            Your email address is <span className='font-bold'>demoaccount@gmail.com</span>
          </p>

          <button className='text-primary-purple-50 text-Text-xs font-semibold underline underline-offset-auto decoration-from-font'>
            Change
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-2 mt-10'>
        <p className='text-gray-900 font-semibold'>Phone Number</p>
        <div className='flex items-center gap-2'>
          <p className='text-Text-xs text-gray-600'>
            Your phone number is <span className='font-bold'>+234 123 456 7890</span>
          </p>

          <button className='text-primary-purple-50 text-Text-xs font-semibold underline underline-offset-auto decoration-from-font'>
            Change
          </button>
        </div>
      </div>

      <div className='bg-gray-500 w-full mt-2 mb-6 h-[0.5px]' />

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-900 font-semibold'>Disable Account</p>
          <p className='max-w-[442px] text-gray-600 text-Text-xs'>
            Are you sure you want to disable your account?. If you change your mind, you will need to contact our
            support team to reactivate your account.
          </p>
        </div>
        <Button className='w-max'>Disable Account</Button>
      </div>

      <div className='bg-gray-500 w-full mt-2 mb-6 h-[0.5px]' />

      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-900 font-semibold'>Delete Account</p>
          <p className='max-w-[442px] text-gray-600 text-Text-xs'>
            Are you sure you want to delete your account? This action is irreversible and will result in the permanent
            loss of all your data, settings, and access to our platform.
          </p>
        </div>
        <Button className='w-max' destructive>
          Delete Account
        </Button>
      </div>
    </div>
  );
};

export default Account;
