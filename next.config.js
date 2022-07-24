/** @type {import('next').NextConfig} */

require("dotenv").config();

module.exports = {
  output: 'standalone',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['www.google.com', 'www.gstatic.com']
  },
  env: {
    BASEURL: process.env.BASEURL
  },
}
