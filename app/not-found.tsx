import React from 'react';
import { Metadata, NextPage } from 'next';
import NotFound from '@/components/NotFound';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'Page Not Found',
};

const NotFoundPage: NextPage = () => <NotFound />;

export default NotFoundPage;
