/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://localhost:6000/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
