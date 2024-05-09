import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      text: "I'm extremely satisfied with the web development services provided by their team. They turned my vision into reality with a stunning and user-friendly website. Their attention to detail and technical expertise are truly impressive. I highly recommend their web development services!",
      image: "elcat.png"
    },
    {
      text: "Thanks to their digital marketing expertise, our online presence has skyrocketed! Their strategies have boosted our website traffic and conversions, resulting in significant business growth",
      image: "consultant.png"
    },
    {
      text: "Working with their digital marketing team has been a game-changer for us. They've consistently delivered exceptional results, exceeding our expectations. Their deep understanding of our target audience and creative campaigns have helped us connect with customers on a whole new level",
      image: "ndc.png"
    },
    {
      text: "We couldn't be happier with the lead generation services provided by their team. They've helped us optimize our lead generation campaigns, resulting in a higher conversion rate and improved ROI. Their data-driven approach and attention to detail have made a significant impact on our business",
      image: "rhouse.png"
    },
    {
      text: "We highly recommend their marketing plan and strategies. They have a keen eye for detail and a strategic mindset that has transformed our marketing approach. Their ability to identify new opportunities and implement effective strategies has led to significant growth for our business",
      image: "fortune.png"
    },
    {
      text: "I can't thank their SEO team enough for their incredible work. They have propelled our website to the top of search engine rankings, resulting in a significant increase in organic traffic. Their expertise and attention to detail are unmatched!",
      image: "needs.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(current => (current + 2) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden mx-4 mt-9">
      <div className="flex" style={{ transform: `translateX(-${currentIndex * 50}%)`, transition: 'transform 0.5s ease' }}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center text-center bg-gray-100 rounded-lg p-8 border border-gray-300 mr-4"
            style={{ minWidth: '50%' }}
          >
            <div className="mb-4">{testimonial.text}</div>
            <img src={testimonial.image} alt="avatar" className="w-28 h-20" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
