import { NextPage, Metadata } from 'next';
import Project from '@/modules/client/project/project';

export const metadata: Metadata = {
  title: 'Projects - Manage Your Freelance Projects',
  description:
    'Efficiently manage your freelance projects and collaborations with the Projects dashboard on Wokhive. Track progress, milestones, and deadlines effortlessly.',
};

const ProjectsPage: NextPage = () => <Project />;


export default ProjectsPage;
