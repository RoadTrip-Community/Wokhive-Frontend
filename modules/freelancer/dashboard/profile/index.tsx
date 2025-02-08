import Button from '@/components/UI/Button';
import { NextPage } from 'next';
import avatar from '@/public/assets/svgs/freelancerVerified.svg';
import Image from 'next/image';

const Profile: NextPage = () => {
  return (
    <div className='flex pt-6 pb-20 flex-col w-full px-10 gap-14'>
      <div className='flex justify-between items-center gap-5'>
        <p className='text-gray-900 text-Display-extra font-bold'>Profile details</p>
        <Button
          leftIcon={
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
              <path
                d='M9.99998 16.6662H17.5M2.5 16.6662H3.89545C4.3031 16.6662 4.50693 16.6662 4.69874 16.6202C4.8688 16.5793 5.03138 16.512 5.1805 16.4206C5.34869 16.3175 5.49282 16.1734 5.78107 15.8852L16.25 5.4162C16.9404 4.72585 16.9404 3.60656 16.25 2.9162C15.5597 2.22585 14.4404 2.22585 13.75 2.9162L3.28105 13.3852C2.9928 13.6734 2.84867 13.8175 2.7456 13.9857C2.65422 14.1348 2.58688 14.2974 2.54605 14.4675C2.5 14.6593 2.5 14.8631 2.5 15.2708V16.6662Z'
                stroke='#FCFCFD'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          }
        >
          Edit profile
        </Button>
      </div>

      <div className='flex flex-col gap-8'>
        <div className='flex items-center gap-5'>
          <div className='w-[100px] h-[100px] shrink-0 rounded-full overflow-hidden'>
            <Image src={avatar} height={100} width={100} alt='avatar' />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-gray-700 text-Display-extra font-bold'>John Doe</p>
            <p className='text-gray-700 text-Text-sm'>UI/UX Design || Graphics design || Animator</p>
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='flex min-h-[303px] p-10 rounded-lg bg-secondary-purple-10' style={{ flex: 2 }}></div>
          <div className='flex min-h-[303px] p-10 rounded-lg bg-secondary-purple-10' style={{ flex: 1 }}></div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Profile;
