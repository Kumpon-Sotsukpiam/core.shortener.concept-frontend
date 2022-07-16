import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export function DayCell({ value, column, row }: any) {
  const time = dayjs(value)
  const now = dayjs()
  return (
    <div className="flex items-center">
      <p>{time.from(now)}</p>
    </div>
  )
}
export function LinkCell({ value, column, row }: any) {
  return (
    <div className="flex items-center">
      <a
        target="_blank"
        href={value}
        className="truncate text-blue-600 underline  hover:text-blue-800"
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
        className="truncate text-blue-600 underline line-clamp-2 hover:text-blue-800"
      >
        {url}
      </a>
    </div>
  )
}
