import { Metadata } from 'next';
import DashboardLayout from './dashboardLayout';

export const metadata: Metadata = {
  title: {
    default: 'Wokhive Dashboard',
    template: '%s | Wokhive Dashboard',
  },
  description:
    'Manage your freelance projects efficiently with the Wokhive dashboard. Connect with clients, track progress, and collaborate seamlessly.',
};

export default function DashboardLayoutWrapper({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
