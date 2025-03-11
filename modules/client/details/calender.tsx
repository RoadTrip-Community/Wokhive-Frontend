'use client';
import { useState } from 'react';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const startDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const generateCalendarGrid = () => {
    const grid = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startDayOfMonth) {
          week.push('');
        } else if (day <= daysInMonth) {
          week.push({ day: day });
          day++;
        } else {
          week.push('');
        }
      }
      grid.push(week);
    }
    return grid;
  };

  const navigateMonth = (increment: number) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + increment);
    setCurrentMonth(newDate);
  };

  return (
    <div className='flex flex-col md:flex-row gap-6 font-romela'>
      <div className='md:flex-1 p-[20px] py-[30px] bg-white shadow-md'>
        <div className='flex items-center justify-center gap-10 mb-4'>
          <svg
            onClick={() => navigateMonth(-1)}
            className='cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path d='M15 18L9 12L15 6' stroke='#344054' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
          <p className='font-semibold text-gray-700 text-xl'>
            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
          <svg
            onClick={() => navigateMonth(1)}
            className='cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path d='M9 18L15 12L9 6' stroke='#344054' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </div>
        <div className='grid grid-cols-7 border-[1px] border-[#9D9E9F99] rounded-[6px]'>
          {daysOfWeek.map((day) => (
            <div key={day} className='text-center font-[500] py-2 text-[14px] text-[#333333]'>
              {day}
            </div>
          ))}
          {generateCalendarGrid().map((week, index) =>
            week.map((item, idx) => (
              <div
                key={`${index}-${idx}`}
                className='relative text-right border-[1px] border-[#DADCE099] h-[70px] md:h-[130px] p-1 md:p-2'
              >
                {item !== '' && (
                  <div className=''>
                    <span className='text-[12px] text-gray-900 '>{typeof item === 'object' && item.day}</span>
                  </div>
                )}
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
