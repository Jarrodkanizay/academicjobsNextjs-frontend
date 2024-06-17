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
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <div className="carousel w-full overflow-x-scroll no-scrollbar" ref={carouselRef}>
        <div className="carousel-item w-[95%]  flex items-start border-4 rounded-xl p-6 mr-2">
          <img src="/blogs/become-a-university-lecturer-earn-115k/become-a-university-lecturer-earn-115k.png" className="w-1/3 h-[450px]" alt="Carousel item 1" />
          <div className="ml-4 p-16">
            <span className="block text-2xl font-bold mb-2">Become a University Lecturer in Australia: Earn $115k!</span>
            <span className="block text-base mb-4">Thinking of becoming a university lecturer in Australia? Fantastic choice! This career path is not only rewarding but also offers numerous opportunities for growth and professional development. Let's dive into the steps you need to take, the skills you'll need, and what to expect in terms of salary and working conditions.</span>
            <button className="px-4 py-2 bg-amber-500 text-white rounded" onClick={() => window.location.href = "/become-a-university-lecturer-earn-115k"}>Learn More</button>
          </div>
        </div>

        <div className="carousel-item w-[95%]  flex items-start border-4 rounded-xl p-6">
          <img src="/blogs/how-to-excel-as-a-research-assistant-in-australia/how-to-excel-as-a-research-assistant-in-australia.png" className="w-[45%] h-[450px]" alt="Carousel item 1" />
          <div className="ml-4 p-16">
            <span className="block text-2xl font-bold mb-2">How to excel as a research assistant in Australia</span>
            <span className="block text-base mb-4">Thinking about a career as a research assistant in Australia? You’re in the right place! This exciting opportunity provides valuable experience and opens doors in both academic and industry research. Here’s everything you need to know to get started and excel as a research assistant in Australia.</span>
            <button className="px-4 py-2 bg-amber-500 text-white rounded" onClick={() => window.location.href = "/how-to-excel-as-a-research-assistant-in-australia"}>Learn More</button>
          </div>
        </div>
        
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <button onClick={() => scrollToItem(0)} className="btn btn-s">1</button>
        <button onClick={() => scrollToItem(1)} className="btn btn-s">2</button>
      </div>
    </div>
  );
};

export default Carousel;
