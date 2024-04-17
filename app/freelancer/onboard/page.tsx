import React from 'react';
import FreelancerOnboard from '@/components/freelancer/FreelancerOnboard';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Freelancer Onboard',
  description: 'Onboard as a freelancer on Wokhive',
};

const OnboardPage: NextPage = () => <FreelancerOnboard />;

export default OnboardPage;
