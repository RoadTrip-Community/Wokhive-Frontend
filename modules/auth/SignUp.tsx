'use client';
import React from 'react';
import Button from '@/components/UI/Button';
import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

const SignUp: NextPage = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<'client' | 'freelancer' | null>(null);

  const handleOptionSelect = (option: 'client' | 'freelancer') => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  const handleSignUp = () => {
    if (selectedOption) router.push(ROUTES.USERSIGNUP(selectedOption));
  };

  return (
    <section className='flex justify-center items-center h-screen'>
      <div className='flex w-[1094px] py-10 px-52 items-center flex-col gap-14 rounded-2xl border border-gray-300 bg-white shadow-shadow-1'>
        <h3 className='text-[1B1B1B] text-Display-md font-bold text-center'>Join Wokhive as a client or freelancer</h3>
        <div className='flex flex-1 w-[644px] justify-between items-start gap-11'>
          <div
            className={`flex flex-1 py-5 px-[18px] justify-between items-center rounded-lg border h-[222px] transition-all duration-500 cursor-pointer hover:scale-95
            ${
              selectedOption === 'client'
                ? 'bg-primary-purple-50 border-[#D9D9D9] text-[#F9F9F9]'
                : 'border-primary-purple-60 text-[#585858]'
            }`}
            onClick={() => handleOptionSelect('client')}
          >
            <div className='flex flex-col items-center gap-5'>
              <svg
                fill={selectedOption === 'client' ? '#FFD1AB' : '#423366'}
                height='52'
                viewBox='0 0 52 52'
                width='52'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='contact'>
                  <g id='_icons'>
                    <path
                      d='M21.3201 34.3197H16.3584C15.8685 34.3197 15.3969 34.3914 14.9364 34.4939C14.8149 34.5212 14.6988 34.5544 14.5798 34.5882C14.1876 34.6993 13.8117 34.8408 13.4542 35.0189C13.4148 35.0388 13.3686 35.046 13.3296 35.0666C11.7829 28.1246 11.9194 20.8227 13.7326 13.9143C14.0299 12.7737 14.6699 11.7307 15.5544 10.9267C16.5107 10.0888 17.6628 9.53652 18.8943 9.32917L19.6476 9.19808C23.8635 8.48503 28.1386 8.4807 32.3673 9.20242C33.731 9.4245 34.9699 10.0615 35.9494 11.041C36.2954 11.3882 36.617 11.8154 36.8815 12.2767C37.4761 13.3178 38.8016 13.6816 39.8375 13.0829C40.8764 12.4884 41.2372 11.1659 40.6437 10.1269C40.1857 9.32505 39.6386 8.60355 39.0166 7.97933C37.3894 6.35217 35.3328 5.29635 33.0814 4.92823C28.3841 4.12418 23.6202 4.12418 18.9144 4.92823L18.1643 5.05715C16.15 5.39775 14.2604 6.29908 12.6695 7.69138C11.1311 9.09213 10.0489 10.8651 9.54014 12.8181C7.50672 20.5685 7.39666 28.7741 9.22272 36.5477L10.0079 39.898C9.99731 39.9747 9.98301 40.0428 9.97694 40.1279C9.94531 40.3396 9.94531 40.5194 9.94531 40.6464C9.94531 41.9603 10.3314 43.179 11.0646 44.1904C11.1989 44.4506 11.364 44.6729 11.5259 44.8272C12.5384 46.0121 13.9601 46.7568 15.4467 46.9091C16.8559 47.1102 18.2883 47.2666 19.6986 47.3789C19.7558 47.3832 19.8138 47.3852 19.871 47.3852C20.9903 47.3852 21.9393 46.5239 22.0292 45.3899C22.1235 44.1965 21.2326 43.1534 20.0392 43.0581C18.7199 42.9543 17.3785 42.8063 15.9756 42.6074C15.5682 42.5652 15.198 42.3938 14.832 42.0235C14.7707 41.9134 14.7009 41.8099 14.6214 41.7124C14.4151 41.4563 14.2988 41.1241 14.2808 40.7116C14.2893 40.646 14.2936 40.5784 14.2936 40.4958L14.3527 40.2312C14.5157 39.3321 15.3778 38.6528 16.3586 38.6528H21.3203C22.5167 38.6528 23.487 37.6837 23.487 36.4862C23.487 35.2887 22.5167 34.3197 21.3201 34.3197Z'
                      id='Vector'
                    />
                    <path
                      d='M47.5242 41.5626L47.3741 41.0041C46.6452 38.1475 44.5726 35.7544 41.8305 34.6057V34.6078C41.7373 34.5634 41.6495 34.5253 41.5904 34.5021C37.8167 33.0273 33.6717 33.0338 29.9064 34.4999C27.0395 35.613 24.8759 38.044 24.1184 41.0062L23.9724 41.5817C23.6571 42.8236 23.8941 44.144 24.6219 45.2063C25.3816 46.3128 26.5949 47.0408 27.9534 47.2038C30.5315 47.5103 33.1543 47.667 35.7471 47.667C38.3423 47.667 40.967 47.5103 43.5484 47.2035C44.9037 47.0406 46.117 46.3148 46.8766 45.2104C47.6044 44.1524 47.8436 42.8321 47.5314 41.5923C47.5294 41.5817 47.5264 41.5711 47.5242 41.5626ZM43.3062 42.7539C43.2808 42.792 43.2024 42.8808 43.0332 42.8999C38.2143 43.4732 33.2843 43.4732 28.4673 42.8999C28.2981 42.8808 28.2208 42.792 28.1722 42.6481L28.3172 42.0768C28.7278 40.4687 29.9084 39.1483 31.4773 38.539C32.86 37.9995 34.2967 37.7265 35.7471 37.7265C37.1975 37.7265 38.6331 37.9995 39.8954 38.4883C39.9218 38.499 39.9812 38.5243 40.0352 38.5475C40.0744 38.5666 40.1134 38.5835 40.1548 38.6004C41.6729 39.2393 42.7743 40.5046 43.1816 42.098L43.3372 42.68L45.4308 42.1214L43.3062 42.7539ZM27.0837 23.9606C27.0837 28.8103 30.9716 32.7543 35.7504 32.7543C40.5292 32.7543 44.417 28.8103 44.417 23.9606C44.417 19.111 40.5292 15.167 35.7504 15.167C30.9716 15.167 27.0837 19.111 27.0837 23.9606ZM40.0837 23.9606C40.0837 26.4194 38.1402 28.4209 35.7504 28.4209C33.3605 28.4209 31.417 26.4194 31.417 23.9606C31.417 21.5019 33.3605 19.5003 35.7504 19.5003C38.1402 19.5003 40.0837 21.5019 40.0837 23.9606Z'
                      id='Vector_2'
                    />
                  </g>
                </g>
              </svg>

              <p className='text-center text-Text-xl font-medium'>I’m a client, hiring for a project</p>
            </div>
          </div>

          <div
            className={`flex flex-1 py-5 px-[18px] justify-between items-center rounded-lg border h-[222px] duration-500 cursor-pointer hover:scale-95
            ${
              selectedOption === 'freelancer'
                ? 'bg-primary-purple-50 border-[#D9D9D9] text-[#F9F9F9]'
                : 'border-primary-purple-60 text-[#585858]'
            }`}
            onClick={() => handleOptionSelect('freelancer')}
          >
            <div className='flex flex-col items-center gap-5'>
              <svg
                fill={selectedOption === 'freelancer' ? '#FFD1AB' : '#423366'}
                height='52'
                viewBox='0 0 52 52'
                width='52'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='virtual assistant'>
                  <g id='_icons'>
                    <path
                      d='M18.4167 21.6667C11.8469 21.6667 6.5 27.0136 6.5 33.5833C6.5 40.1531 11.8469 45.5 18.4167 45.5C24.9864 45.5 30.3333 40.1531 30.3333 33.5833C30.3333 27.0136 24.9864 21.6667 18.4167 21.6667ZM18.4167 41.1667C14.2357 41.1667 10.8333 37.7644 10.8333 33.5833C10.8333 29.4023 14.2357 26 18.4167 26C22.5977 26 26 29.4023 26 33.5833C26 37.7644 22.5977 41.1667 18.4167 41.1667ZM37.9167 15.1667C33.7357 15.1667 30.3333 18.569 30.3333 22.75C30.3333 26.931 33.7357 30.3333 37.9167 30.3333C42.0977 30.3333 45.5 26.931 45.5 22.75C45.5 18.569 42.0977 15.1667 37.9167 15.1667ZM37.9167 26C36.1246 26 34.6667 24.5421 34.6667 22.75C34.6667 20.958 36.1246 19.5 37.9167 19.5C39.7087 19.5 41.1667 20.958 41.1667 22.75C41.1667 24.5421 39.7087 26 37.9167 26ZM26 13C26 9.41568 23.0843 6.5 19.5 6.5C15.9157 6.5 13 9.41568 13 13C13 16.5843 15.9157 19.5 19.5 19.5C23.0843 19.5 26 16.5843 26 13ZM17.3333 13C17.3333 11.8044 18.3044 10.8333 19.5 10.8333C20.6956 10.8333 21.6667 11.8044 21.6667 13C21.6667 14.1956 20.6956 15.1667 19.5 15.1667C18.3044 15.1667 17.3333 14.1956 17.3333 13Z'
                      id='Vector'
                    />
                  </g>
                </g>
              </svg>

              <p className='text-center text-Text-xl font-medium'>I’m a freelancer, want to manage my projects</p>
            </div>
          </div>
        </div>
        <Button disabled={!selectedOption} size='lg' className='w-full' onClick={handleSignUp}>
          Sign up
        </Button>
        <p className='text-[#1B1B1B] text-center text-Text-xl font-semibold'>
          Already have an account?{' '}
          <Link className='text-primary-purple-60' href={ROUTES.SIGNIN}>
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
