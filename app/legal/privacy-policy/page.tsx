import PrivacyPolicy from '@/components/pages/PrivacyPolicy';
import { Metadata, NextPage } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Wokhive',
};

const PrivacyPolicyPage: NextPage = () => <PrivacyPolicy />;

export default PrivacyPolicyPage;
