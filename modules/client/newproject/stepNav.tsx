import { NextPage } from 'next';

const navItems = ['Project details', 'Project proposal', 'Review and submit', 'Confirmation'];
const ProposalTopNav: NextPage<{ step: number }> = ({ step }) => {
  return (
    <div className='flex w-[calc(100%-250px)] max-w-[1070px] py-6 items-center justify-between gap-5 bg-white border-b border-grey-grey-5 h-[100px]'>
      {navItems.map((item, index) => (
        <div key={index} className='flex flex-col items-center gap-4 relative'>
          {step === index + 1 && <span className='w-[calc(100%+20px)] h-0.5 bg-primary-purple-60 absolute -bottom-4' />}
          <div
            className={`w-6 h-6 rounded-full border relative ${
              step > index + 1
                ? 'bg-primary-purple-40'
                : step === index + 1
                ? 'border-primary-purple-60'
                : 'border-gray-300'
            }`}
          >
            <span
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-Text-sm font-semibold ${
                step > index + 1 ? 'text-gray-200' : step === index + 1 ? 'text-primary-purple-60' : 'text-gray-300'
              }`}
            >
              {index + 1}
            </span>
          </div>
          <p className={`${step === index + 1 ? 'text-gray-500' : 'text-gray-300'} text-Text-xl text-center`}>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default ProposalTopNav;
