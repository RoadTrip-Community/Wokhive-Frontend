// WhyWokhive.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import WhyWokhive from '../WhyWokhive';

describe('WhyWokhive Component', () => {
  it('renders without crashing', async () => {
    render(<WhyWokhive />);

    const mainHeading = screen.getByText(/Why use Wokhive/i);
    expect(mainHeading).toBeInTheDocument();

    const mainParagraph = screen.getByText(/Freelancers are switching to Wokhive for these benefits and more/i);
    expect(mainParagraph).toBeInTheDocument();
  });

  it('displays the community feature', async () => {
    render(<WhyWokhive />);
    const communityHeading = screen.getByText(/A community driven experience/i);
    expect(communityHeading).toBeInTheDocument();
  });

  it('displays the organize contracts feature', async () => {
    render(<WhyWokhive />);
    const organizeContractsHeadings = screen.getAllByText(/Organise your contracts easily/i);
    expect(organizeContractsHeadings).toHaveLength(2);

    organizeContractsHeadings.forEach((heading) => {
      expect(heading).toBeInTheDocument();
    });
  });

  it('displays the gigs feature', async () => {
    render(<WhyWokhive />);
    const gigsHeading = screen.getByText(/Get and manage gigs all from one place/i);
    expect(gigsHeading).toBeInTheDocument();
  });

  it('displays the community feature description', async () => {
    render(<WhyWokhive />);
    const communityDescriptions = screen.getAllByText(
      /Get connected to communities and improve your network to make your freelancing journey easier/i,
    );
    expect(communityDescriptions.length).toBeGreaterThan(0);

    communityDescriptions.forEach((description) => {
      expect(description).toBeInTheDocument();
    });
  });
});

it('displays the community image', async () => {
  render(<WhyWokhive />);
  const communityImage = screen.getByAltText(/community/i);
  expect(communityImage).toBeInTheDocument();
});

it('displays the contracts image', async () => {
  render(<WhyWokhive />);
  const contractsImage = screen.getByAltText(/contract/i);
  expect(contractsImage).toBeInTheDocument();
});
