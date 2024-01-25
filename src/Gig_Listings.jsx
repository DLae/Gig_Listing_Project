import React, { useState } from 'react';
import Gig from './Gigs';

const GigList = () => {
  const [gigs, setGigs] = useState([
    { id: 1, bandName: 'Awesome Band', imageSrc: 'https://example.com/band-image.jpg', description: 'Join us for an unforgettable night of music!', dateTime: 'January 30, 2024, 7:00 PM', location: 'Concert Hall, City Name' },
    { id: 2, bandName: 'Rocking Band', imageSrc: 'https://example.com/rock-band-image.jpg', description: 'Experience the energy of our live performance!', dateTime: 'February 15, 2024, 8:30 PM', location: 'Arena, Another City' },
    // Add more gigs as needed
  ]);

  const [favoritedGigs, setFavoritedGigs] = useState([]);

  const toggleFavorite = (gigId) => {
    const updatedGigs = gigs.map((gig) =>
      gig.id === gigId ? { ...gig, isFavorited: !gig.isFavorited } : gig
    );

    setGigs(updatedGigs);

    // Update the list of favorited gigs
    const updatedFavoritedGigs = updatedGigs.filter((gig) => gig.isFavorited);
    setFavoritedGigs(updatedFavoritedGigs);
  };

  return (
    <div>
      <h2>Favorited Gigs</h2>
      {favoritedGigs.map((gig) => (
        <Gig key={gig.id} {...gig} onToggleFavorite={() => toggleFavorite(gig.id)} />
      ))}

      <h2>All Gigs</h2>
      {gigs.map((gig) => !gig.isFavorited && <Gig key={gig.id} {...gig} onToggleFavorite={() => toggleFavorite(gig.id)} />)}
    </div>
  );
};

export default GigList;