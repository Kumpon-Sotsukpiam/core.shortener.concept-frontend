/** @type {import('next').NextConfig} */

require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['www.google.com', 'www.gstatic.com']
  },
  env: {
    BASEURL: process.env.BASEURL
  },
}
