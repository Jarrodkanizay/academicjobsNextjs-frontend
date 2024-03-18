/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'academicjobs.s3.amazonaws.com',
      'res.cloudinary.com',
      'iloveacademicjobs.com',
      'uniiq.com',
      'www.qut.edu.au',
      'www.academicjobs.com',
      'images.all-free-download.com',
      'dentalstudents.com.au',
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
        source: '/admin',
        destination: '/staff-jobs',
        permanent: true,
      },
      {
        source: '/student',
        destination: '/student-jobs',
        permanent: true,
      },
      
      {
        source: '/employer',
        destination: '/jobs-by-top-universities',
        permanent: true,
      },
      {
        source: '/employers',
        destination: '/jobs-by-top-universities',
        permanent: true,
      },
      {
        source: '/global/employers',
        destination: '/jobs-by-top-universities',
        permanent: true,
      },
      
      {
        source: '/Global/jobs-by-top-universities',
        destination: '/jobs-by-top-universities',
        permanent: true,
      },
      {
        source: '/global/jobs-by-top-universities',
        destination: '/jobs-by-top-universities',
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
        source: '/talent-pool',
        destination: '/academic-talent-pool',
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
        destination: '/employers/macquarie-university/3881',
        permanent: true,
      },
      {
        source: '/position',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/monash-university-jobs',
        destination: '/employers/monash-university/3182/',
        permanent: true,
      },
      {
        source: '/the-university-of-western-australia-jobs',
        destination: '/employers/university-of-western-australia/3173',
        permanent: true,
      },
      {
        source: '/the-university-of-queensland-jobs',
        destination: '/employers/university-of-queensland/3172',
        permanent: true,
      },
      {
        source: '/the-university-of-sydney-jobs',
        destination: '/employers/the-university-of-sydney/3171',
        permanent: true,
      },
      {
        source: '/university-of-new-south-wales-jobs',
        destination: '/employers/university-of-new-south-wales-unsw-/3738',
        permanent: true,
      },
      {
        source: '/the-university-of-adelaide-jobs',
        destination: '/employers/the-university-of-adelaide/3737',
        permanent: true,
      },
      {
        source: '/university-of-technology-sydney-jobs',
        destination: '/employers/university-of-technology-sydney/3864',
        permanent: true,
      },
      {
        source: '/the-university-of-melbourne-jobs',
        destination: '/employers/university-of-melbourne/3170/',
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
        destination: '/employers/australian-national-university/3739',
        permanent: true,
      },
      {
        source: '/categories/culinary-arts-university-jobs',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/categories/educational-psychology-university-jobs',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/categories/electronics-university-jobs',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/categories/medicine-university-jobs',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/categories/sociology-university-jobs',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/categories/teacher-education-middle-school-university-jobs',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/company/3105/university-of-california-berkeley',
        destination: '/jobs-by-top-universities',
        permanent: true,
      },
      {
        source: '/company/3781/tarrant-county-college-district',
        destination: '/jobs-by-top-universities',
        permanent: true,
      },
      {
        source: '/employers/company/deakin-university/3856',
        destination: '/jobs-by-top-universities',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-administration',
        destination: '/employers/bond-university/3785',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-executive',
        destination: '/employers/bond-university/3785',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-human-resources',
        destination: '/employers/bond-university/3785',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-lecturing',
        destination: '/employers/bond-university/3785',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-professor',
        destination: '/employers/bond-university/3785',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-research',
        destination: '/employers/bond-university/3785',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-administration',
        destination: '/employers/harvard-university/3100',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-executive',
        destination: '/employers/harvard-university/3100',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-human-resources',
        destination: '/employers/harvard-university/3100',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-lecturing',
        destination: '/employers/harvard-university/3100',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-professor',
        destination: '/employers/harvard-university/3100',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-research',
        destination: '/employers/harvard-university/3100',
        permanent: true,
      },
      {
        source: '/find-jobs/northern-territory',
        destination: '/australia/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/qut-lecturing',
        destination: '/employers/queensland-university-of-technology-qut-/3786',
        permanent: true,
      },
      {
        source: '/find-jobs/qut-professor',
        destination: '/employers/queensland-university-of-technology-qut-/3786',
        permanent: true,
      },
      {
        source: '/find-jobs/qut-research',
        destination: '/employers/queensland-university-of-technology-qut-/3786',
        permanent: true,
      },
      {
        source: '/find-jobs/qut-university-administration',
        destination: '/employers/queensland-university-of-technology-qut-/3786',
        permanent: true,
      },
      {
        source: '/find-jobs/qut-university-executive',
        destination: '/employers/queensland-university-of-technology-qut-/3786',
        permanent: true,
      },
      {
        source: '/find-jobs/qut-university-human-resources',
        destination: '/employers/queensland-university-of-technology-qut-/3786',
        permanent: true,
      },
      {
        source: '/find-jobs/ucsd-lecturing',
        destination: '/employers/the-university-of-sydney/3171',
        permanent: true,
      },
      {
        source: '/find-jobs/ucsd-professor',
        destination: '/employers/the-university-of-sydney/3171',
        permanent: true,
      },
      {
        source: '/find-jobs/ucsd-research',
        destination: '/employers/the-university-of-sydney/3171',
        permanent: true,
      },
      {
        source: '/find-jobs/ucsd-university-administration',
        destination: '/employers/the-university-of-sydney/3171',
        permanent: true,
      },
      {
        source: '/find-jobs/ucsd-university-executive',
        destination: '/employers/the-university-of-sydney/3171',
        permanent: true,
      },
      {
        source: '/find-jobs/ucsd-university-human-resources',
        destination: '/employers/the-university-of-sydney/3171',
        permanent: true,
      },
      {
        source: '/h/employers/university-of-tasmania/3867',
        destination: '/employers/university-of-tasmania/3867',
        permanent: true,
      },
      {
        source: '/employers/12787/university-of-kwazulu-natal',
        destination: '/employers/university-of-kwazulu-natal/12787',
        permanent: true,
      },
      {
        source: '/position/assistant-professor',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/position/associate-professor',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/position/lab-technician',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/position/other-positions',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/position/postdoc',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/categories/administration',
        destination: '/admin',
        permanent: true,
      },
      {
        source:
          '/blog/how-to-land-your-dream-college-job-a-step-by-step-guide/',
        destination:
          '/career-help/how-to-land-your-dream-college-job-a-step-by-step-guide',
        permanent: true,
      },
      {
        source: '/uk/hr',
        destination: '/uk/hr-jobs',
        permanent: true,
      },
      {
        source: '/uk/hr',
        destination: '/uk/hr-jobs',
        permanent: true,
      },
      // {
      //   source: '/Canada',
      //   destination: '/canada',
      //   permanent: true,
      // },
      // {
      //   source: '/Australia',
      //   destination: '/australia',
      //   permanent: true,
      // },
      // {
      //   source: '/UK',
      //   destination: '/uk',
      //   permanent: true,
      // },
      // {
      //   source: '/Europe',
      //   destination: '/europe',
      //   permanent: true,
      // },
      // {
      //   source: '/USA',
      //   destination: '/usa',
      //   permanent: true,
      // },
      // {
      //   source: '/Asia',
      //   destination: '/asia',
      //   permanent: true,
      // },
      {
        source: '/employers/academic-jobs-australia/3328',
        destination: '/australia',
        permanent: true,
      },
          {
              source: "/employers/academic-jobs-australia/3328",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/executive-assistant-school-of-chemical-engineering/87016",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/senior-advisor-admissions/76036",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/executive-director-princeton-institute-for-international-and-regional-studies/79669",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/laboratory-manager/76413",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/health-sciences-librarian-meridian-8036-/93306",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/life-science-research-professional-1/78678",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/assistant-associate-professor-of-neurology-at-cumc/81175",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/postdoctoral-research-fellow-in-amr-data-analytics/82062",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/part-time-lecturer-positions-2024/81138",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/two-faculty-positions-available-in-the-department-of-statistics-and-data-science-cornell-university/81893",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/lecturer-of-interactive-design/81108",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/assistant-professor-in-law/81709",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/employers/id/81658",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/casual-sessional-tutor-faculty-of-arts-multiple-positions-/79533",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/human-resources-specialist/66603",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/herchel-smith-postdoctoral-fellowships-physics-x-2/81647",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/assistant-professor-in-biomedical-engineering-fall-2024-health-disparities/81783",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/part-time-lecturer-computer-systems-organization/64913",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/research-associate-biomedical-engineering-mechanical-engineering-/62647",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/lead-data-analyst/82013",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/student-adviser/82095",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/visiting-assistant-professor-in-the-history-of-east-asia/81974",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/assistant-associate-teaching-professor-marine-and-environmental-sciences/64221",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/assistant-professor-teaching-stream-social-personality-and-abnormal-psychology/78422",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/payroll-supervisor-rasc-hybrid/61473",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/visiting-assistant-professor-and-faculty-fellow-in-native-and-indigenous-studies/80968",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/employers/id/81354",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/assistant-professor-associate-professor-tenured-associate-professor-professor/65171",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/assistant-associate-professor-in-animation/77717",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/associate-director-talent-development/80879",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/technical-officer-electrical-systems/84131",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/research-assistant-886-pem-tg/70792",
              destination: "/jobs",
              permanent: true
          },
          {
              
      
      source: "/jobs/dean-tandon-school-of-engineering/85139",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/hr-compliance-assistant-total-rewards-hr-compliance-office-of-human-resources/80061",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/research-scientist/81956",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/professor-in-management-organisational-behaviour-/81096",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/the-stan-perron-charitable-foundation-professorial-chair/79986",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/project-scientist-open-rank-drug-discovery-for-glioblastoma-and-other-cns-malignancies/76101",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/employers/id/82101",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/ref-213-24-commercial-development-project-officer-vice-president-infrastructure-and-commercial/87013",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/pro-vice-chancellor-research-/67747",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/expression-of-interest-casual-science-tutors/80404",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/postdoctoral-research-fellow-bmt-gvhd-lung-biology/81959",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/postdoctoral-researcher-computer-science-quantum-networks-and-optimization-cse/79494",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/asst-professor/87613",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/casual-lecturers-in-the-automotive-industry-cdu-tafe-/83562",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/employers/id/81989",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/pdf-centre-for-functional-materials-cfm-/79832",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/lecturer-human-sciences-multiple-positions-/79888",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/hdr-administration-officer/82084",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/orientation-and-transitions-administrator/82001",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/postdoc-in-b-cells-in-allergic-contact-dermatitis-at-leo-foundation-skin-immunology-research-center/68960",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/employers/id/78777",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/early-childhood-education-and-care-academic-opportunities/80315",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/administrative-officer-receptionist/81824",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/postdoctoral-position-in-computer-vision-for-circular-construction/81326",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/postdoctoral-researcher-in-machine-learning/79740",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/employers/id/81807",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/Assistant-Director-for-Student-Programming-(71101)/66802",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/payroll-team-leader/78932",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/employers/id/81836",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/engineering-services-officer-mechanical-/88014",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/lecturer-political-science-and-public-policy/63002",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/research-assistant/85813",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/lecturer-in-food-science-technology/87781",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/instructional-designer/71352",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/tenure-track-assistant-professor-of-machine-learning-in-biology/68725",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/assistant-professor-som-medicine-ft/84880",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/Assistant-Professor-in-Theatre-&-Dance-with-a-focus-on-Designing-Just-Futures/65517",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/clinical-instructor-clinical-professor/73147/",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/Project-Director-DHSI-Grant-Academic-Affairs/75567",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/associate-vice-president-finance-and-human-resources/72917",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/Executive-Officer---Full-time---Permanent---Robina---Gold-Coast/69249/",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/client-services-officer/70860/",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/life-science-research-professional/78674",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/assistant-professor-of-pediatrics-at-cumc-cardiology-non-invasive-imaging-/85850",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/employers/id/78674",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/employers/id/81455",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/jobs/assistant-associate-professor-kidney-transplant-surgeon/95682",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/employers/eastern-new-mexico-university/3534/",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/employers/id/81942",
              destination: "/jobs",
              permanent: true
          },
          // {
          //     source: "/favicon.ico",
          //     destination: "/jobs",
          //     permanent: true
          // },
          {
              source: "/post-job/",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/join-hr-plus/",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/term-of-use/",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/nominate/",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/career-advice/",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/groupof8",
              destination: "/jobs",
              permanent: true
          },
          {
              source: "/USA/faculty/",
              destination: "/usa/faculty",
              permanent: true
          },
          // {
          //     source: "/russelgroup",
          //     destination: "/jobs",
          //     permanent: true
          // },
          // {
          //     source: "/Global/",
          //     destination: "/global",
          //     permanent: true
          // }
          
            {
                source: "/Global/faculty",
                destination: "/faculty",
                permanent: true
            },
            {
                source: "/Global/staff-jobs",
                destination: "/staff-jobs",
                permanent: true
            },
            {
                source: "/Global/graduate",
                destination: "/graduate",
                permanent: true
            },
            {
                source: "/Global/student-jobs",
                destination: "/student-jobs",
                permanent: true
            },
            {
                source: "/Global/hr-jobs",
                destination: "/hr-jobs",
                permanent: true
            },
            {
                source: "/Global/executive",
                destination: "/executive",
                permanent: true
            },
            {
                source: "/Global/phd",
                destination: "/phd",
                permanent: true
            }
        
        

    ];
  },
};
module.exports = nextConfig;
