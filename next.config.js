// module.exports = {
//   webpack: (config) => {
//     config.resolve.fallback = {
//       fs: false,
//       child_process: false,
//     };
//     return config;
//   },
// };

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['ik.imagekit.io', 'files.hubhopper.com', 'images.lystnfm.com'], // Add external image domains here
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      child_process: false,
    };
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/profile',
        destination: '/dashboard/profile',
      },
      {
        source: '/home',
        destination: '/dashboard/home',
      },
      {
        source: '/search',
        destination: '/dashboard/search',
      },
      {
        source: '/category',
        destination: '/dashboard/category',
      },
      {
        source: '/library',
        destination: '/dashboard/library',
      },
      {
        source: '/profile/language',
        destination: '/dashboard/profile/language',
      },
    ]
    }
};
