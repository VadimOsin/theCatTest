import type { Configuration } from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.thecatapi.com',
        pathname: '/images/**',
      },
    ],
  },
  webpack: (config: Configuration) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        "styled-components": require.resolve("styled-components"),
      },
    };
    return config;
  },
};

export default nextConfig;
