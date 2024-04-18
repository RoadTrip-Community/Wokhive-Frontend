// Communities.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Communities from '../Communities';

describe('Communities Component', () => {
  it('renders without crashing', async () => {
    render(<Communities />);

    const mainHeading = screen.getByText(/Connecting Talents and Communities alike/i);
    expect(mainHeading).toBeInTheDocument();
  });

  it('displays the main heading', async () => {
    render(<Communities />);
    const mainHeading = screen.getByText(/Connecting Talents and Communities alike/i);
    expect(mainHeading).toBeInTheDocument();
  });

  it('displays the main paragraph', async () => {
    render(<Communities />);
    const mainParagraph = screen.getByText(
      /We partner with communities to give more talents access to global opportunities/i,
    );
    expect(mainParagraph).toBeInTheDocument();
  });

  it('displays the community logos', async () => {
    render(<Communities />);
    const paystackLogos = screen.getAllByAltText('paystack');
    expect(paystackLogos).toHaveLength(3);
  });

  it('displays the community names', async () => {
    render(<Communities />);
    const communityNames = screen.getByText(/Roadtrip Community and lots more/i);
    expect(communityNames).toBeInTheDocument();
  });

  it('displays the Sign up paragraph', async () => {
    render(<Communities />);
    const signUpParagraph = screen.getByText(/Sign up today and get the full community experience/i);
    expect(signUpParagraph).toBeInTheDocument();
  });

  it('displays the Sign up button', async () => {
    render(<Communities />);
    const signUpButton = screen.getByRole('link', { name: /Sign up/i });
    expect(signUpButton).toBeInTheDocument();
  });
});
