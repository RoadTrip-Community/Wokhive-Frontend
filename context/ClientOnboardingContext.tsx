'use client';
import { NextPage } from 'next';
import React, { createContext, useContext, useState, ReactNode } from 'react';

const initialPersonalInfo = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
};

const initialCareerInfo = {
  occupation: '',
  address: '',
};

const initialBankInfo = {
  bankName: '',
  accountNumber: '',
};

const ClientOnboardingContext = createContext<ClientOnboardingContextProps | undefined>(undefined);

export const ClientOnboardingProvider: NextPage<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
  const [careerInfo, setCareerInfo] = useState(initialCareerInfo);
  const [bankInfo, setBankInfo] = useState(initialBankInfo);

  const value = {
    personalInfo,
    setPersonalInfo,
    careerInfo,
    setCareerInfo,
    bankInfo,
    setBankInfo,
  };

  return <ClientOnboardingContext.Provider value={value}>{children}</ClientOnboardingContext.Provider>;
};

export const useClientOnboarding = () => {
  const context = useContext(ClientOnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
