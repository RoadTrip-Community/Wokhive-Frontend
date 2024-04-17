import React from 'react';
import ClientKyc from '@/modules/client/kyc/ClientKyc';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Client KYC',
  description: 'Complete your KYC as a client on Wokhive',
};

const ClientKycPage: NextPage = () => <ClientKyc />;

export default ClientKycPage;
