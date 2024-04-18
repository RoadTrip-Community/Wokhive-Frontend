import ForgotPassword from '@/modules/auth/ForgotPassword';
import { Metadata, NextPage } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Forgot Password',
  description: 'Forgot your password? No worries, we got you covered',
};

const ForgotPasswordPage: NextPage = () => <ForgotPassword />;

export default ForgotPasswordPage;
