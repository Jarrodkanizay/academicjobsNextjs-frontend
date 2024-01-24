import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type SearchSubmissionMessageProps = {
  status?: string;
  firstName?: string;
  message?: string;
  forceClass?: string;
};

const SearchSubmissionMessage = ({
  status = '',
  firstName = '',
  message = '',
  forceClass = '',
}: SearchSubmissionMessageProps) => {
  const [displaySearchMessage, setDisplaySearchMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplaySearchMessage(false);
    }, 30000);

    return () => clearTimeout(timer); // This will clear the timer if the component unmounts before the 3 seconds are up
  }, []);

  return (
    <>
      {displaySearchMessage ? (
        <div className="flex flex-col items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
            >
              <path
                stroke-dasharray="60"
                stroke-dashoffset="60"
                stroke-opacity=".3"
                d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="1.3s"
                  values="60;0"
                />
              </path>
              <path
                stroke-dasharray="15"
                stroke-dashoffset="15"
                d="M12 3C16.9706 3 21 7.02944 21 12"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.3s"
                  values="15;0"
                />
                <animateTransform
                  attributeName="transform"
                  dur="1.5s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </path>
            </g>
          </svg>
          <p>Searching for your rank!</p>
        </div>
      ) : (
        <>
          {status === 'success' && (
            <div
              className={`w-full flex flex-col gap-1.5 items-start ${forceClass}`}
            >
              <h3>Sorry but we couldn't find your details…</h3>
              <p>
                Please{' '}
                <Link href="/academic-talent-pool" className="link link-aj">
                  register
                </Link>{' '}
                your details and we will get your ranking sorted as soon as
                possible.
              </p>
            </div>
          )}
          {status === 'error' && (
            <div
              className={`w-full flex flex-col gap-1.5 items-start ${forceClass}`}
            >
              {/* Rest of your code */}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SearchSubmissionMessage;
