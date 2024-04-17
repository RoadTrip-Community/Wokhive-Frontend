// Testimonials.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';

import Testimonials from '../Testimonials';
import { testimonies } from '../../../constants/testimonies';

describe('Testimonials Component', () => {
  it('renders without crashing', () => {
    render(<Testimonials />);

    // Basic check for the presence of some testimonials
    const testimonyText = screen.getAllByText(testimonies[0].testimony);
    expect(testimonyText.length).toBeGreaterThan(0);
  });

  it('displays the title and description', () => {
    render(<Testimonials />);
    const titleText = screen.getByText(/Customer Testimonials/i);
    const descriptionText = screen.getByText(/Join thousand of freelancers who have found success using WokHive/i);

    expect(titleText).toBeInTheDocument();
    expect(descriptionText).toBeInTheDocument();
  });

  it('displays testimonies', () => {
    render(<Testimonials />);

    testimonies.forEach((testimony) => {
      const testimonyText = screen.getAllByText(testimony.testimony);
      expect(testimonyText.length).toBeGreaterThan(0);

      testimonyText.forEach((text) => {
        expect(text).toBeInTheDocument();
      });
    });
  });
});
