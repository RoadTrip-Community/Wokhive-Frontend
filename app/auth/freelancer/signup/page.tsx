import React from 'react';
import SignUpForm from '@/modules/auth/SignUpForm';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Freelancer Sign Up',
  description: 'Sign up as a freelancer on Wokhive',
};

const FreelancerSignupPage: NextPage = () => <SignUpForm userType='FREELANCER' />;

export default FreelancerSignupPage;
