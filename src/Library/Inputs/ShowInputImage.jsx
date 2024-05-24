import React, { useState } from 'react';

function ShowInputImage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageInputChange} />
      {selectedImage && (
        <img src={selectedImage} alt="Selected" className='w-64' />
      )}
    </div>
  );
}

export default ShowInputImage;
