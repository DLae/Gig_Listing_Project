import React from 'react';
import PropTypes from 'prop-types';
import './Gig.css';

const Gig = ({ bandName, imageSrc, description, dateTime, location, isFavorited, onToggleFavorite }) => {
  return (
    <div className="gig-container">
      <h3 className="band-name">{bandName}</h3>
      <img className="band-image" src={imageSrc} alt={`${bandName} Image`} />
      <p className="event-description">{description}</p>
      <p className="event-info">Date and Time: {dateTime}</p>
      <p className="event-info">Location: {location}</p>

      <button className={`favorite-button ${isFavorited ? 'favorited' : ''}`} onClick={onToggleFavorite}>
        {isFavorited ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
};

Gig.propTypes = {
  bandName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default Gig;