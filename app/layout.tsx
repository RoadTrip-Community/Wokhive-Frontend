import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { inter, romela, whyte } from '@/config/fonts';
import { FreelancerOnboardingProvider } from '@/context/FreelancerOnboardingContext';
import { ClientOnboardingProvider } from '@/context/ClientOnboardingContext';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: {
    default: 'WokHive',
    template: '%s | WokHive',
  },
  description: 'Empower your Freelancing career with wokhive',
  keywords: ['freelancing, jobs, remote jobs, work from home, wokhive'],
  authors: [{ name: 'WokHive', url: 'https://wokhive.com' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${whyte.variable} ${romela.variable} min-w-[340px]`}>
        <FreelancerOnboardingProvider>
          <ClientOnboardingProvider>{children}</ClientOnboardingProvider>
        </FreelancerOnboardingProvider>
        <Toaster />
      </body>
    </html>
  );
}
