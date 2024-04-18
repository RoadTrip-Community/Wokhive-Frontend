import React from 'react';
import { useFreelancerOnboarding } from '@/context/FreelancerOnboardingContext';
import { NextPage } from 'next';

const StepOne: NextPage<StepsProps> = ({ onComplete }) => {
  const { experienceLevel, setExperienceLevel } = useFreelancerOnboarding();

  const handleOptionSelect = (option: string) => {
    setExperienceLevel(option);
    onComplete(true);
  };

  return (
    <>
      <div className='flex gap-24 flex-col justify-start items-start'>
        <h3 className='text-gray-900 text-Display-md max-w-[1095px]'>
          A few quick questions: first, what is your experience level in freelancing?
        </h3>

        <div className='inline-flex items-start gap-8'>
          <div
            className={`flex w-[419px] py-20 px-[18px] flex-col justify-center items-center gap-5 rounded-lg border border-primary-purple-60 transition-all duration-500 cursor-pointer hover:scale-95 ${
              experienceLevel === 'entry' && 'bg-primary-purple-50'
            }`}
            onClick={() => handleOptionSelect('entry')}
          >
            <div className='flex h-[130px] flex-col justify-between items-center'>
              <svg fill='none' height='64' viewBox='0 0 65 64' width='65' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M48.5 8C46.3783 8 44.3434 8.84286 42.8431 10.3431C41.3429 11.8434 40.5 13.8783 40.5 16V48C40.5 50.1217 41.3429 52.1566 42.8431 53.6569C44.3434 55.1571 46.3783 56 48.5 56C50.6217 56 52.6566 55.1571 54.1569 53.6569C55.6571 52.1566 56.5 50.1217 56.5 48C56.5 45.8783 55.6571 43.8434 54.1569 42.3431C52.6566 40.8429 50.6217 40 48.5 40H16.5C14.3783 40 12.3434 40.8429 10.8431 42.3431C9.34286 43.8434 8.5 45.8783 8.5 48C8.5 50.1217 9.34286 52.1566 10.8431 53.6569C12.3434 55.1571 14.3783 56 16.5 56C18.6217 56 20.6566 55.1571 22.1569 53.6569C23.6571 52.1566 24.5 50.1217 24.5 48V16C24.5 13.8783 23.6571 11.8434 22.1569 10.3431C20.6566 8.84286 18.6217 8 16.5 8C14.3783 8 12.3434 8.84286 10.8431 10.3431C9.34286 11.8434 8.5 13.8783 8.5 16C8.5 18.1217 9.34286 20.1566 10.8431 21.6569C12.3434 23.1571 14.3783 24 16.5 24H48.5C50.6217 24 52.6566 23.1571 54.1569 21.6569C55.6571 20.1566 56.5 18.1217 56.5 16C56.5 13.8783 55.6571 11.8434 54.1569 10.3431C52.6566 8.84286 50.6217 8 48.5 8Z'
                  stroke={experienceLevel === 'entry' ? '#FFD1AB' : 'black'}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='4'
                />
              </svg>

              <p
                className={`text-center text-Display-sm font-semibold ${
                  experienceLevel === 'entry' ? 'text-white' : 'text-[#585858]'
                }`}
              >
                Entry Level
              </p>
            </div>
          </div>

          <div
            className={`flex w-[419px] py-20 px-[18px] flex-col justify-center items-center gap-5 rounded-lg border border-primary-purple-60 transition-all duration-500 cursor-pointer hover:scale-95 ${
              experienceLevel === 'mid' && 'bg-primary-purple-50'
            }`}
            onClick={() => handleOptionSelect('mid')}
          >
            <div className='flex h-[130px] flex-col justify-between items-center'>
              <svg fill='none' height='64' viewBox='0 0 65 64' width='65' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M32.4987 5.33301L59.1654 22.6663V41.333L32.4987 58.6663L5.83203 41.333V22.6663L32.4987 5.33301Z'
                  stroke={experienceLevel === 'mid' ? '#FFD1AB' : 'black'}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='4'
                />
                <path
                  d='M32.5 58.6663V41.333'
                  stroke={experienceLevel === 'mid' ? '#FFD1AB' : 'black'}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='4'
                />
                <path
                  d='M59.1654 22.667L32.4987 41.3337L5.83203 22.667'
                  stroke={experienceLevel === 'mid' ? '#FFD1AB' : 'black'}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='4'
                />
                <path
                  d='M5.83203 41.3337L32.4987 22.667L59.1654 41.3337'
                  stroke={experienceLevel === 'mid' ? '#FFD1AB' : 'black'}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='4'
                />
                <path
                  d='M32.5 5.33301V22.6663'
                  stroke={experienceLevel === 'mid' ? '#FFD1AB' : 'black'}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='4'
                />
              </svg>

              <p
                className={`text-center text-Display-sm font-semibold ${
                  experienceLevel === 'mid' ? 'text-white' : 'text-[#585858]'
                }`}
              >
                Mid Level
              </p>
            </div>
          </div>

          <div
            className={`flex w-[419px] py-20 px-[18px] flex-col justify-center items-center gap-5 rounded-lg border border-primary-purple-60 transition-all duration-500 cursor-pointer hover:scale-95 ${
              experienceLevel === 'senior' && 'bg-primary-purple-50'
            }`}
            onClick={() => handleOptionSelect('senior')}
          >
            <div className='flex h-[130px] flex-col justify-between items-center'>
              <svg fill='none' height='64' viewBox='0 0 65 64' width='65' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M56.5 42.6667V21.3334C56.499 20.3981 56.2522 19.4796 55.7841 18.6698C55.3161 17.8601 54.6433 17.1877 53.8333 16.7201L35.1667 6.0534C34.3559 5.5853 33.4362 5.33887 32.5 5.33887C31.5638 5.33887 30.6441 5.5853 29.8333 6.0534L11.1667 16.7201C10.3567 17.1877 9.68395 17.8601 9.2159 18.6698C8.74785 19.4796 8.50096 20.3981 8.5 21.3334V42.6667C8.50096 43.602 8.74785 44.5206 9.2159 45.3303C9.68395 46.14 10.3567 46.8124 11.1667 47.2801L29.8333 57.9467C30.6441 58.4148 31.5638 58.6613 32.5 58.6613C33.4362 58.6613 34.3559 58.4148 35.1667 57.9467L53.8333 47.2801C54.6433 46.8124 55.3161 46.14 55.7841 45.3303C56.2522 44.5206 56.499 43.602 56.5 42.6667Z'
                  stroke={experienceLevel === 'senior' ? '#FFD1AB' : 'black'}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='4'
                />
                <path
                  d='M20.5 11.2266L32.5 18.1599L44.5 11.2266'
                  stroke={experienceLevel === 'senior' ? '#FFD1AB' : 'black'}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='4'
                />
                <path
                  d='M20.5 52.7733V38.9333L8.5 32'
                  stroke={experienceLevel === 'senior' ? '#FFD1AB' : 'black'}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='4'
                />
                <path
                  d='M56.5 32L44.5 38.9333V52.7733'
                  stroke={experienceLevel === 'senior' ? '#FFD1AB' : 'black'}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='4'
                />
                <path
                  d='M9.21875 18.5596L32.4987 32.0262L55.7787 18.5596'
                  stroke={experienceLevel === 'senior' ? '#FFD1AB' : 'black'}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='4'
                />
                <path
                  d='M32.5 58.88V32'
                  stroke={experienceLevel === 'senior' ? '#FFD1AB' : 'black'}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='4'
                />
              </svg>

              <p
                className={`text-center text-Display-sm font-semibold ${
                  experienceLevel === 'senior' ? 'text-white' : 'text-[#585858]'
                }`}
              >
                Senior Level
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepOne;
