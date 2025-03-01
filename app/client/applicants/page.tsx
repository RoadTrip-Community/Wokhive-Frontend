import { NextPage, Metadata } from 'next';
import ApplicantPage from "@/modules/client/applicant/applicant"

export const metadata: Metadata = {
  title: 'Applicant - View Applicant profile',
  description:
    'Efficiently manage your jobs and collaborations with the Projects dashboard on Workhive. Track progress, milestones, and deadlines effortlessly.',
};

const Applicant: NextPage = () => <ApplicantPage/>;

export default Applicant;
