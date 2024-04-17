import TermsOfService from '@/components/pages/TermsOfService';
import { Metadata, NextPage } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Wokhive',
};

const Terms: NextPage = () => <TermsOfService />;

export default Terms;
