import SendProposal from '@/modules/freelancer/dashboard/jobPosting/sendProposal';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Send Proposal - Find and Manage Freelance Opportunities',
  description:
    'Discover and manage freelance job opportunities seamlessly with the Job Postings dashboard on Wokhive. Post, track, and collaborate on projects effortlessly.',
};

const SendProposalPage = () => <SendProposal />;

export default SendProposalPage;
