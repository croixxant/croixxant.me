import React, { useState } from 'react'
import tw from 'twin.macro'

const Tag = ({ href, name }) => {
  return (
    <a href={href} tw="mr-3 last:mr-0 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
      {name}
    </a>
  )
}
export default Tag
