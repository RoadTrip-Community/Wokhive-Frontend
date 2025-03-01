import JobDetails from '@/modules/freelancer/dashboard/jobPosting/jobDetails';
import { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job Details - Find and Manage Freelance Opportunities',
  description:
    'Discover and manage freelance job opportunities seamlessly with the Job Postings dashboard on Wokhive. Post, track, and collaborate on projects effortlessly.',
};

const JobDetailsPage: NextPage = () => <JobDetails />;

export default JobDetailsPage;
