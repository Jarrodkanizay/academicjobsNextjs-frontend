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
      // {
      //   source: '/employers',
      //   destination: '/Global/employers',
      //   permanent: true,
      // },
      // {
      //   source: '/Global/Employers',
      //   destination: '/Global/employers',
      //   permanent: true,
      // },
      // {
      //   source: '/Global/Employers',
      //   destination: '/Global/employers',
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
