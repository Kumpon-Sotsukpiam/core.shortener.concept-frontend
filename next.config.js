/** @type {import('next').NextConfig} */

require("dotenv").config();

module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['www.google.com', 'www.gstatic.com']
  },
  env: {
    BASEURL: process.env.BASEURL
  },
}
