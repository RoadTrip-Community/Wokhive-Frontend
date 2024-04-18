// Testimony.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimony from '../Testimony';

const sampleTestimony = {
  testimony: 'Wokhive has revolutionized how I manage my gigs and find new clients',
  name: 'John Doe',
  role: 'Freelance writer',
};

describe('Testimony Component', () => {
  it('renders without crashing', () => {
    render(<Testimony {...sampleTestimony} />);

    const testimonyText = screen.getByText(/Wokhive has revolutionized how I manage my gigs and find new clients/i);
    expect(testimonyText).toBeInTheDocument();
  });

  it('displays the testimony text', () => {
    render(<Testimony {...sampleTestimony} />);
    const testimonyText = screen.getByText(/Wokhive has revolutionized how I manage my gigs and find new clients/i);
    expect(testimonyText).toBeInTheDocument();
  });

  it('displays the name', () => {
    render(<Testimony {...sampleTestimony} />);
    const nameText = screen.getByText(/John Doe/i);
    expect(nameText).toBeInTheDocument();
  });

  it('displays the role', () => {
    render(<Testimony {...sampleTestimony} />);
    const roleText = screen.getByText(/Freelance writer/i);
    expect(roleText).toBeInTheDocument();
  });
});
