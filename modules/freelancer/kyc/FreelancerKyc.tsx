import React from 'react';
import Kyc from '@/modules/kyc/Kyc';
import { NextPage } from 'next';

const FreelancerKyc: NextPage = () => {
  return <Kyc type='FREELANCER' />;
};

export default FreelancerKyc;
