import { Metadata } from 'next';
import Sidebar from '@/components/client/sidebar';
import ClientDashboardNav from '@/components/client/clientDashboardNav';

export const metadata: Metadata = {
  title: {
    default: 'Workhive Dashboard',
    template: '%s | Workhive Client Dashboard',
  },
  description:
    'Manage your projects efficiently with the Workhive dashboard. Connect with freelancer, track progress, and collaborate seamlessly.',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='flex-grow flex-col ml-[250px]'>
        <ClientDashboardNav />
        <div className='px-10 pt-8'>{children}</div>
      </div>
    </div>
  );
}
