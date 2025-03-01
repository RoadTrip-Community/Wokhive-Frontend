import React from 'react';
import Kyc from '@/modules/kyc/Kyc';
import { NextPage } from 'next';

const ClientKyc: NextPage = () => {
  return <Kyc userType='client' />;
};

export default ClientKyc;
