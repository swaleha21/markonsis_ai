import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const nextConfig: NextConfig = {
  // Removed: output: 'standalone' - this was causing Hostinger deployment issues
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  compiler: {
    styledComponents: true,
  },
  compress: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_APP_URL: process.env.APP_URL || 'http://localhost:3000',
    NEXT_PUBLIC_SHARE_URL_BASE: process.env.SHARE_URL_BASE || process.env.APP_URL || 'http://localhost:3000',
  },
  async headers() {
    const isProduction = process.env.NODE_ENV === 'production';
    const headers = [];
    
    if (isProduction) {
      const allowedOrigins = process.env.CORS_ORIGIN?.split(',') || ['https://localhost:3000'];
      
      headers.push({
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://scripts.simpleanalyticscdn.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https:; frame-ancestors 'none';"
          }
        ]
      });
      
      headers.push({
        source: '/shared/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=7200, s-maxage=7200, stale-while-revalidate=86400' },
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' }
        ]
      });
      
      headers.push({
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: allowedOrigins.join(',') },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' }
        ]
      });
    }
    
    return headers;
  }
};

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
      handler: 'CacheFirst',
      options: { cacheName: 'google-fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } },
    },
    {
      urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
      handler: 'CacheFirst',
      options: { cacheName: 'gstatic-fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } },
    },
    {
      urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      handler: 'StaleWhileRevalidate',
      options: { cacheName: 'static-font-assets', expiration: { maxEntries: 4, maxAgeSeconds: 60 * 60 * 24 * 7 } },
    },
    {
      urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      handler: 'StaleWhileRevalidate',
      options: { cacheName: 'static-image-assets', expiration: { maxEntries: 64, maxAgeSeconds: 60 * 60 * 24 * 30 } },
    },
    {
      urlPattern: /\/_next\/image\?url=.+$/i,
      handler: 'StaleWhileRevalidate',
      options: { cacheName: 'next-image', expiration: { maxEntries: 64, maxAgeSeconds: 60 * 60 * 24 * 30 } },
    },
    {
      urlPattern: /\.(?:mp3|wav|ogg)$/i,
      handler: 'CacheFirst',
      options: { rangeRequests: true, cacheName: 'static-audio-assets', expiration: { maxEntries: 32, maxAgeSeconds: 60 * 60 * 24 * 30 } },
    },
    {
      urlPattern: /\.(?:mp4)$/i,
      handler: 'CacheFirst',
      options: { rangeRequests: true, cacheName: 'static-video-assets', expiration: { maxEntries: 32, maxAgeSeconds: 60 * 60 * 24 * 30 } },
    },
    {
      urlPattern: /\.(?:js)$/i,
      handler: 'StaleWhileRevalidate',
      options: { cacheName: 'static-js-assets', expiration: { maxEntries: 48, maxAgeSeconds: 60 * 60 * 24 * 30 } },
    },
    {
      urlPattern: /\.(?:css|less)$/i,
      handler: 'StaleWhileRevalidate',
      options: { cacheName: 'static-style-assets', expiration: { maxEntries: 32, maxAgeSeconds: 60 * 60 * 24 * 30 } },
    },
    {
      urlPattern: /\/_next\/static.+\.js$/i,
      handler: 'CacheFirst',
      options: { cacheName: 'next-static-js-assets', expiration: { maxEntries: 64, maxAgeSeconds: 60 * 60 * 24 * 30 } },
    },
    {
      urlPattern: /\/api\/.*/i,
      handler: 'NetworkFirst',
      method: 'GET',
      options: { cacheName: 'apis', expiration: { maxEntries: 16, maxAgeSeconds: 60 * 60 * 24 }, networkTimeoutSeconds: 10 },
    },
    {
      urlPattern: /.*/i,
      handler: 'NetworkFirst',
      options: { cacheName: 'others', expiration: { maxEntries: 32, maxAgeSeconds: 60 * 60 * 24 }, networkTimeoutSeconds: 10 },
    },
  ],
});

export default pwaConfig(nextConfig);