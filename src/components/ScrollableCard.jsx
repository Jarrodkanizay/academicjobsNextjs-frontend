// components/Carousel.jsx
'use client';

import { useRef } from 'react';

const Carousel = () => {
  const carouselRef = useRef(null);

  const scrollToItem = (index) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <div
        className="carousel w-full overflow-x-scroll no-scrollbar"
        ref={carouselRef}
      >
        <div className="carousel-item w-[95%] flex flex-col md:flex-row items-start custom-background rounded-xl p-6 mr-2">
          <img
            src="/blogs/become-a-university-lecturer-earn-115k/become-a-university-lecturer-earn-115k.png"
            className="w-full md:w-1/3 h-[300px] md:h-[450px]"
            alt="Carousel item 1"
          />
          <div className="ml-0 md:ml-4 mt-4 md:mt-0 p-6 md:p-16">
            <a href="/become-a-university-lecturer-earn-115k">
              <h2 style={{ color: 'white' }}>
                Become a University Lecturer in Australia: Earn $115k!
              </h2>
            </a>
            <p className="block text-base mb-4">
              Thinking of becoming a university lecturer in Australia? Fantastic
              choice! This career path is not only rewarding but also offers
              numerous opportunities for growth and professional development.
              Let's dive into the steps you need to take, the skills you'll
              need, and what to expect in terms of salary and working
              conditions.
            </p>
            <button
              className="btn btn-aj"
              onClick={() =>
                (window.location.href =
                  '/become-a-university-lecturer-earn-115k')
              }
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="carousel-item w-[95%] flex flex-col md:flex-row items-start custom-background rounded-xl p-6 mr-2">
          <img
            src="/blogs/how-to-excel-as-a-research-assistant-in-australia/how-to-excel-as-a-research-assistant-in-australia.png"
            className="w-full md:w-[45%] h-[300px] md:h-[450px]"
            alt="Carousel item 2"
          />
          <div className="ml-0 md:ml-4 mt-4 md:mt-0 p-6 md:p-16">
            <a href="/how-to-excel-as-a-research-assistant-in-australia">
              <h2 style={{ color: 'white' }}>
                Ready for a Postdoc? Here’s How to Stand Out!
              </h2>
            </a>
            <p className="block text-base mb-4">
               Are you nearing the end of your PhD and wondering what the next step in your academic career should be? A postdoctoral position could be a great way to expand your research expertise and enhance your academic credentials.
            </p>
            <p>In this article, we’ll dive into what it means to be a postdoc, how to secure a position, and how to thrive in this role. We’ll also introduce you to a valuable resource for finding postdoctoral opportunities.</p>
            <button
              className="btn btn-aj"
              onClick={() =>
                (window.location.href =
                  '/how-to-excel-as-a-research-assistant-in-australia')
              }
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="carousel-item w-[95%] flex flex-col md:flex-row items-start custom-background rounded-xl p-6">
          <img
            src="/blogs/postdoctoral-success-how-to-thrive-in-your-research-role/postdoc-banner.png"
            className="w-full md:w-[40%] h-[300px] md:h-[400px]"
            alt="Carousel item 3"
          />
          <div className="ml-0 md:ml-4 mt-4 md:mt-0 p-6 md:p-16">
            <a href="/how-to-excel-as-a-research-assistant-in-australia">
              <h2 style={{ color: 'white' }}>
                Ready for a Postdoc? Here’s How to Stand Out!
              </h2>
            </a>
            <p className="block text-base mb-4">
                Are you nearing the end of your PhD and wondering what the next step in your academic career should be? A postdoctoral position could be a great way to expand your research expertise and enhance your academic credentials.            
                In this article, we’ll dive into what it means to be a postdoc, how to secure a position, and how to thrive in this role. We’ll also introduce you to a valuable resource for finding postdoctoral opportunities.
            </p>
            <button
              className="btn btn-aj"
              onClick={() =>
                (window.location.href =
                  '/postdoctoral-success-how-to-thrive-in-your-research-role')
              }
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <button onClick={() => scrollToItem(0)} className="btn btn-s">
          1
        </button>
        <button onClick={() => scrollToItem(1)} className="btn btn-s">
          2
        </button>
        <button onClick={() => scrollToItem(2)} className="btn btn-s">
          3
        </button>
      </div>
    </div>
  );
};

export default Carousel;
