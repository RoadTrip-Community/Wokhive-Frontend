import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OurServices from '@/modules/services/ourServices';
import CTA from '../cta';

const Services = () => {
  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-[1440px] mt-6 mb-20 lg:my-24'>
        <OurServices />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Services;
