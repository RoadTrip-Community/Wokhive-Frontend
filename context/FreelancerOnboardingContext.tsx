'use client';
import { NextPage } from 'next';
import React, { createContext, useContext, useState, ReactNode } from 'react';

const initialExperienceLevel: string = '';

const initialServicesOffered: string[] = [];

const initialSpokenLanguages = {
  spokenLanguages: [
    {
      language: '',
      proficiency: null,
    },
  ],
};

const FreelancerOnboardingContext = createContext<FreelancerOnboardingContextProps | undefined>(undefined);

export const FreelancerOnboardingProvider: NextPage<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [experienceLevel, setExperienceLevel] = useState(initialExperienceLevel);
  const [servicesOffered, setServicesOffered] = useState(initialServicesOffered);
  const [spokenLanguages, setSpokenLanguages] = useState(initialSpokenLanguages);

  const value = {
    experienceLevel,
    setExperienceLevel,
    servicesOffered,
    setServicesOffered,
    spokenLanguages,
    setSpokenLanguages,
  };

  return <FreelancerOnboardingContext.Provider value={value}>{children}</FreelancerOnboardingContext.Provider>;
};

export const useFreelancerOnboarding = () => {
  const context = useContext(FreelancerOnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
