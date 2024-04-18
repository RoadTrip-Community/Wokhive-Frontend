import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import AboutUs from '@/modules/about/AboutUs';
import WhyWokhive from '@/modules/about/whyWokhive';
import OurTeam from '@/modules/about/ourTeam';
import CTA from '../cta';

const About = () => {
  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-[1440px] mt-6 mb-20 lg:my-24'>
        <AboutUs />
        <WhyWokhive />
        <OurTeam />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default About;
