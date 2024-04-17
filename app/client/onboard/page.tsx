import React from 'react';
import ClientOnboard from '@/components/client/OnboardClient';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Client Onboard',
  description: 'Onboard as a client on Wokhive',
};

const ClientOnboardPage: NextPage = () => <ClientOnboard />;

export default ClientOnboardPage;
