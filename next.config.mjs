/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['ik.imagekit.io'],  // Add your ImageKit domain here
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ik.imagekit.io',
            pathname: '/**',  // Allows any path after the domain
          },
        ],
      },
};

export default nextConfig;
 