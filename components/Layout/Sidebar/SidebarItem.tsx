import Link from 'next/link'
import React from 'react'

interface SidebarItemProps {
  name: string
  path: string
  Icon: any
  active: boolean
}

export const SidebarItem = React.forwardRef(
  ({ name, path, Icon, active }: SidebarItemProps, ref: any) => {
    return (
      <Link href={path}>
        <div
          className={`${
            active && 'bg-blue-100'
          } mr-50 cursor-pointer rounded rounded-r-3xl py-3.5 pl-4 font-semibold`}
        >
          <button
            className={`${
              active ? 'text-blue-500' : 'text-gray-600 '
            } flex items-center text-sm font-semibold focus:outline-none`}
          >
            <Icon className="h-5 px-3" />
            {name}
          </button>
        </div>
      </Link>
    )
  }
)
