import type { NextPage } from 'next'
import React, { useCallback, useState } from 'react'
import { Column } from 'react-table'
import { useRecoilState } from 'recoil'

import {
  LinkCell,
  DayCell,
  UrlCell,
  ExpireCell,
  ConfigCell,
} from '../components/Table/cells'
import Table from '../components/Table/Table'
import linkService from '../services/link.service'
import { linkState } from '../recoil/atoms/atom'
import { SearchIcon } from '@heroicons/react/solid'

export const ShortLinkTable: NextPage = () => {
  const columns: Array<Column> = React.useMemo(
    () => [
      {
        Header: 'Target URL',
        accessor: 'target',
        Cell: LinkCell,
      },
      {
        Header: 'Craeted',
        accessor: 'created_at',
        Cell: DayCell,
      },
      {
        Header: 'Expire IN',
        accessor: 'expire_in',
        Cell: ExpireCell,
      },
      {
        Header: 'Short URL',
        accessor: 'address',
        Cell: UrlCell,
      },
      {
        Header: 'Views',
        accessor: 'visit_count',
      },
      {
        Header: ' ',
        accessor: 'id',
        Cell: ConfigCell,
      },
    ],
    []
  )

  const [pageCount, setPageCount] = useState(0)
  const [links, setlinks] = useRecoilState(linkState)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchLinks = useCallback(
    ({ pageSize, pageIndex }) => {
      linkService
        .getLinks(pageIndex * pageSize, pageSize, searchTerm)
        .then((link_response) => {
          if (link_response.statusCode === 200) {
            setlinks(link_response.data.data)
            setPageCount(
              Math.ceil(link_response.data.total / link_response.data.limit)
            )
          }
        })
    },
    [searchTerm]
  )

  return (
    <div className="mt-5 bg-white">
      <div className="flex space-x-12">
        <p className="flex w-full items-center text-lg font-medium text-gray-600 focus:outline-none">
          Recent shortened links.
        </p>
      </div>
      <hr className="my-5"></hr>
      <div className="inline-flex w-full">
        <div
          className="flex w-full max-w-md 
            items-center rounded-full border 
            border-gray-200 px-5
            py-3 focus-within:shadow-lg hover:shadow-lg
            sm:max-w-xl
            lg:max-w-2xl"
        >
          <SearchIcon className="mr-3 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="flex-grow focus:outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-5">
        <Table
          columns={columns}
          data={links}
          pageCount={pageCount}
          fetchData={fetchLinks}
          isPaginated={true}
        />
      </div>
    </div>
  )
}
