import Button from '@/components/UI/Button';
import { NextPage } from 'next';
import avatar from '@/public/assets/svgs/freelancerVerified.svg';
import Image from 'next/image';

const Profile: NextPage = () => {
  const projects = [
    { name: 'UX', count: 27 },
    { name: 'Animation', count: 5 },
    { name: 'Illustration', count: 1 },
    { name: 'Branding', count: 3 },
  ];

  const baseColor = [66, 51, 102]; // RGB for #423366
  // Find max count for the thickest color
  const maxCount = Math.max(...projects.map((p) => p.count), 1);

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
          <div className='flex min-h-[303px] p-10 rounded-lg bg-secondary-purple-10 flex-[2]'>
            <div className='flex flex-col gap-4'>
              <p className='text-gray-700 text-Display-xs font-semibold'>Personal information</p>
              <div className='flex flex-col gap-6'>
                <div className='flex gap-9'>
                  <div className='flex flex-col gap-2'>
                    <p className='text-gray-500'>First name</p>
                    <p className='text-gray-500 text-Text-xl font-semibold'>John</p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p className='text-gray-500'>Last name</p>
                    <p className='text-gray-500 text-Text-xl font-semibold'>Doe</p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p className='text-gray-500'>Age</p>
                    <p className='text-gray-500 text-Text-xl font-semibold'>17 years old</p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p className='text-gray-500'>Gender</p>
                    <p className='text-gray-500 text-Text-xl font-semibold'>Male</p>
                  </div>
                </div>

                <div className='flex flex-col gap-2'>
                  <p className='text-gray-500'>Address</p>
                  <p className='text-gray-500 text-Text-xl font-semibold'>
                    12 Hillton close, Benin city, Edo state, Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-4 min-h-[303px] p-10 rounded-lg bg-secondary-purple-10 flex-1'>
            <div className='flex flex-col gap-4'>
              <p className='text-gray-700 text-Display-xs font-semibold'>Bank information</p>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                  <p className='text-gray-500'>Bank account number</p>
                  <p className='text-gray-500 text-Text-xl font-semibold'>0254414110</p>
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-gray-500'>Bank name</p>
                  <p className='text-gray-500 text-Text-xl font-semibold'>Wema Bank</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full min-h-[423px] p-10 flex flex-col gap-9'>
          <p className='text-gray-700 text-Display-xs font-semibold'>Wokhive Career information</p>
          <div className='flex justify-between items-center gap-14'>
            <div className='flex flex-col gap-3 flex-1'>
              <p className='text-gray-500 text-Text-xl font-semibold'>Projects executed</p>
              <div className='flex flex-col gap-12 w-full'>
                <div className='flex w-full bg-gray-200 rounded-lg overflow-hidden'>
                  {projects.map((project, index) => {
                    const widthPercent = (project.count / maxCount) * 100;

                    // Generate lighter shades (more transparent as index increases)
                    const opacity = 1 - index * 0.2; // Reduce opacity gradually
                    const bgColor = `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${opacity})`;

                    return (
                      <div
                        key={project.name}
                        className='text-white text-sm font-semibold flex items-center justify-center'
                        style={{
                          width: `${widthPercent}%`,
                          backgroundColor: bgColor,
                          padding: '10px',
                        }}
                      >
                        <span className='truncate whitespace-nowrap max-w-full'>{project.name}</span>
                      </div>
                    );
                  })}
                </div>

                <div className='flex flex-col gap-5'>
                  {projects.map((project, index) => (
                    <div key={index} className='flex justify-between items-center gap-3'>
                      <p className='text-gray-500 text-Text-xl font-semibold'>{project.name}</p>
                      <p className='text-gray-500 text-Text-xl font-semibold'>{project.count}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='flex flex-col flex-1 gap-4'>
              <div className='flex flex-col gap-3'>
                <p className='text-gray-900 text-Text-xl font-semibold'>Amount earned</p>
                <p className='self-stretch text-gray-700 text-right text-Display-extra font-semibold'>$212,320.00</p>
              </div>

              <div className='flex flex-col gap-4'>
                <p className='text-gray-600 font-semibold'>Top clients</p>
                <div className='flex flex-col gap-4'>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className='flex w-full justify-between items-center'>
                      <div className='flex items-center gap-3'>
                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                          <Image src={avatar} height={40} width={40} alt='avatar' />
                        </div>
                        <p className='text-gray-700 font-semibold'>Micheal McCall</p>
                      </div>
                      <p className='text-gray-700 text-right font-semibold'>$50,000</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
