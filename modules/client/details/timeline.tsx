import { useState } from 'react';

const ProjectTimeline = () => {
  const [activeView, setActiveView] = useState('timeline');

  return (
    <div>
      <div className='flex justify-between gap-4 items-center'>
        <div className='flex items-center gap-2'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <path d='M15 18L9 12L15 6' stroke='#344054' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>

          <p className='font-semibold text-gray-700 text-Text-xl'>July 2023</p>

          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <path d='M9 18L15 12L9 6' stroke='#344054' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </div>

        <div className='flex gap-2'>
          <button
            onClick={() => setActiveView('calender')}
            className={
              activeView === 'calender'
                ? 'flex px-3 py-2 items-center gap-2 rounded bg-primary-purple-60 transition-all'
                : ''
            }
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z'
                stroke={activeView === 'calender' ? '#FCFCFD' : '#344054'}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            {activeView === 'calender' && <p className='text-Text-sm text-gray-25 font-semibold'>Calender View</p>}
          </button>

          <button
            onClick={() => setActiveView('timeline')}
            className={
              activeView === 'timeline'
                ? 'flex px-3 py-2 items-center gap-2 rounded bg-primary-purple-60 transition-all'
                : ''
            }
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M14 10C14.9319 10 15.3978 10 15.7654 9.84776C16.2554 9.64477 16.6448 9.25542 16.8478 8.76537C17 8.39782 17 7.93188 17 7C17 6.06812 17 5.60218 16.8478 5.23463C16.6448 4.74458 16.2554 4.35523 15.7654 4.15224C15.3978 4 14.9319 4 14 4L6 4C5.06812 4 4.60218 4 4.23463 4.15224C3.74458 4.35523 3.35523 4.74458 3.15224 5.23463C3 5.60218 3 6.06812 3 7C3 7.93188 3 8.39782 3.15224 8.76537C3.35523 9.25542 3.74458 9.64477 4.23463 9.84776C4.60218 10 5.06812 10 6 10L14 10Z'
                stroke={activeView === 'timeline' ? '#FCFCFD' : '#344054'}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M18 20C18.9319 20 19.3978 20 19.7654 19.8478C20.2554 19.6448 20.6448 19.2554 20.8478 18.7654C21 18.3978 21 17.9319 21 17C21 16.0681 21 15.6022 20.8478 15.2346C20.6448 14.7446 20.2554 14.3552 19.7654 14.1522C19.3978 14 18.9319 14 18 14H6C5.06812 14 4.60218 14 4.23463 14.1522C3.74458 14.3552 3.35523 14.7446 3.15224 15.2346C3 15.6022 3 16.0681 3 17C3 17.9319 3 18.3978 3.15224 18.7654C3.35523 19.2554 3.74458 19.6448 4.23463 19.8478C4.60218 20 5.06812 20 6 20L18 20Z'
                stroke={activeView === 'timeline' ? '#FCFCFD' : '#344054'}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            {activeView === 'timeline' && <p className='text-Text-sm text-gray-25 font-semibold'>Timeline View</p>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
