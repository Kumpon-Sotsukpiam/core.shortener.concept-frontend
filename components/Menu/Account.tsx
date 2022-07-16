import React from 'react'

export const AccountMenu = React.forwardRef(
  ({ ...initProps }: any, ref: any) => {
    return (
      <div>
        <div className="max-w-md overflow-hidden rounded border bg-white shadow-2xl sm:max-w-full">
          <div className="border-b p-6 text-center">
            <img
              className="mx-auto h-24 w-24 rounded-full"
              src="https://lh3.googleusercontent.com/a-/AOh14GhxFrZThqhiAf90gcAj8gnNdOpWW0Gphr7JuunJ0Sg=s288-p-rw-no"
              alt="Randy Robertson"
            />
            <p className="pt-2 text-lg font-semibold">Kumpon Sotsukpiam</p>
            <p className="text-sm text-gray-600">tetravaal.system@gmail.com</p>
            <div className="mt-5">
              <a
                href="#"
                className="rounded-full border py-2 px-4 text-xs font-semibold text-gray-700"
              >
                Manage your Google Account
              </a>
            </div>
          </div>
          <div className="border-b">
            <a href="#" className="flex px-6 py-3 hover:bg-gray-200">
              <div className="h-8 w-8 content-center rounded-full bg-blue-700 text-center align-middle text-lg text-white">
                D
              </div>
              <div className="pl-3">
                <p className="text-sm font-semibold">Kumpon Sotsukpiam</p>
                <p className="text-xs text-gray-600">
                  tetravaal.system@gmail.com
                </p>
              </div>
            </a>
            <a href="#" className="flex px-6 py-3 hover:bg-gray-200">
              <div className="h-8 w-8 rounded-full text-center align-middle text-lg">
                <img
                  className="mx-auto h-6 w-6 rounded-full"
                  src="https://img.icons8.com/windows/50/000000/add-user-male.png"
                />
              </div>
              <div className="pl-3">
                <p className="text-sm font-semibold text-gray-700">
                  Add another account
                </p>
              </div>
            </a>
          </div>
          <div className="border-b">
            <div className="px-6 py-4 text-center">
              <a
                href="#"
                className="text-gray-70 rounded border py-2 px-4 text-xs font-semibold"
              >
                Sign out of all accounts
              </a>
            </div>
          </div>

          <div className="px-6 py-4">
            <span className="mr-2 inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-600">
              Privacy Policy
            </span>
            <span className="mr-2 inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-600">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    )
  }
)
