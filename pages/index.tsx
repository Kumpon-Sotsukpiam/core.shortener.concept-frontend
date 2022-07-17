import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Header } from '../components/Layout/Header'
import { Sidebar } from '../components/Layout/Sidebar'
import { ShortLinkTable } from '../components/ShortLinkTable'

const Index: NextPage = () => {
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
          <ShortLinkTable />
        </div>
      </main>
    </div>
  )
}

export default Index
