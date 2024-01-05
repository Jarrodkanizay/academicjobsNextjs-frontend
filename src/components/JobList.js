'user client'
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setJob, setId, setStatusId } from '@/app/store/postsSlice';
import Job from './Job';

const JobList = ({ data, nextPage }) => {

  let content;
  const [isOpen, setIsOpen] = useState(false);
  console.log(data);
  content = data.map((job, index) => {
    const { id } = job;
    //console.log(job)
    return (
      <div
        className={`font-bold ${index % 2 === 0 ? 'bg-white p-4' : 'bg-white p-4 py-0'}`}
        onClick={() => {
       
          if (window.innerWidth <= 768) {
            setIsOpen(true);
          }
        }}
        key={index}
      >
        <Job job={job} />
      </div>
    );
  });
  return (
    <div className="overflow-y w-full">
      {content}
      <button
        type="button"
        className="load-more bg-white py-2 px-4 border border-gray-300 rounded-md text-black hover:bg-gray-100"
        onClick={() => nextPage()}
      >
        Load more
      </button>
  
    </div>
  );
};
export default JobList;
