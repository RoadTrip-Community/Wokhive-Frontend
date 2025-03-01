import Messages from '@/modules/freelancer/dashboard/messages';
import { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Messages - Collaborate Seamlessly',
  description:
    'Stay connected and collaborate effectively with clients and freelancers using the messaging feature on the Wokhive dashboard. Discuss project details, share files, and streamline communication effortlessly.',
};

const MessagesPage: NextPage = () => <Messages />;

export default MessagesPage;
