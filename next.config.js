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
        source: '/global/employers',
        destination: '/employers',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
