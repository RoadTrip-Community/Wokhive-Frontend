import Settings from '@/modules/freelancer/dashboard/settings';
import { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings - Manage Your Wokhive Account',
  description:
    'Manage your Wokhive account and personalize your settings with the Settings dashboard. Update your account details, preferences, and security settings effortlessly.',
};

const SettingsPage: NextPage = () => <Settings />;

export default SettingsPage;
