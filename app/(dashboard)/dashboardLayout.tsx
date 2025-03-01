'use client';
import { useState } from 'react';
import { NextPage } from 'next';
import Sidebar from '@/components/sidebar';
import DashboardNavbar from '@/components/dashboardNavbar';
import Signout from '@/modules/freelancer/dashboard/signout';

const DashboardLayout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  const [isSignoutModalOpen, setIsSignoutModalOpen] = useState(true);
  return (
    <div className='flex w-full bg-white'>
      <Sidebar setSignoutModal={setIsSignoutModalOpen} />
      <div className='flex-grow flex-col ml-[280px] bg-white'>
        <DashboardNavbar />
        <main className='flex-grow h-[calc(100vh-70px)] mt-[70px] overflow-x-hidden overflow-y-scroll relative'>
          {children}

          <Signout isModalOpen={isSignoutModalOpen} setIsModalOpen={setIsSignoutModalOpen} />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
