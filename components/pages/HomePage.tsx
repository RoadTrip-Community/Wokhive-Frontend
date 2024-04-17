import React from 'react';
import Footer from '@/components/Footer';
import CTA from '@/modules/LandingPage/CTA';
import Communities from '@/modules/LandingPage/Communities';
import GetStarted from '@/modules/LandingPage/GetStarted';
import HeroPage from '@/modules/LandingPage/HeroPage';
import JoinProgram from '@/modules/LandingPage/JoinProgram';
import Testimonials from '@/modules/LandingPage/Testimonials';
import WhyWokhive from '@/modules/LandingPage/WhyWokhive';
import Navbar from '@/components/Navbar';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <GetStarted />
      <WhyWokhive />
      <CTA />
      <Communities />
      <Testimonials />
      <JoinProgram />
      <Footer />
    </>
  );
};

export default HomePage;
