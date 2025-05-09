/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Ensures next export works correctly
    // trailingSlash: true, // Ensures folders with index.html for S3
    images: {
      unoptimized: true, // Required for static export if using next/image
      domains: ['digitalassets.tesla.com']
    },
  };

  module.exports = nextConfig;
  