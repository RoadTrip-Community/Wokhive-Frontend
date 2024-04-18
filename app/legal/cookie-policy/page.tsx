import CookiePolicy from '@/components/pages/CookiePolicy';
import { Metadata, NextPage } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for Wokhive',
};

const CookiePolicyPage: NextPage = () => <CookiePolicy />;

export default CookiePolicyPage;
