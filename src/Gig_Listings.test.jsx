import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Gig from './Gig_Listings';

test('renders Gig component with correct props', () => {
  const props = {
    bandName: 'Test Band',
    imageSrc: 'https://example.com/test-band-image.jpg',
    description: 'Test event description',
    dateTime: 'February 28, 2024, 6:45 PM',
    location: 'Test Venue, Test City',
  };

  render(<Gig {...props} />);

  expect(screen.getByText(props.bandName)).toBeInTheDocument();
  expect(screen.getByAltText(`${props.bandName} Image`)).toBeInTheDocument();
  expect(screen.getByText(props.description)).toBeInTheDocument();
  expect(screen.getByText(`Date and Time: ${props.dateTime}`)).toBeInTheDocument();
  expect(screen.getByText(`Location: ${props.location}`)).toBeInTheDocument();
});