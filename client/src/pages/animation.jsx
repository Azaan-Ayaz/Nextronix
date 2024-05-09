import React, { useState, useEffect } from 'react';

const AnimatedTextLoop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    "Are you interested in getting tailor-made software that perfectly fits your organization's needs?",
    "Do you have a desire to make informed decisions from gathered data?",
    "Are you in search of a reliable software solution?"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % texts.length);
    }, 5000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {texts.map((text, index) => (
        <p key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default AnimatedTextLoop;
