/** @type {import('next').NextConfig} */
const nextConfig =  {
    async headers() {
      return [
        {
          source: '/api/:path*', // Matches all API routes
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*', // Allow requests from all origins. Change to specific origin if needed.
            },
            // You can add more headers if needed
            // {
            //   key: 'Access-Control-Allow-Methods',
            //   value: 'GET, POST, PUT, DELETE',
            // },
          ],
        },
      ];
    },
  };

module.exports = nextConfig
