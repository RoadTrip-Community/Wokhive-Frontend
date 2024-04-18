// JoinProgram.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import JoinProgram from '../JoinProgram';

describe('JoinProgram Component', () => {
  it('renders without crashing', () => {
    render(<JoinProgram />);

    // Basic check for the presence of some elements
    const titleText = screen.getByText(/Join Wokhive’s Early Access Program/i);
    const descriptionText = screen.getByText(
      /Become one of our first few members and get access to exclusive deals, test new features and more/i,
    );
    const emailInput = screen.getByPlaceholderText(/Enter your email address/i);
    const joinButton = screen.getByText(/Join the program/i);

    expect(titleText).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(joinButton).toBeInTheDocument();
  });
});
