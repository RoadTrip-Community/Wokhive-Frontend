import Projects from '@/modules/freelancer/dashboard/project';
import { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Manage Your Freelance Projects',
  description:
    'Efficiently manage your freelance projects and collaborations with the Projects dashboard on Workhive. Track progress, milestones, and deadlines effortlessly.',
};

const ProjectsPage: NextPage = () => <Projects />;

export default ProjectsPage;
