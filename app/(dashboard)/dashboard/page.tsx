import Dashboard from '@/modules/freelancer/dashboard/overview/dashboard';
import { Metadata, NextPage } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Dashboard - Freelancer Dashboard',
  description:
    'Get an overview of your freelance projects, job postings, and proposals with the Dashboard on Wokhive. Track progress, deadlines, and earnings effortlessly.',
};

const DashboardPage: NextPage = () => <Dashboard />;

export default DashboardPage;
