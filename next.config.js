/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'academicjobs.s3.amazonaws.com',
      'res.cloudinary.com',
      'iloveacademicjobs.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/find-jobs',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/:path',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/hr',
        destination: '/hr-jobs',
        permanent: true,
      },
      {
        source: '/employer',
        destination: '/employers',
        permanent: true,
      },
      {
        source: '/global/employers',
        destination: '/employers',
        permanent: true,
      },
      {
        source: '/global/recruitment',
        destination: '/recruitment',
        permanent: true,
      },
      {
        source: '/global/jobs',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/global',
        destination: '/',
        permanent: true,
      },
      {
        source: '/academic-hub',
        destination: '/career-help',
        permanent: true,
      },
      {
        source: '/jobs/general-manager-jobs',
        destination: '/hr-jobs/generalist-hr',
        permanent: true,  
      },
      {
        source: '/jobs/student-casual',
        destination: '/student/casual',
        permanent: true,  
      },
      {
        source: '/jobs/healthcare-managing-director-jobs',
        destination: '/faculty/healthcare-administration',
        permanent: true,  
      },
      {
        source: '/jobs/healthcare-managing-director-jobs',
        destination: '/faculty/healthcare-administration',
        permanent: true,  
      },
      {
        source: '/jobs/project-delivery-director-jobs',
        destination: '/executive/directors',
        permanent: true,  
      },
      {
        source: '/jobs/head-treasury-jobs',
        destination: '/executive/heads-department-chairs-department-jobs',
        permanent: true,  
      },
      {
        source: '/jobs/head-sustainability-jobs',
        destination: '/faculty/other-science-specialities',
        permanent: true,  
      },
      {
        source: '/jobs/head-sustainability-jobs',
        destination: '/faculty/other-science-specialities',
        permanent: true,  
      },
    ];
  },
};

module.exports = nextConfig;
