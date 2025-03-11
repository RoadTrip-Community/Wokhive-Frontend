import Profile from '@/modules/client/profile/profile';
import { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile - Manage Your Wokhive Account',
  description:
    'Manage your Wokhive account and personalize your profile with the Profile dashboard. Update your skills, portfolio, and preferences effortlessly.',
};

const ProfilePage: NextPage = () => <Profile />;

export default ProfilePage;
