import type { NextPage } from 'next'
import React, { useCallback, useState } from 'react'
import { Column } from 'react-table'

import { LinkCell, DayCell, UrlCell } from '../components/Table/cells'
import Table from '../components/Table/Table'
import linkService from '../services/link.service'

export const ShortLinkTable: NextPage = () => {
  const columns: Array<Column> = React.useMemo(
    () => [
      {
        Header: 'Target URL',
        accessor: 'target',
        Cell: LinkCell,
      },
      {
        Header: 'Craeted at',
        accessor: 'created_at',
        Cell: DayCell,
      },
      {
        Header: 'Short URL',
        accessor: 'address',
        Cell: UrlCell,
      },
    ],
    []
  )

  const [pageCount, setPageCount] = useState(0)
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const fetchLinks = useCallback(
    ({ pageSize, pageIndex }) => {
      linkService
        .getLinks(pageIndex * pageSize, pageSize, searchTerm)
        .then((link_response) => {
          if (link_response.statusCode === 200) {
            setData(link_response.data.data)
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
        <input
          type="text"
          placeholder="Search"
          className="text-md w-full max-w-xl rounded-md bg-gray-100 py-2 px-5 text-gray-800 focus:bg-white focus:text-gray-800 focus:shadow-lg focus:outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mt-5">
        <Table
          columns={columns}
          data={data}
          pageCount={pageCount}
          fetchData={fetchLinks}
          isPaginated={true}
        />
      </div>
    </div>
  )
}
