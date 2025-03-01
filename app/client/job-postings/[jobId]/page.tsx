import { NextPage, Metadata } from 'next';
import JobDetails from '@/modules/client/jobposting/jobdetails';

export const metadata: Metadata = {
    title: 'Jobs - Manage Your Freelance Projects',
    description:
      'Efficiently manage your jobs and collaborations with the Projects dashboard on Workhive. Track progress, milestones, and deadlines effortlessly.',
};
const JobDetailsPage:NextPage = () => <JobDetails/>
 
export default JobDetailsPage;