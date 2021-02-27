import React, { useState } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import tw, { css } from 'twin.macro'
import { ChevronLeft, ChevronRight } from './svg'

const numOfDisplayableButtons = 7

const disableStyle = css`
  ${tw`bg-gray-300 pointer-events-none`}
`
const currentStyle = css`
  ${tw`bg-gray-100 pointer-events-none`}
`

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

const genURL = (router, pageNum) => {
  const query = { ...router.query, page: pageNum }
  return { pathname: router.pathname, query: query }
}

const Pagination = ({ all, limit, current, router }) => {
  const to = all < limit * current ? all : limit * current
  const from = limit * current - limit + 1
  const maxNumOfPages = Math.ceil(all / limit)
  const pageNums = genPageNums(current, maxNumOfPages)

  return (
    <div tw="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div tw="flex-1 flex justify-between sm:hidden">
        <Link href={genURL(router, current - 1)} passHref>
          <a
            css={[
              tw`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500`,
              current === 1 && disableStyle,
            ]}
          >
            Previous
          </a>
        </Link>
        <Link href={genURL(router, current + 1)} passHref>
          <a
            css={[
              tw`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500`,
              current === maxNumOfPages && disableStyle,
            ]}
          >
            Next
          </a>
        </Link>
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
            <Link href={genURL(router, current - 1)} passHref>
              <a
                css={[
                  tw`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`,
                  current === 1 && disableStyle,
                ]}
              >
                <span tw="sr-only">Previous</span>
                <ChevronLeft />
              </a>
            </Link>
            {pageNums.map((num, idx) => {
              return (
                <Link key={idx} href={genURL(router, num)} passHref>
                  <a
                    css={[
                      tw`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50`,
                      current === num && currentStyle,
                    ]}
                  >
                    {num}
                  </a>
                </Link>
              )
            })}
            <Link href={genURL(router, current + 1)} passHref>
              <a
                css={[
                  tw`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`,
                  current === maxNumOfPages && disableStyle,
                ]}
              >
                <span tw="sr-only">Next</span>
                <ChevronRight />
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Pagination)
