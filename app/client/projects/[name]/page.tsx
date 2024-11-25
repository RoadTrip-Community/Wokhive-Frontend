import { NextPage, Metadata } from 'next';
import Details from '@/modules/client/details/details';

export const metadata: Metadata = {
  title: 'Projects - Manage Your Freelance Projects',
  description:
    'Efficiently manage your freelance projects and collaborations with the Projects dashboard on Workhive. Track progress, milestones, and deadlines effortlessly.',
};

const ProjectDetailsPage: NextPage = () => <Details />;

export default ProjectDetailsPage;
