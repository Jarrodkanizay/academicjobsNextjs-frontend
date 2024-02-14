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
        source: '/jobs/construction-manager-jobs',
        destination: '/faculty/construction-building-trades/',
        permanent: true,  
      },
      
    
      {
        source: '/jobs/student-full-time',
        destination: '/student/full-time',
        permanent: true,  
      },
      
      {
        source: '/jobs/chief-technology-officer-jobs',
        destination: '/faculty/information-systems-technology/',
        permanent: true,  
      },
      {
        source: '/jobs/ceo-md-jobs',
        destination: '/faculty/business-management/',
        permanent: true,  
      },
      
      {
        source: '/jobs/student-part-time',
        destination: '/student/part-time',
        permanent: true,  
      },
      {
        source: '/jobs/equity-partner-jobs',
        destination: '/faculty/other-business-specialities',
        permanent: true,  
      },
      
      {
        source: '/jobs/development-director-jobs',
        destination: '/executive/directors',
        permanent: true,  
      },




      {
        source: '/macquarie-university-jobs',
        destination: 'https://www.academicjobs.com/employers/macquarie-university/3881',
        permanent: true,  
      },
      
      {
        source: '/position',
        destination: '/faculty',
        permanent: true,  
      },
      {
        source: '/monash-university-jobs',
        destination: 'https://www.academicjobs.com/employers/monash-university/3182/',
        permanent: true,  
      },
      
      {
        source: '/the-university-of-western-australia-jobs',
        destination: 'https://www.academicjobs.com/employers/university-of-western-australia/3173',
        permanent: true,  
      },
      {
        source: '/the-university-of-queensland-jobs',
        destination: 'https://www.academicjobs.com/employers/university-of-queensland/3172',
        permanent: true,  
      },
      
      {
        source: '/the-university-of-sydney-jobs',
        destination: 'https://www.academicjobs.com/employers/the-university-of-sydney/3171',
        permanent: true,  
      },

      {
        source: '/talent-pool',
        destination: '/academic-talent-pool',
        permanent: true,  
      },
      
      {
        source: '/university-of-new-south-wales-jobs',
        destination: 'https://www.academicjobs.com/employers/university-of-new-south-wales/3738',
        permanent: true,  
      },
      {
        source: '/the-university-of-adelaide-jobs',
        destination: 'https://www.academicjobs.com/employers/the-university-of-adelaide/3737',
        permanent: true,  
      },
      
      {
        source: '/university-of-technology-sydney-jobs',
        destination: 'https://www.academicjobs.com/employers/university-of-technology-sydney/3864',
        permanent: true,  
      },
      {
        source: '/the-university-of-melbourne-jobs',
        destination: 'https://www.academicjobs.com/employers/university-of-melbourne/3170/',
        permanent: true,  
      },
      
      {
        source: '/usa/admin',
        destination: '/usa/staff',
        permanent: true,  
      },
      {
        source: '/post-job',
        destination: '/recruitment',
        permanent: true,  
      },
      
      {
        source: '/australian-national-university-jobs',
        destination: 'https://www.academicjobs.com/employers/australian-national-university/3739',
        permanent: true,  
      },
     






      
      {
          source: 'https://www.academicjobs.com/categories/culinary-arts-university-jobs',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/categories/educational-psychology-university-jobs',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/categories/electronics-university-jobs',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/categories/medicine-university-jobs',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/categories/sociology-university-jobs',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/categories/teacher-education-middle-school-university-jobs',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/company/3105/university-of-california-berkeley',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/company/3781/tarrant-county-college-district',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/employers/company/deakin-university/3856',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/bond-university-administration',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/bond-university-executive',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/bond-university-human-resources',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/bond-university-lecturing',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/bond-university-professor',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/bond-university-research',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/harvard-university-administration',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/harvard-university-executive',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/harvard-university-human-resources',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/harvard-university-lecturing',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/harvard-university-professor',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/harvard-university-research',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/northern-territory',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/qut-lecturing',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/qut-professor',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/qut-research',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/qut-university-administration',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/qut-university-executive',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/qut-university-human-resources',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/ucsd-lecturing',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/ucsd-professor',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/ucsd-research',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/ucsd-university-administration',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/ucsd-university-executive',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/find-jobs/ucsd-university-human-resources',
          destination: '',
          permanent: true,
      },
      {
          source: 'https://www.academicjobs.com/h/employers/university-of-tasmania/3867',
          destination: '',
          permanent: true,
      }
    



      
   
    

    ];
  },
};

module.exports = nextConfig;
