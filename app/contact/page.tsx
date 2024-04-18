import React from 'react';
import { Metadata, NextPage } from 'next';
import Contact from '@/components/pages/Contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Wokhive for any inquiries or feedback',
};

const ContactPage: NextPage = () => <Contact />;

export default ContactPage;
