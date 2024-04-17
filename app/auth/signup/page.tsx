import React from 'react';
import SignUp from '@/modules/auth/SignUp';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign up for a Wokhive account',
};

const SignUpPage: NextPage = () => <SignUp />;

export default SignUpPage;
