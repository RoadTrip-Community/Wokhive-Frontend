import { Metadata } from 'next';
import Sidebar from '@/components/sidebar';
import DashboardNavbar from '@/components/dashboardNavbar';

export const metadata: Metadata = {
  title: {
    default: 'Workhive Dashboard',
    template: '%s | Workhive Dashboard',
  },
  description:
    'Manage your freelance projects efficiently with the Workhive dashboard. Connect with clients, track progress, and collaborate seamlessly.',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='flex-grow flex-col ml-[280px]'>
        <DashboardNavbar />
        <div className='px-10 pt-8'>{children}</div>
      </div>
    </div>
  );
}
