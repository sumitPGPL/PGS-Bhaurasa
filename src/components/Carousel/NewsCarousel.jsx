// NewsCarousel.jsx

import React, { useState, useEffect } from 'react';


const images = [
  'https://placekitten.com/600/300',
  'https://placekitten.com/601/300',
  'https://placekitten.com/602/300',
  // Add more image URLs as needed
];

const NewsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = 5;

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div id="controls-carousel" className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-[375px]">
        {/* Render each carousel item */}
        {[...Array(totalItems)].map((_, index) => (
          <div
            key={index}
            className={`duration-700 ease-linear ${activeIndex === index ? '' : 'opacity-0'}`}
            data-carousel-item={activeIndex === index ? 'active' : undefined}
          >
            <img
              src={`news/${index+1}.jpg`}  // Assuming image filenames start from 1
              className="absolute block w-full   -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="font-bold text-[#0e547e] text-2xl absolute top-0 start-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        &lt; {/* Previous button content */}
      </button>

      <button
        type="button"
        className="absolute text-[#0e547e] font-bold text-2xl top-0 end-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        &gt; {/* Next button content */}
      </button>
    </div>
  );
};

export default NewsCarousel;
