// HeroPage.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroPage from '../HeroPage';

describe('HeroPage Component', () => {
  it('renders without crashing', async () => {
    render(<HeroPage />);

    const heading = screen.getByText(/Empower your Freelancing career with wokhive/i);
    expect(heading).toBeInTheDocument();

    const paragraph = screen.getByText(/Connect with new clients, streamline payments/i);
    expect(paragraph).toBeInTheDocument();

    const signUpButton = screen.getByRole('link', { name: /sign up now/i });
    expect(signUpButton).toBeInTheDocument();
  });

  it('displays the main heading', async () => {
    render(<HeroPage />);
    const heading = screen.getByText(/Empower your Freelancing career with wokhive/i);
    expect(heading).toBeInTheDocument();
  });

  it('displays the main paragraph', async () => {
    render(<HeroPage />);
    const paragraph = screen.getByText(/Connect with new clients, streamline payments/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('displays the hero image', async () => {
    render(<HeroPage />);
    const heroImage = screen.getByAltText(/hero/i);
    expect(heroImage).toBeInTheDocument();
  });
});
