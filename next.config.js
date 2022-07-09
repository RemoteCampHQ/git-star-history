/** @type {import('next').NextConfig} */

require('next-transpile-modules')(['echarts', 'zrender']);

const nextConfig = {
  assetPrefix: '/',
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
		esmExternals: "loose",
  trailingSlash: true,
};

module.exports = nextConfig;
