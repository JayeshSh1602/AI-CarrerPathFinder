/** @type {import('next').NextConfig} */
const nextConfig = {
  config: {
    turbopack: {
      dev: false,
    },
  },

  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig; 
