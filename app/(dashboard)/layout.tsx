import { Metadata } from 'next';
import Sidebar from '@/components/sidebar';
import DashboardNavbar from '@/components/dashboardNavbar';

export const metadata: Metadata = {
  title: {
    default: 'Wokhive Dashboard',
    template: '%s | Wokhive Dashboard',
  },
  description:
    'Manage your freelance projects efficiently with the Wokhive dashboard. Connect with clients, track progress, and collaborate seamlessly.',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-full bg-white'>
      <Sidebar />
      <div className='flex-grow flex-col ml-[280px] bg-white'>
        <DashboardNavbar />
        <main className='flex-grow h-[calc(100vh-70px)] mt-[70px] overflow-x-hidden overflow-y-scroll relative'>
          {children}
        </main>
      </div>
    </div>
  );
}
