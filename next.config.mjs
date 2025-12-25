/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: false,
  
  serverExternalPackages: ['@google/generative-ai'],
  experimental: {
    allowedDevOrigins: [
      '617b9b1f-777d-43ef-8255-b7620d9a18e4-00-3a0llemse4yib.spock.replit.dev',
      '*.replit.dev',
      '*.replit.com',
      '*.spock.replit.dev'
    ]
  },
  
  // Sitemap configuration
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
        },
      ],
    };
  },
  
  // Optimized images configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  webpack: (config, { isServer }) => {
    config.ignoreWarnings = [
      { module: /require-in-the-middle/ },
    ];
    return config;
  },

  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default config;
