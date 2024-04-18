import React from 'react';
import SignIn from '@/modules/auth/SignInForm';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your Wokhive account',
};

const SignInPage: NextPage = () => <SignIn />;

export default SignInPage;
