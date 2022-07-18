import dayjs from 'dayjs'
import { useRecoilState } from 'recoil'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

import { TrashIcon } from '@heroicons/react/outline'
import { linkState } from '../../../recoil/atoms/atom'
import { classNames } from '../../shared/Utils'

import linkService from '../../../services/link.service'

export function ConfigCell({ value }: any) {
  const [links, setLinks]: any = useRecoilState(linkState)
  return (
    <div className="flex items-center">
      <TrashIcon
        className="h-5 cursor-pointer text-red-600"
        onClick={() => {
          linkService.deleteLink(value).then((delete_link_response) => {
            if (delete_link_response.statusCode === 200) {
              setLinks(links.filter((link: any) => link.id !== value))
            }
          })
        }}
      />
    </div>
  )
}
export function DayCell({ value, column, row }: any) {
  const time = dayjs(value)
  const now = dayjs()
  return (
    <div className="flex items-center">
      <p>{time.from(now)}</p>
    </div>
  )
}
export function ExpireCell({ value, column, row }: any) {
  const time = dayjs(value)
  const now = dayjs()
  const isExpire = value ? (time.diff(now) < 0 ? true : false) : false
  const willExpire = value ? (time.diff(now) < 0 ? false : true) : false
  return (
    <div className="flex items-center">
      <span
        className={classNames(
          'leading-wide rounded-full px-3 py-1 text-xs font-bold uppercase shadow-sm',
          !isExpire ? 'bg-green-100 text-green-800' : null,
          willExpire ? 'bg-yellow-100 text-yellow-800' : null,
          isExpire ? 'bg-red-100 text-red-800' : null
        )}
      >
        {value ? time.from(now) : 'never'}
      </span>
    </div>
  )
}
export function LinkCell({ value, column, row }: any) {
  return (
    <div className="flex items-center">
      <a
        target="_blank"
        href={value}
        className="truncate text-blue-600 hover:text-blue-800"
      >
        {value}
      </a>
    </div>
  )
}
export function UrlCell({ value, column, row }: any) {
  const url = `${process.env.BASEURL}/${value}`
  return (
    <div className="flex items-center">
      <a
        target="_blank"
        href={url}
        className="truncate text-blue-600 line-clamp-2 hover:text-blue-800"
      >
        {url}
      </a>
    </div>
  )
}
