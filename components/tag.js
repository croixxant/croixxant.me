import React, { useState } from 'react'
import tw from 'twin.macro'
import Link from 'next/link'

const Tag = ({ href, name }) => {
  return (
    <Link href={href} passHref>
      <a tw="mr-3 last:mr-0 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">{name}</a>
    </Link>
  )
}
export default Tag
