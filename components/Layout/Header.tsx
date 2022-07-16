import { NextPage } from 'next'
import Image from 'next/image'
import Avatar from '../Avatar/Avatar'
import { AccountMenu } from '../Menu/Account'
import { SearchIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

export const Header: NextPage = () => {
  return (
    <header className="fixed top-0 z-10 w-full border-b-2">
      <div className="max-auto bg-white px-8 py-2">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="mr-10 flex items-center space-x-4">
            <Image
              src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_data_studio.svg"
              width={30}
              height={30}
              className="cursor-pointer"
            />
            <h1 className="hidden text-2xl text-gray-600 sm:flex">
              URL Shortener
            </h1>
          </div>
          {/* Search */}
          <div className="ml-8 flex-1">
            <div className="inline-flex w-full">
              <SearchIcon className="absolute mt-4 h-5 px-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="text-md w-full max-w-xl rounded-md bg-gray-100 py-3 px-10 text-gray-800 focus:bg-white focus:text-gray-800 focus:shadow-lg focus:outline-none"
              />
            </div>
          </div>
          {/* Profile */}
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Menu as="div" className="relative ml-3">
              <Menu.Button className="flex rounded-full text-sm">
                <Avatar
                  className="ml-auto h-9"
                  url="https://lh3.googleusercontent.com/a-/AOh14GhxFrZThqhiAf90gcAj8gnNdOpWW0Gphr7JuunJ0Sg=s288-p-rw-no"
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-4 w-72 origin-top-right">
                  <AccountMenu />
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  )
}
