import JobDetails from '@/modules/jobPosting/jobDetails';
import { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job Details - Find and Manage Freelance Opportunities',
  description:
    'Discover and manage freelance job opportunities seamlessly with the Job Postings dashboard on Workhive. Post, track, and collaborate on projects effortlessly.',
};

const JobDetailsPage: NextPage = () => <JobDetails />;

export default JobDetailsPage;
