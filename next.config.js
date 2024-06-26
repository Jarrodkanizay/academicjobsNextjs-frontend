// cSpell:disable
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   'lh3.googleusercontent.com',
    //   'academicjobs.s3.amazonaws.com',
    //   'res.cloudinary.com',
    //   'iloveacademicjobs.com',
    //   'uniiq.com',
    //   'www.qut.edu.au',
    //   'www.academicjobs.com',
    //   'images.all-free-download.com',
    //   'dentalstudents.com.au',
    // ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'academicjobs.s3.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'iloveacademicjobs.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'uniiq.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.qut.edu.au',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.academicjobs.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.all-free-download.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'dentalstudents.com.au',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/jobs-advanced-search',
        destination: '/university-jobs',
        permanent: true,
      },
      {
        source: '/career-help',
        destination: '/higher-ed-jobs-advice',
        permanent: true,
      },
      {
        source: '/career-help/:slug',
        destination: '/higher-ed-jobs-advice/:slug',
        permanent: true,
      },
      {
        source: '/academic-talent-pool',
        destination: '/auth/signup-talent-pool',
        permanent: true,
      },
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
      // {
      //   source: '/admin',
      //   destination: '/staff-jobs',
      //   permanent: true,
      // },
      {
        source: '/student',
        destination: '/student-jobs',
        permanent: true,
      },
      // {
      //   source: '/employer',
      //   destination: '/jobs-by-top-universities',
      //   permanent: true,
      // },
      // {
      //   source: '/employers',
      //   destination: '/jobs-by-top-universities',
      //   permanent: true,
      // },
      // {
      //   source: '/global/employers',
      //   destination: '/jobs-by-top-universities',
      //   permanent: true,
      // },
      // {
      //   source: '/Global/jobs-by-top-universities',
      //   destination: '/jobs-by-top-universities',
      //   permanent: true,
      // },
      // {
      //   source: '/global/jobs-by-top-universities',
      //   destination: '/jobs-by-top-universities',
      //   permanent: true,
      // },
      {
        source: '/employer',
        destination: '/university-rankings',
        permanent: true,
      },
      {
        source: '/employers',
        destination: '/university-rankings',
        permanent: true,
      },
      {
        source: '/global/employers',
        destination: '/university-rankings',
        permanent: true,
      },
      {
        source: '/Global/university-rankings',
        destination: '/university-rankings',
        permanent: true,
      },
      {
        source: '/global/university-rankings',
        destination: '/university-rankings',
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
        destination: '/student-jobs/casual',
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
        destination: '/student-jobs/full-time',
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
        destination: '/student-jobs/part-time',
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
      // {
      //   source: '/usa/admin',
      //   destination: '/usa/staff',
      //   permanent: true,
      // },
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
      //   source: "/jobs?q=&l=australia",
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
        source:
          '/jobs/executive-assistant-school-of-chemical-engineering/87016',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/senior-advisor-admissions/76036',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/executive-director-princeton-institute-for-international-and-regional-studies/79669',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/laboratory-manager/76413',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/health-sciences-librarian-meridian-8036-/93306',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/life-science-research-professional-1/78678',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/assistant-associate-professor-of-neurology-at-cumc/81175',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/postdoctoral-research-fellow-in-amr-data-analytics/82062',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/part-time-lecturer-positions-2024/81138',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/two-faculty-positions-available-in-the-department-of-statistics-and-data-science-cornell-university/81893',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/lecturer-of-interactive-design/81108',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/assistant-professor-in-law/81709',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employers/id/81658',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/casual-sessional-tutor-faculty-of-arts-multiple-positions-/79533',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/human-resources-specialist/66603',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/herchel-smith-postdoctoral-fellowships-physics-x-2/81647',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/assistant-professor-in-biomedical-engineering-fall-2024-health-disparities/81783',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/part-time-lecturer-computer-systems-organization/64913',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/research-associate-biomedical-engineering-mechanical-engineering-/62647',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/lead-data-analyst/82013',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/student-adviser/82095',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/visiting-assistant-professor-in-the-history-of-east-asia/81974',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/assistant-associate-teaching-professor-marine-and-environmental-sciences/64221',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/assistant-professor-teaching-stream-social-personality-and-abnormal-psychology/78422',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/payroll-supervisor-rasc-hybrid/61473',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/visiting-assistant-professor-and-faculty-fellow-in-native-and-indigenous-studies/80968',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employers/id/81354',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/assistant-professor-associate-professor-tenured-associate-professor-professor/65171',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/assistant-associate-professor-in-animation/77717',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/associate-director-talent-development/80879',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/technical-officer-electrical-systems/84131',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/research-assistant-886-pem-tg/70792',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/dean-tandon-school-of-engineering/85139',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/hr-compliance-assistant-total-rewards-hr-compliance-office-of-human-resources/80061',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/research-scientist/81956',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/professor-in-management-organisational-behaviour-/81096',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/the-stan-perron-charitable-foundation-professorial-chair/79986',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/project-scientist-open-rank-drug-discovery-for-glioblastoma-and-other-cns-malignancies/76101',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employers/id/82101',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/ref-213-24-commercial-development-project-officer-vice-president-infrastructure-and-commercial/87013',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/pro-vice-chancellor-research-/67747',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/expression-of-interest-casual-science-tutors/80404',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/postdoctoral-research-fellow-bmt-gvhd-lung-biology/81959',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/postdoctoral-researcher-computer-science-quantum-networks-and-optimization-cse/79494',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/asst-professor/87613',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/casual-lecturers-in-the-automotive-industry-cdu-tafe-/83562',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employers/id/81989',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/pdf-centre-for-functional-materials-cfm-/79832',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/lecturer-human-sciences-multiple-positions-/79888',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/hdr-administration-officer/82084',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/orientation-and-transitions-administrator/82001',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/postdoc-in-b-cells-in-allergic-contact-dermatitis-at-leo-foundation-skin-immunology-research-center/68960',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employers/id/78777',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/early-childhood-education-and-care-academic-opportunities/80315',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/administrative-officer-receptionist/81824',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/postdoctoral-position-in-computer-vision-for-circular-construction/81326',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/postdoctoral-researcher-in-machine-learning/79740',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employers/id/81807',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/Assistant-Director-for-Student-Programming-(71101)/66802',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/payroll-team-leader/78932',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employers/id/81836',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/engineering-services-officer-mechanical-/88014',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/lecturer-political-science-and-public-policy/63002',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/research-assistant/85813',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/lecturer-in-food-science-technology/87781',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/instructional-designer/71352',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/tenure-track-assistant-professor-of-machine-learning-in-biology/68725',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/assistant-professor-som-medicine-ft/84880',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/Assistant-Professor-in-Theatre-&-Dance-with-a-focus-on-Designing-Just-Futures/65517',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/clinical-instructor-clinical-professor/73147',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/Project-Director-DHSI-Grant-Academic-Affairs/75567',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/associate-vice-president-finance-and-human-resources/72917',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/Executive-Officer---Full-time---Permanent---Robina---Gold-Coast/69249',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/client-services-officer/70860',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/life-science-research-professional/78674',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/assistant-professor-of-pediatrics-at-cumc-cardiology-non-invasive-imaging-/85850',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employers/id/78674',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employers/id/81455',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/assistant-associate-professor-kidney-transplant-surgeon/95682',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employers/eastern-new-mexico-university/3534',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employers/id/81942',
        destination: '/jobs',
        permanent: true,
      },
      // {
      //     source: "/favicon.ico",
      //     destination: "/jobs",
      //     permanent: true
      // },
      {
        source: '/post-job',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/join-hr-plus',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/term-of-use',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/nominate',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/career-advice',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/groupof8',
        destination: '/jobs',
        permanent: true,
      },
      // {
      //     source: "/USA/faculty",
      //     destination: "/usa/faculty",
      //     permanent: true
      // },
      // {
      //     source: "/russelgroup",
      //     destination: "/jobs",
      //     permanent: true
      // },
      // {
      //     source: "/Global",
      //     destination: "/global",
      //     permanent: true
      // }
      {
        source: '/Global/faculty',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/Global/industry',
        destination: '/industry',
        permanent: true,
      },
      {
        source: '/Global/staff-jobs',
        destination: '/staff-jobs',
        permanent: true,
      },
      {
        source: '/Global/graduate',
        destination: '/graduate',
        permanent: true,
      },
      {
        source: '/Global/student-jobs',
        destination: '/student-jobs',
        permanent: true,
      },
      {
        source: '/Global/hr-jobs',
        destination: '/hr-jobs',
        permanent: true,
      },
      {
        source: '/Global/executive',
        destination: '/executive',
        permanent: true,
      },
      {
        source: '/Global/phd',
        destination: '/phd',
        permanent: true,
      },
      {
        source: '/Global/admin',
        destination: '/admin',
        permanent: true,
      },
      // {
      //     source: "/company/3460/tufts-university",
      //     destination: "/employers/tufts-university/3460",
      //     permanent: true
      // },
      {
        source: '/employers/tarneit-p-9-college/16039',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/online-education-designer/86938',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/:slug*/66803',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/research-fellow/84620',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/temporary-teaching-assistant/85764',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employers/jarrod-kanizay/13553/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/administration-officer-student-placements/90602',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/assistant-or-associate-professor-of-industrial-engineering-and-operations-research/85636',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/business-manager/84384',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/provost/69027',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/clinical-assistant-professor-in-the-nyu-teacher-residency-new-york-city-and-at-nyu-ny-non-tenure-track-teaching-and-learning-social-studies-education/62352',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/open-rank-in-school-counseling-psychology/64801',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/executive-director-of-development-haas-school-of-business/61088',
        destination: '/jobs',
        permanent: true,
      },
      // {
      //     source: "/jobs/College-of-Veterinary-Medicine:-Open-Rank-Academic-(NTT-or-TT)---Equine-Emergency-Services/66803",
      //     destination: "/jobs",
      //     permanent: true
      // },
      {
        source: '/jobs/client-services-officer/70860',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/executive-officer---full-time---permanent---robina---gold-coast/69249',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/hr-generalist/63870',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/director-of-alumni-engagement/72223',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/postdoctoral-fellow-in-structural-optimisation/81531',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/postdoctoral-research-fellow/81528',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/Assistant-Director-for-Student-Programming-(71101)/66802',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/senior-technician-physics/85115',
        destination: '/jobs',
        permanent: true,
      },
      // {
      //     source: "/jobs/college-of-veterinary-medicine:-open-rank-academic-(ntt-or-tt)---equine-emergency-services/66803",
      //     destination: "/jobs",
      //     permanent: true
      // },
      {
        source:
          '/jobs/clinical-assistant-professor-associate-professor-professor-oral-medicine-/85628',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/Assistant-Associate-Professor,-Fall-2024---Artificial-Intelligence-in-Aerospace-Engineering/70907',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/assistant-director-for-student-programming-(71101)/66802',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/exploring-the-global-landscape-of-academic-jobs-opportunities-and-challenges/75158',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/senior-engineer-student-systems/79896',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/senior-hr-business-partner/71879',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/faculty-positions/81656',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/student-ambassador/80283',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/assistant-associate-professor,-fall-2024---artificial-intelligence-in-aerospace-engineering/70907',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/assistant-professor-in-theatre-&-dance-with-a-focus-on-designing-just-futures/65517',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/postdoctoral-researcher-for-in-vivo-brain-imaging-m-f-x-/66377',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/research-associate/81957',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/business-manager-industry-research/84148',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/technical-officer-electrical-systems/84131',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/assistant-professor-of-criminal-justice/72192',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/jobs/associate-professor-materials-science-and-engineering-/80781',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobs/technical-associate-i/81468',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/victoria-university-of-wellington/3807/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/stellenbosch-university/13008/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/khalifa-university-uae/8481/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/academic-hub/seek-all-bond-university-jobs-here/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/countries/jobs-in-australia/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/31945/assistant-associate-professor-of-chemical-and-biological-engineering/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/22957/research-scientist-professors-johannes-stroebel-and-theresa-kuchler/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/41831/assistant-professor-biostatistics/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobSearch1/electronics/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/25594/research-assistant-in-veterinary-pharmacology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/28619/research-scientist-in-the-water-research-center-dr-nidal-hilal/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobSearch1/fire-science/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobSearch1/cosmetology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/45045/casual-nursing-and-midwifery-practice-educators/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/career-advice/exploring-the-global-landscape-of-academic-jobs-opportunities-and-challenges/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/womens-gender-studies',
        destination: '/jobs',
        permanent: true,
      },
      // {
      //   source: '/Global/hr-jobs',
      //   destination: '/jobs',
      //   permanent: true,
      // },
      // {
      //   source: '/Global/faculty',
      //   destination: '/jobs',
      //   permanent: true,
      // },
      // {
      //   source: '/Global/phd',
      //   destination: '/jobs',
      //   permanent: true,
      // },
      // {
      //   source: '/Global/executive',
      //   destination: '/jobs',
      //   permanent: true,
      // },
      // {
      //   source: '/Global/graduate',
      //   destination: '/jobs',
      //   permanent: true,
      // },
      // {
      //   source: '/Global/staff-jobs',
      //   destination: '/jobs',
      //   permanent: true,
      // },
      {
        source: '/jobSearch1/school-psychology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/linguistics/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/biological',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/dental-hygienists-assistants',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/11475/lecturer-senior-lecturer-in-cell-and-developmental-biology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/65593/senior-timetabling-and-examinations-officer/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/63058/part-time-lecturer-in-religious-leadership-and-chaplaincy/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/company/3162/mcgill-university/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/12636/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/11384/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/curriculum-instruction',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/law',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/other-communications-specialities',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/broadcast-journalism',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/counselor/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/interior-design',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/agricultural-economics-agribusiness',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/communications',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/teacher-education',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/science',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/communication-sciences-and-disorders',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/electrical',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/educational-psychology',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/physical-therapy',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/health-education-promotion',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/anthropology',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/medical-research/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobSearch1/medical-research/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/jobSearch1/history/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/other-engineering-specialities/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/academic-hub/seek-all-qut-university-jobs-here/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/biochemistry-molecular-biology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/marketing-sales/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/28235/research-specialist-i/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/61220/research-study-assistant-fixed-duration-temporary/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/28082/research-fellow-energy-storage/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/28171/research-associate-heterogeneous-integration/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/id/68309',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/60557/lecturer-in-environmental-law-and-sustainability/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/27012/senior-lecturer-in-surgery/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/60968/senior-research-specialist/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/id/72093',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/32647/senior-research-fellow-in-machine-learning-for-weather-and-climate-science/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/49706/assistant-professor-in-ecological-restoration-and-management/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/16858/research-assistant-position-in-neuroplasticity-and-regeneration/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/21679/research-assistant-innate-immunity-and-cell-death-signalling/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/22138/head-of-biology-professorial-research-fellow/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/30647/adjunct-instructor-part-time-multiple-specializations-department-of-business-administration-gies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/40950/research-assistant-associate-in-development-and-use-of-optical-microscopy-to-study-battery-materials/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/59529/research-and-teaching-assistants-phd-candidates-in-financial-and-sustainability-reporting-m-f-x/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/27391/postdoctoral-fellow-with-the-life-lab-digital-data-and-design-institute-harvard-university/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/categories/faculty-communications/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/28198/senior-clinical-research-specialist-ortho-research/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/categories/technical-career/massage-therapy/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/education/school-psychology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/57332/library-officer/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/19897/researcher-i-som-cell-and-molecular-biology-ft/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/academic-hub/seek-all-qut-university-careers-here/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/telecommunications/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/academic-hub/top-academic-jobs-australia/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/14264/senior-research-scientist-cancer-science-institute/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/26068/research-fellow/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/14109/research-assistant-in-energy-studies-institute-international-security-of-supply/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/20119/jordan-center-summer-fellowship-in-support-of-russia-related-internships-and-research/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/other-health-sciences-specialities/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/39857/research-assistant-ann-mcpherson-fellowship/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/42899/part-time-faculty-water-technology-and-wastewater-treatment/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/56535/visiting-scholar-or-fellow-davis-center-for-russian-and-eurasian-studies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/56773/visiting-assistant-professor-video-and-time-based-media/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/school-psychology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/photography/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/journalism/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/teacher-education/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/history/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/43758/assistant-professor-science-based-solutions-to-grand-challenges-in-equity-and-inclusion-department-of-communication-cals/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/instructional-technology-design/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/nutrition-dietetics/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/art/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/educational-administration-leadership/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/horticulture-landscape-architecture/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/library-information-science/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/fashion-textile-design/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/46100/lecturer-in-sociology-ay-2023-2024/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/61032/life-science-research-professional-1/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/sport-management/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/international-business/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/other-fine-applied-arts-specialities/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/sociology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/59022/research-scientist/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/states/jobs-in-oxfordshire/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/dance/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/communications/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/mathematics/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/agricultural-engineering/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/media-communication-studies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/interior-design/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/health-education-promotion/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/health-sciences/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/other-medicine-specialities/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/automotive-technology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/public-environmental-health/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/physicians/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/information-systems-technology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/culinary-arts/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/american-studies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/paramedics-emts/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/geology-earth-sciences-oceanography/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/astronomy-astrophysics/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/agricultural-economics-agribusiness/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/business-management/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/57215/life-science-research-professional/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/engineering/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/social-work/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/anthropology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/17957/assistant-associate-or-full-project-scientist-med-hematology-oncology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/31531/laboratory-analyst-in-the-grade-of-research-assistant-i-ii/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/communication-sciences-and-disorders/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/architecture/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/music/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/humanities/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/QUT-professor/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/Postdoctoral-Fellow',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/19297/postdoctoral-associate-oettingen-lab/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/security-studies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/Rowan University/3748/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/pharmacy-pharmacology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/occupational-therapy/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/other-liberal-arts-specialities/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/56969/systems-accountant/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/13937/research-assistant-dept-of-physiology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/urban-studies-planning/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/radio-television-film/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/teacher-education-early-childhood/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/science/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/business/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/55879/postdoctoral-scholar/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employers/academic-jobs-australia/3328',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/fire-science/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/fine-applied-arts/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/agricultural-extension/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/other-science-specialities/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/environmental-science-ecology-forestry/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/other-education-specialities/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/nursing/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/open-rank-in-school-counseling-psychology/64801',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/athletic-training/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/54870/registrar/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/10366/science-communication-administrator/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job-type/visiting-global-academic/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job-type/lab-technician/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job-type/postdoctoral-researcher/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job-type/postdoctoral-fellow/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job-type/assistant-professor/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/23422/research-fellow-in-ammonia-combustion-technologies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/23726/research-fellow-in-energy-studies-institute-aimmer-study/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/QUT-research/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/28118/research-fellow-in-protein-science/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/44119/administrative-coordinator-ii/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/27335/postdoctoral-research-fellow-freedman-lab/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/categories/all-administration-support-university/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/20869/lab-associate-position-angelaki-lab/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/industry/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-lecturer/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/63684/head-of-school-public-health-and-social-work/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/55213/assistant-professor-quantitative-sociology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-Executive/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/business/international-business/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/QUT-university-Executive/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/16882/lecturer-in-digital-cultures/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/53667/research-administrative-coordinator/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/agriculture/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/speech-public-speaking/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/entomology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/public-administration-policy/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/20790/cee-postdoctoral-associate-fellow/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/healthcare-administration/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-Executive',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/human-development-family-studies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/educational-psychology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/10485/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/12711/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/12527/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/religious-studies-theology',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/29679/cancer-biology-postdoctoral-research-fellow-qi-lab/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/8470/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/20255/casual-academic-discipline-of-urbanism/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/dental-hygienists-assistants/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/business-human-resources/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/medical-assistants/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/physical-therapy/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/english-second-language/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/broadcast-journalism/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/51008/adjunct-instructor-registered-dental-assistant/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/tourism/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/massage-therapy/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/biological/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/chemistry/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/reading-literacy/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/religious-studies-theology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/curriculum-instruction/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/political-science/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/recreation-leisure-studies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/50202/postdoc-at-the-department-of-drug-design-and-pharmacology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/other-business-specialities/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/law-and-legal-studies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/53547/postdoctoral-research-fellow-499750/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/veterinary-medicine/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/22191/full-time-associate-full-professor-psychiatrist-in-chief/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/27988/research-associate-engineer-dept-of-orthopaedic-surgery/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/cosmetology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/medical-billing-coding/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/public-relations-advertising/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/art-history/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/sign-language/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/diagnostic-imaging-radiography/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/healthcare-administration/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-Executive',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/human-development-family-studies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/educational-psychology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/10485/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/12711/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/12527/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/religious-studies-theology',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/29679/cancer-biology-postdoctoral-research-fellow-qi-lab/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/8470/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/20255/casual-academic-discipline-of-urbanism/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/dental-hygienists-assistants/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/business-human-resources/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/medical-assistants/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/physical-therapy/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/english-second-language/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/broadcast-journalism/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/51008/adjunct-instructor-registered-dental-assistant/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/tourism/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/massage-therapy/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/biological/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/chemistry/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/reading-literacy/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/religious-studies-theology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/curriculum-instruction/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/political-science/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/recreation-leisure-studies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/50202/postdoc-at-the-department-of-drug-design-and-pharmacology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/other-business-specialities/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/law-and-legal-studies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/53547/postdoctoral-research-fellow-499750/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/veterinary-medicine/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/22191/full-time-associate-full-professor-psychiatrist-in-chief/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/27988/research-associate-engineer-dept-of-orthopaedic-surgery/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/cosmetology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/medical-billing-coding/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/public-relations-advertising/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/art-history/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/sign-language/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/diagnostic-imaging-radiography/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/digital-arts/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/english-literature/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/finance/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/graphic-design/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/28280/lab-research-analyst-ii/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/plant-soil-science/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/health-information-technology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/categories/faculty-fine-and-applied-arts-dance/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/32202/head-of-school-dean-for-veterinary-medicine-for-the-royal-dick-school-of-veterinary-studies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/physics/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/28828/postdoctoral-research-fellow-biostatistics/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/kinesiology-exercise-science-phys-ed/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/criminal-justice/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/food-science/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/telecommunications',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/dentistry/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-Executive',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/h/employers/university-of-tasmania/3867/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/northern-territory',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/29473/senior-research-officer/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/49505/assistant-professor-in-data-driven-precision-medicine-and-diagnostics-ddls-fellow/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/company/3396/university-of-massachusetts-amherst',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/QUT-lecturing',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/QUT-university-Human-Resources',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/UCSD-lecturing',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/UCSD-university-Executive',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-lecturing',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-Administration',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/company/3285/northeastern-university',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/QUT-university-Executive',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-Human-Resources',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-lecturing',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/QUT-professor',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/QUT-research',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/UCSD-professor',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/UCSD-university-Administration',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/UCSD-university-Human-Resources',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-Administration',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-Human-Resources',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-professor',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/58578/acting-instructor-provisional-academic-hospitalist-fellow-ay-2024-25-general-internal-medicine/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/foreign-languages-literatures/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/construction-building-trades/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/history',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/10550/assistant-professor-mixed-signal-circuits-and-systems/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/hr/training-development',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/15311/part-time-lecturer-of-the-interdisciplinary-collaborative-core-ethics-and-civics-in-a-multicultural-world/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/16346/associate-professor-epidemiology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/58025/assessment-assurance-officer/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/52226/research-fellow-in-health-economics/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/17019/research-associate-in-nmr-spectroscopy-of-chaperone-complexes/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/62065/research-fellow-main-group-chemistry/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/15159/professors-associate-professors-assistant-professors-220001p2/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/21856/postdoctoral-position-on-energy-system-modelling-and-optimization/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/social-work',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/Duquesne University/3330/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/nursing',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/teacher-education-early-childhood/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/31657/research-assistant-microbiology-immunology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/respiratory-care/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/11901/associate-professor-professor-economics/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/The University of Queensland/3172/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/58588/clinician-researcher-physician-scientist-fellowship-ay-2024-25-general-internal-medicine/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/chiropractic/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/philosophy/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/law/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/30426/adjunct-professors/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/10629/research-associate-mazur-group/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/statistics/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/dance',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/public-environmental-health',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/medicine/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/surgical-technology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/physicians',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/ethnic-multicultural-studies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/higher-education/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/other-liberal-arts-specialities',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/computer-science/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/animal-science/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/49283/cook-commis-chef-demi-chef/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/art',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/aviation/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/liberal-arts/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/hotel-restaurant-management/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/geography/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/industrial-design/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/respiratory-care/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/technical-career/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/biology/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/theatre/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/education/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/electronics/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/administration',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/hr/management-internal',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/sign-language',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/hr/occupational-health-safety',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/security-studies',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/veterinary-medicine',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/18887/lecturer-teaching-in-systems-engineering-technology-management-or-transformation-leadership/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/61501/associate-professor-oral-surgery/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/instructional-technology-design',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/other-science-specialities',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/categories/science/library-information-science/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/32624/postdoctoral-research-scientist/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/womens-gender-studies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/16968/research-associate-in-epigenetics-uk-dementia-research-institute/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/health-sciences/occupational-therapy/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/hr/generalist-hr',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/hr/remuneration-benefits',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/hr/industrial-employee-relations',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/hr/organisational-development',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/Tutor',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/biochemistry-molecular-biology',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/54030/arc-research-data-scientist-assistant-senior-and-principal-roles/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/15449/senior-research-scientist-machine-learning/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/business-human-resources',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/cities/jobs-in-albany/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/art-history',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/secondary/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/19663/phd-position-modeling-fracture-of-meta-materials/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/56602/vice-president-for-finance-and-facilities-fa24031/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/20883/junior-research-scholar/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/13406/research-engineer-mems-sensors-and-energy-harvesting-system/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/Tutor/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/animal-science',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/32891/associate-or-full-professor-non-tenure-track-center-for-food-allergy-asthma-research/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/cities/jobs-in-fitchburg/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/other-communications-specialities/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/51739/webmaster/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/33895/research-fellow-energy-storage-battery-and-supercapacitor/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/category/computer/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/13905/research-engineer-machine-learning/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/15964/senior-research-fellow/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/14536/lecturer-2200037w/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/10727/assistant-professor-data-intensive-astronomy/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/cal-poly-pomona/3728/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/16988/research-associate-post-doctoral-scientist/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/12571/dr-robert-a-ellis-fellowship/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/56950/belonging-and-inclusive-programs-manager/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/56949/assistant-professor-civil-rights-studies/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/id/60387',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/30157/assistant-associate-professor-at-cumc/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/company/3125/Yale-University',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/28430/senior-clinical-research-specialist-psychiatry-beh-med-div-meade-team/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/company/3143/northwestern-university/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/27357/computational-biology-postdoctoral-research-fellow-crompton-lab/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/27378/research-assistant/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/cities/jobs-in-munich/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/university-of-texas-at-austin/3166/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/14963/part-time-lecturer-for-wireless-and-mobile-radio-systems/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/loyola-marymount-university/3637/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/cquniversity/3854/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/48469/research-specialist-a-b-department-of-pathology-and-laboratory-medicine/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/24070/senior-ux-researcher/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/11868/postdoctoral-associate/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/job/30107/assistant-professor-mathematics/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employer/university-of-alabama-at-birmingham/3387/',
        destination: '/jobs',
        permanent: true,
      },
      {
        source:
          '/job/53257/post-doctoral-fellow-in-computer-science-at-télécom-paris-12-months',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/employers/universidade-federal-de-são-paulo/11526',
        destination: '/jobs',
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
