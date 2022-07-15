import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Header } from '../components/Layout/Header'
import { Sidebar } from '../components/Layout/Sidebar'

const Singin: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-white">
      <Head>
        <title>URL Shortener</title>
      </Head>
      <main className="flex">
        {/* Header */}
        <Header />
        {/* Sidebar */}
        <Sidebar />
        {/* Center */}
        <div className="col-span-4 h-screen w-full overflow-y-scroll px-4 pt-20 pr-10 scrollbar-hide">
          <div className="mt-5 bg-white">
            <div className="flex space-x-12">
              <button className="flex items-center text-lg font-medium text-gray-600 focus:outline-none">
                Recent shortened links.
              </button>
              {/* <div className="flex">
                <button
                  className="flex items-center rounded rounded-l-md
                                    rounded-r-none border border-r-0
                                    bg-blue-50 px-6 py-2.5
                                    text-sm font-semibold text-blue-600
                                    first-letter:border-gray-300 focus:outline-none"
                >
                  General
                </button>
                <button
                  className="flex items-center border 
                                    border-r-0 border-gray-300 px-6
                                    py-2.5 text-sm font-semibold
                                    text-gray-600 focus:outline-none"
                >
                  Login
                </button>
                <button
                  className="flex items-center border 
                                    border-r-0 border-gray-300 px-6
                                    py-2.5 text-sm font-semibold
                                    text-gray-600 focus:outline-none"
                >
                  Email
                </button>
                <button
                  className="flex items-center rounded
                                    rounded-r-md rounded-l-none border
                                    border-gray-300 px-6
                                    py-2.5 text-sm font-semibold
                                    text-gray-600 focus:outline-none"
                >
                  Tokens
                </button>
              </div> */}
            </div>
            <hr className="my-5"></hr>
            {/* <div className="flex justify-between">
              <h3 className="text-sm font-semibold text-gray-500">
                Start with a Template
              </h3>
              <div className="flex items-center">
                <h3 className="text-sm font-semibold text-gray-500">
                  Template Gallery
                </h3>
                <svg
                  className="h-6 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-5 flex">
              <div className="my-2 max-w-xs overflow-hidden rounded border border-gray-300 py-4 shadow-lg">
                <img
                  className="h-28 px-8"
                  src="https://ssl.gstatic.com/analytics/rap/20210322_00020000/static/pngs/blank_google_add_2x.png"
                  alt="Sunset in the mountains"
                />
                <div className="px-4">
                  <div className="text-sm font-semibold">Blank Report</div>
                  <p className="text-xs font-semibold text-gray-400">
                    {' '}
                    Data Studio{' '}
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Singin
