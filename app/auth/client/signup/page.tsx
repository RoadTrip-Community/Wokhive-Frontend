import React from 'react';
import SignUpForm from '@/modules/auth/SignUpForm';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Client Sign Up',
  description: 'Sign up as a client on Wokhive',
};

const ClientSignUp: NextPage = () => <SignUpForm userType='CLIENT' />;

export default ClientSignUp;
