'use client';
import { useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import Link from 'next/link';

const TopJobs = () => {
  const {
    data: jobs,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['job'],
    queryFn: async () => {
      const response = await BaseApi.get(`/getTopJobs`);
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
  });

  const handleButtonClick = (jobId) => {
    // Send event to Google Analytics
    window.gtag('event', 'click', {
      event_category: 'Button Click',
      event_label: `More Info Button Click - ${jobId}`,
    });

    console.log('Button clicked');
  };

  return (
    <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-6">
      {jobs?.length > 0 &&
        jobs.map((job, index) => (
          <div className="card shadow-xl" key={index}>
            <div className="card-body">
              <h3 className="card-title">
                <Link
                  href={`/jobs/${job.company_name}/${job.id}`}
                  className="text-gray-blue font-bold"
                >
                  {job.title}
                </Link>
              </h3>
              <p>
                {job.company_name}
                <br />
                {job.location}
                <br />
                {new Date(job.activation_date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
              <div className="card-actions justify-end m-0">
                <button
                  className="btn btn-aj"
                  onClick={() => {
                    window.open(job.how_to_apply, '_blank');
                    handleButtonClick(job.id);
                  }}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TopJobs;
