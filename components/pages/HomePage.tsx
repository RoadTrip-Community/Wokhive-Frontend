import { NextPage } from 'next';
import React from 'react';
import Footer from '@/components/Footer';
import CTA from '@/modules/LandingPage/CTA';
import Communities from '@/modules/LandingPage/Communities';
import GetStarted from '@/modules/LandingPage/GetStarted';
import HeroPage from '@/modules/LandingPage/HeroPage';
import JoinProgram from '@/modules/LandingPage/JoinProgram';
import WhyWokhive from '@/modules/LandingPage/WhyWokhive';
import Navbar from '@/components/Navbar';

const HomePage: NextPage = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <GetStarted />
      <WhyWokhive />
      <CTA />
      <Communities />
      <JoinProgram />
      <Footer />
    </>
  );
};

export default HomePage;
