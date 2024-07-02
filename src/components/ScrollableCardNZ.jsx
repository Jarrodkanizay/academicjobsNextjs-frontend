// components/Carousel.jsx
'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const carouselRef = useRef(null);
  const currentIndex = useRef(0);

  const scrollToItem = (index) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % 5;
      scrollToItem(currentIndex.current);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className="carousel w-full overflow-x-scroll no-scrollbar"
        ref={carouselRef}
      >
        <div className="carousel-item w-[95%] flex flex-col md:flex-row items-start custom-background rounded-xl p-6 mr-2">
          <Image
            src="/blogs/become-a-university-lecturer-earn-115k/become-a-university-lecturer-earn-115k.png"
            className="md:w-1/3 h-[200px] md:h-[420px] mx-auto md:mx-0"
            alt="Carousel item 1"
            width={300}
            height={300}
          />
          <div className="ml-0 md:ml-4 mt-4 md:mt-0 p-6 md:p-16">
            <a href="/become-a-university-lecturer-in-nz-earn-113k">
              <h2 style={{ color: 'white' }}>
                Become a University Lecturer in New Zealand: Earn $113k!
              </h2>
            </a>
            <p className="text-base mb-4 hidden md:block">
              Thinking of becoming a university lecturer in New Zealand?
              Fantastic choice! This career path is not only rewarding but also
              offers numerous opportunities for growth and professional
              development. Let's dive into the steps you need to take, the
              skills you'll need, and what to expect in terms of salary and
              working conditions.
            </p>
            <p className="block text-base mb-4  md:hidden">
              This career path is not only rewarding but also offers numerous
              opportunities for growth and professional development.
            </p>

            <button
              className="btn btn-aj"
              onClick={() =>
                (window.location.href =
                  '/become-a-university-lecturer-in-nz-earn-113k')
              }
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="carousel-item w-[95%] flex flex-col md:flex-row items-start custom-background rounded-xl p-6 mr-2">
          <Image
            src="/blogs/how-to-excel-as-a-research-assistant-in-australia/how-to-excel-as-a-research-assistant-in-australia.png"
            className="md:w-1/3 h-[190px] md:h-[340px] mx-auto md:mx-0"
            alt="Carousel item 2"
            width={200}
            height={200}
          />
          <div className="ml-0 md:ml-4 mt-4 md:mt-0 p-6 md:p-16">
            <a href="/how-to-excel-as-a-research-assistant-in-new-zealand">
              <h2 style={{ color: 'white' }}>
                How to Excel as a Research Assistant in New Zealand
              </h2>
            </a>
            <p className="hidden text-base mb-4  md:block">
              Thinking about a career as a research assistant in New Zealand?
              You’re in the right place! This exciting opportunity provides
              valuable experience and opens doors in both academic and industry
              research.
            </p>
            <p className="hidden text-base mb-4  md:block">
              Here’s everything you need to know to get started and excel as a
              research assistant in New Zealand.
            </p>
            <p className="block text-base mb-4  md:hidden">
              Here’s everything you need to know to get started and excel as a
              research assistant in New Zealand.
            </p>
            <button
              className="btn btn-aj"
              onClick={() =>
                (window.location.href =
                  '/how-to-excel-as-a-research-assistant-in-new-zealand')
              }
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="carousel-item w-[95%] flex flex-col md:flex-row items-start custom-background rounded-xl p-6 mr-2">
          <Image
            src="/blogs/postdoctoral-success-how-to-thrive-in-your-research-role/postdoc-banner.png"
            className="md:w-1/3 h-[200px] md:h-[350px] mx-auto md:mx-0"
            alt="Carousel item 3"
            width={500}
            height={500}
          />
          <div className="ml-0 md:ml-4 mt-4 md:mt-0 p-6 md:p-16">
            <a href="/postdoctoral-success-how-to-thrive-in-your-research-role">
              <h2 style={{ color: 'white' }}>
                Ready for a Postdoc? Here’s How to Stand Out!
              </h2>
            </a>
            <p className="hidden text-base mb-4  md:block">
              Are you nearing the end of your PhD and wondering what the next
              step in your academic career should be? A postdoctoral position
              could be a great way to expand your research expertise and enhance
              your academic credentials. In this article, we’ll dive into what
              it means to be a postdoc, how to secure a position, and how to
              thrive in this role. We’ll also introduce you to a valuable
              resource for finding postdoctoral opportunities.
            </p>
            <p className="block text-base mb-4  md:hidden">
              A postdoctoral position could be a great way to expand your
              research expertise and enhance your academic credentials.
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

        <div className="carousel-item w-[95%] flex flex-col md:flex-row items-start custom-background rounded-xl p-6 mr-2">
          <Image
            src="/blogs/how-to-write-a-winning-academic-cv/cv-banner-image.png"
            className="md:w-1/3 h-[200px] md:h-[410px] mx-auto md:mx-0"
            alt="Carousel item 4"
            width={500}
            height={500}
          />
          <div className="ml-0 md:ml-4 mt-4 md:mt-0 p-6 md:p-16">
            <a href="/how-to-write-a-winning-academic-cv">
              <h2 style={{ color: 'white' }}>
                How to Write a Winning Academic CV
              </h2>
            </a>
            <p className="hidden text-base mb-4  md:block">
              Don’t let your academic resume fall to the bottom of the stack.
              Whether you're aiming for a research position or a teaching role,
              having the right academic resume can make all the difference.
              Here’s how to make sure your resume stands out for you to land
              that perfect academic job.
            </p>
            <p className="block text-base mb-4  md:hidden">
              Here’s how to make sure your resume stands out for you to land
              that perfect academic job.
            </p>
            <button
              className="btn btn-aj"
              onClick={() =>
                (window.location.href = '/how-to-write-a-winning-academic-cv')
              }
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="carousel-item w-[95%] flex flex-col md:flex-row items-start custom-background rounded-xl p-6">
          <Image
            width={1000}
            height={585}
            className="w-full md:max-w-[500px] mx-8 my-auto"
            alt=""
            src="/blogs/how-to-prepare-for-a-job-interview/job-interview.png"
          />

          <div className="ml-0 md:ml-4 mt-4 md:mt-0 p-6 md:p-16">
            <a href="/how-to-prepare-for-a-job-interview">
              <h2 style={{ color: 'white' }}>
                How to prepare for a Job Interview
              </h2>
            </a>
            <p className="text-base mb-4">
              Navigating the interview process for an academic position can be
              daunting. Whether you’re aiming for a role as a lecturer,
              instructor, or other job position, preparation is key.
            </p>
            <p className="block text-base mb-4">
              You can view guides on some common academic job interview
              questions and how to answer them effectively on this page.
            </p>
            <button
              className="btn btn-aj"
              onClick={() =>
                (window.location.href = '/how-to-prepare-for-a-job-interview')
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
        <button onClick={() => scrollToItem(3)} className="btn btn-s">
          4
        </button>
        <button onClick={() => scrollToItem(4)} className="btn btn-s">
          5
        </button>
      </div>
    </div>
  );
};

export default Carousel;
