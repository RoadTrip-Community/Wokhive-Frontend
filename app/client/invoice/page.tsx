import Invoice from '@/modules/client/invoice/invoice';
import { NextPage, Metadata } from 'next';
// import NewProject from '@/modules/client/newproject/newProject';

export const metadata: Metadata = {
  title: 'New Project - create new project',
  description:
    'Efficiently manage your freelance projects and collaborations with the Projects dashboard on Workhive. Track progress, milestones, and deadlines effortlessly.',
};

const InvoicePage: NextPage = () => <Invoice />;

export default InvoicePage;
