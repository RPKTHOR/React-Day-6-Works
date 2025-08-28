import React from 'react';
import './TurfCard.css'; // Custom styles

const TurfCard = ({ turf, onAdd }) => (
  <div className="card turf-card shadow-sm mb-4">
    <img
      src={`https://source.unsplash.com/400x200/?turf,sports,${turf.title}`}
      className="card-img-top"
      alt={turf.title}
    />
    <div className="card-body">
      <h5 className="card-title">{turf.title}</h5>
      <p className="card-text">{turf.description}</p>
      <p><strong>Location:</strong> {turf.location}</p>
      <p><strong>Price:</strong> ₹{turf.price}</p>
      <button className="btn btn-primary w-100" onClick={() => onAdd(turf)}>
        Add to Cart
      </button>
    </div>
  </div>
);

export default TurfCard;
