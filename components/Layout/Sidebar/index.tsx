import React from 'react'
import { useRouter } from 'next/router'

import { navLinks } from '../../../utils/data/nav_links'
import { SidebarItem } from './SidebarItem'

export const Sidebar = React.forwardRef(({ ...initProps }: any, ref: any) => {
  const router = useRouter()
  return (
    <aside className="bg-write col-span-2 hidden h-screen w-72 overflow-y-scroll pt-20 scrollbar-hide md:inline">
      <button className="ml-3 flex w-36 items-center rounded-3xl border  border-gray-200 bg-white py-2 align-middle text-sm font-semibold text-gray-800 shadow-md transition-all hover:shadow-xl  focus:outline-none">
        {' '}
        <svg className="h-8 px-4" viewBox="0 0 36 36">
          <path
            className="ng-tns-c17-1"
            d="M16 16v14h4V20z"
            fill="#34A853"
          ></path>
          <path
            className="ng-tns-c17-1"
            d="M30 16H20l-4 4h14z"
            fill="#4285F4"
          ></path>
          <path
            className="ng-tns-c17-1"
            d="M6 16v4h10l4-4z"
            fill="#FBBC05"
          ></path>
          <path
            className="ng-tns-c17-1"
            d="M20 16V6h-4v14z"
            fill="#EA4335"
          ></path>
          <path className="ng-tns-c17-1" d="M0 0h36v36H0z" fill="none"></path>
        </svg>
        Create
      </button>
      <div className="mt-5">
        {navLinks.map(({ name, path, Icon }) => (
          <SidebarItem
            key={path}
            name={name}
            path={path}
            Icon={Icon}
            active={router.asPath === path}
          />
        ))}
      </div>
    </aside>
  )
})
