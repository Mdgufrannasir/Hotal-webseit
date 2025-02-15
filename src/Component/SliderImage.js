import React, { useState, useEffect } from 'react';

const images = [
  `${process.env.PUBLIC_URL}/header.jpg`,
  `${process.env.PUBLIC_URL}/baranti.webp`,
  `${process.env.PUBLIC_URL}/1.jpg`,
];

function SliderImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-96 h-48 overflow-hidden rounded-lg">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-64 object-cover"
      />
    </div>
  );
}

export default SliderImage;
