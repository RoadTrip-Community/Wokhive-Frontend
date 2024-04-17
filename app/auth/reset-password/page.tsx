import ResetPassword from '@/modules/auth/ResetPassword';
import { Metadata, NextPage } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Reset Password',
  description: 'Reset your password to regain access to your account',
};

const ResetPasswordPage: NextPage = () => <ResetPassword />;

export default ResetPasswordPage;
