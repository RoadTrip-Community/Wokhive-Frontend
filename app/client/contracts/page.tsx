import { NextPage, Metadata } from 'next';
import Contracts from '@/modules/client/contract/contracts';

export const metadata: Metadata = {
  title: 'Contract - Manage Your contract with clients',
  description:
    'Efficiently manage your jobs and collaborations with the Projects dashboard on Workhive. Track progress, milestones, and deadlines effortlessly.',
};

const Contract: NextPage = () => <Contracts />;

export default Contract;
