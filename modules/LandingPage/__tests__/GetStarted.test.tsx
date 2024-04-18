// GetStarted.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import GetStarted from '../GetStarted';

describe('GetStarted Component', () => {
  it('renders without crashing', async () => {
    render(<GetStarted />);

    const mainText = screen.getByText(/Effortlessly manage your contacts/i);
    expect(mainText).toBeInTheDocument();
  });

  it('displays the main paragraph', async () => {
    render(<GetStarted />);
    const paragraph = screen.getByText(/Effortlessly manage your contacts/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('displays the first feature', async () => {
    render(<GetStarted />);
    const featureHeading = screen.getByText(/Integrated payment processing system/i);
    expect(featureHeading).toBeInTheDocument();
  });

  it('displays the second feature', async () => {
    render(<GetStarted />);
    const featureHeading = screen.getByText(/Seamless Freelancer - Client collaboration/i);
    expect(featureHeading).toBeInTheDocument();
  });

  it('displays the third feature', async () => {
    render(<GetStarted />);
    const featureHeading = screen.getByText(/Progress tracking and performance analytics/i);
    expect(featureHeading).toBeInTheDocument();
  });

  it('displays the first feature description', async () => {
    render(<GetStarted />);
    const featureDescription = screen.getByText(
      /Organise and send invoices, process payments and manage transactions with Wokhive./i,
    );
    expect(featureDescription).toBeInTheDocument();
  });

  it('displays the second feature description', async () => {
    render(<GetStarted />);
    const featureDescription = screen.getByText(
      /Sync communication, manage reviews and keep up with timelines all from the same place./i,
    );
    expect(featureDescription).toBeInTheDocument();
  });

  it('displays the third feature description', async () => {
    render(<GetStarted />);
    const featureDescription = screen.getByText(
      /View your project statistics, get insights and track your performance all at once./i,
    );
    expect(featureDescription).toBeInTheDocument();
  });
});
