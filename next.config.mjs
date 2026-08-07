// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'standalone',
  cacheComponents: true,
  partialPrefetching: true,
  trailingSlash: true,
  turbopack: {
    rules: {
      './content/technologies/*.yml': {
        condition: { query: '?raw' },
        loaders: ['./scripts/raw-content-loader.cjs'],
        as: '*.js',
      },
      './content/work/**/*.mdx': {
        condition: { query: '?raw' },
        loaders: ['./scripts/raw-content-loader.cjs'],
        as: '*.js',
      },
      './public/generated/image-manifest.json': {
        condition: { query: '?raw' },
        loaders: ['./scripts/raw-content-loader.cjs'],
        as: '*.js',
      },
    },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
