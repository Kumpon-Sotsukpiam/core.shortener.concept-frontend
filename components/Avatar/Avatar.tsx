import React from 'react'

export default function Avatar({
  url,
  className,
}: {
  url: string
  className?: string
}) {
  return (
    <img
      className={`h-10 transform cursor-pointer rounded-full transition duration-150 hover:scale-110 ${className}`}
      loading="lazy"
      src={url}
    />
  )
}
