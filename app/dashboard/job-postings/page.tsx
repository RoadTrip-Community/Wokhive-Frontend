import AllPosting from '@/modules/jobPosting/allPosting';
import { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job Postings - Find and Manage Freelance Opportunities',
  description:
    'Discover and manage freelance job opportunities seamlessly with the Job Postings dashboard on Workhive. Post, track, and collaborate on projects effortlessly.',
};

const JobPostingsPage: NextPage = () => <AllPosting />;

export default JobPostingsPage;
