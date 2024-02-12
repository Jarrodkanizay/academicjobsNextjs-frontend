'user client';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setJob, setId, setStatusId } from '@/app/store/postsSlice';
import Job from './Job';

const JobList = ({ data, handlePageChange, page, isPlaceholderData }) => {
  let content;
  const [isOpen, setIsOpen] = useState(false);
  console.log(data);
  content = data.jobs.map((job, index) => {
    return (
      <div
        className={`font-bold ${index % 2 === 0 ? 'bg-white' : 'bg-white'}`}
        key={index}
      >
        <Job job={job} />
      </div>
    );
  });
  return (
    <>
      {content}
      <div className="flex justify-center gap-4 pt-8 text-white ">
        <button
          className={page === 0 ? 'hidden' : ' font-bold block bg-sky-500 rounded-3xl py-2'}
          onClick={() => handlePageChange('prev')}
          disabled={page === 0}
        >
          ◀ 
        </button>
        <span className={`bg-sky-500 rounded-3xl px-2 ${page === 0 ? 'hidden' : 'block'}`}>
           {page + 1}
        </span>
        <button
          onClick={() => {
            if (!isPlaceholderData && data.hasMore) {
              handlePageChange('next');
            }
          }}
          className={`${
            isPlaceholderData || !data?.hasMore ? 'hidden' : 'font-bold block bg-sky-500 rounded-3xl py-2'
          }`}
          disabled={isPlaceholderData || !data?.hasMore}
        >
         ▶
        </button>
      </div>
    </>
  );
};
export default JobList;
