import React, { useState } from 'react'
import tw from 'twin.macro'

const numOfDisplayableButtons = 7

const genPageNums = (current, maxNumOfPages) => {
  const all = Array(maxNumOfPages).fill(0)
  if (maxNumOfPages <= numOfDisplayableButtons) {
    return all.map((_, i) => i + 1)
  }

  return all
    .map((_, i) => {
      const num = current + i - Math.floor(numOfDisplayableButtons / 2)
      if (num < 1) {
        return num + numOfDisplayableButtons
      }
      if (num > maxNumOfPages) {
        return num - numOfDisplayableButtons
      }
      return num
    })
    .sort()
}

const Pagination = ({ all, limit, current }) => {
  const to = all < limit * current ? all : limit * current
  const from = limit * current - limit + 1
  const maxNumOfPages = Math.ceil(all / limit)
  const pageNums = genPageNums(current, maxNumOfPages)
  return (
    <div tw="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div tw="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          tw="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
        >
          Previous
        </a>
        <a
          href="#"
          tw="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
        >
          Next
        </a>
      </div>
      <div tw="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p tw="text-sm text-gray-700">
            Showing
            <span tw="font-medium"> {from} </span>
            to
            <span tw="font-medium"> {to} </span>
            of
            <span tw="font-medium"> {all} </span>
            results
          </p>
        </div>
        <div>
          <nav tw="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              tw="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span tw="sr-only">Previous</span>
              <svg tw="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {pageNums.map((num, idx) => {
              return (
                <a
                  key={idx}
                  href="#"
                  tw="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  {num}
                </a>
              )
            })}
            <a
              href="#"
              tw="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span tw="sr-only">Next</span>
              <svg tw="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
