// CTA.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import CTA from '../CTA';

describe('CTA Component', () => {
  it('renders without crashing', async () => {
    render(<CTA />);

    const mainHeading = screen.getByText(/Take your career to the next level/i);
    expect(mainHeading).toBeInTheDocument();
  });

  it('displays the main heading', async () => {
    render(<CTA />);
    const mainHeading = screen.getByText(/Take your career to the next level/i);
    expect(mainHeading).toBeInTheDocument();
  });

  it('displays the main paragraph', async () => {
    render(<CTA />);
    const mainParagraph = screen.getByText(/Discover new clients and manage your gigs/i);
    expect(mainParagraph).toBeInTheDocument();
  });

  it('displays the Sign up button', async () => {
    render(<CTA />);
    const signUpButton = screen.getByRole('link', { name: /Sign up today/i });
    expect(signUpButton).toBeInTheDocument();
  });

  it('displays the flower images', async () => {
    render(<CTA />);
    const orangeFlowers = screen.getAllByAltText(/cta flower/i);
    expect(orangeFlowers).toHaveLength(4);

    orangeFlowers.forEach((flower) => {
      expect(flower).toBeInTheDocument();
    });
  });
});
