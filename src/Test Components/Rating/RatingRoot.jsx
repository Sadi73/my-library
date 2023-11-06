import React, { useState } from 'react';
import './RatingRoot.css';

const RatingRoot = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const ratings = [
    { value: 1, color: 'red' },
    { value: 2, color: 'red' },
    { value: 3, color: 'red' },
    { value: 4, color: 'red' },
    { value: 5, color: 'yellow' },
    { value: 6, color: 'yellow' },
    { value: 7, color: 'yellow' },
    { value: 8, color: 'green' },
    { value: 9, color: 'green' },
    { value: 10, color: 'green' },
  ];

  const handleRatingClick = (value) => {
    setSelectedIndex((prevIndex) => (prevIndex === value ? null : value));
  };

  return (
    <div>
      <div className='flex gap-1 '>
        {ratings.map((rating) => (
          <div
            key={rating.value}
            className={selectedIndex >= rating.value ? `selected-${rating.color} w-24 ` : 'not-selected w-24'}
            onClick={() => handleRatingClick(rating.value)}
          >
            {rating.value}
          </div>
        ))}
      </div>
      <div>Your Rating: {selectedIndex}</div>
    </div>
  );
};

export default RatingRoot;
