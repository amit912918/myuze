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
    domains: ['ik.imagekit.io', 'files.hubhopper.com'], // Add external image domains here
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      child_process: false,
    };
    return config;
  },
};
