module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      child_process: false,
    };
    return config;
  },
};
