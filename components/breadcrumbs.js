import React, { useState } from 'react'
import tw from 'twin.macro'

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav tw="bg-white border-b border-gray-200 flex" aria-label="Breadcrumb">
      <ol tw="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8 overflow-scroll">
        <li tw="flex">
          <div tw="flex items-center">
            <a href="/" tw="text-gray-400 hover:text-gray-500">
              <svg tw="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span tw="sr-only">Home</span>
            </a>
          </div>
        </li>
        {breadcrumbs.map(({ title, link }, idx) => {
          return (
            <li key={idx} tw="flex">
              <div tw="flex items-center">
                <svg
                  tw="flex-shrink-0 w-6 h-full text-gray-200"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <a href={link} tw="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  {title}
                </a>
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
