import React from 'react';
import FreelancerKyc from '@/modules/freelancer/kyc/FreelancerKyc';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Freelancer KYC',
  description: 'Complete your KYC as a freelancer on Wokhive',
};

const FreelancerKycPage: NextPage = () => <FreelancerKyc />;

export default FreelancerKycPage;
