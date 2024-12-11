import React, { useState } from 'react';

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

const Rating = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleRatingClick = (value) => {
    setSelectedIndex((prevIndex) => (prevIndex === value ? 0 : value));
  };

  const getBackgroundColor = (rating) => {
    if (selectedIndex >= rating.value) {
      switch (rating.color) {
        case 'red':
          return 'bg-[#EC4747]';
        case 'yellow':
          return 'bg-[#F2994A]';
        case 'green':
          return 'bg-[#0D9344]';
        default:
          return 'bg-[#B6B6AF]';
      }
    }
    return 'bg-[#B6B6AF]';
  };

  return (
    <div>
      <div className='flex gap-1'>
        {ratings.map((rating) =>
          <div
            key={rating.value}
            className={`p-1 w-20 text-center cursor-pointer text-white ${getBackgroundColor(rating)}`}
            onClick={() => handleRatingClick(rating.value)}
          >
            {rating.value}
          </div>
        )}
      </div>
      <p className='mt-4'>Your Rating: {selectedIndex}</p>
    </div>
  );
};

export default Rating;
