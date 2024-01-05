'user client'
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setJob, setId, setStatusId } from '@/app/store/postsSlice';
import Job from './Job';

const JobList = ({ data, handlePageChange, page }) => {

  let content;
  const [isOpen, setIsOpen] = useState(false);
  console.log(data);
  content = data.map((job, index) => {
     return (
      <div
        className={`font-bold ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}
        key={index}
      >
        <Job job={job} />
      </div>
    );
  });
  return (
    <div className="overflow-y w-full">
      {content}
      
      <button onClick={() => handlePageChange('prev')} disabled={page === 0}>
        Previous Page
      </button>
      <span>Current Page: {page + 1}</span>
      <button
        onClick={() => {
          //if (!isPlaceholderData && data.hasMore) {
            handlePageChange('next')
          //}//
        }}
        // Disable the Next Page button until we know a next page is available
        //disabled={isPlaceholderData || !data?.hasMore}
      >
        Next Page
      </button>
  
    </div>
  );
};
export default JobList;
