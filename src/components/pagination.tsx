import Link from 'next/link'
import { withRouter, NextRouter } from 'next/router'
import tw, { css } from 'twin.macro'
import { ChevronLeft, ChevronRight } from './svg'

const numOfDisplayableButtons = 7

const disableStyle = css`
  ${tw`bg-gray-300 dark:bg-gray-500 dark:text-black pointer-events-none`}
`
const currentStyle = css`
  ${tw`text-orange dark:text-orange font-bold pointer-events-none`}
`

const genPageNums = (current: number, maxNumOfPages: number) => {
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

const genURL = (router: NextRouter, pageNum: number) => {
  const query = { ...router.query, page: pageNum }
  return { pathname: router.pathname, query: query }
}

type Props = {
  all: number
  limit: number
  current: number
  router: NextRouter
}

const Pagination = ({ all, limit, current, router }: Props) => {
  const to = all < limit * current ? all : limit * current
  const from = limit * current - limit + 1
  const maxNumOfPages = Math.ceil(all / limit)
  const pageNums = genPageNums(current, maxNumOfPages)

  return (
    <div tw="flex items-center justify-between max-w-screen-xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
      <div tw="flex-1 flex justify-between sm:hidden">
        <Link href={genURL(router, current - 1)} passHref>
          <a
            css={[
              tw`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md border
              border-gray-300 text-gray-700 hover:text-gray-500
              dark:border-gray-500 dark:text-white hover:dark:text-gray-300`,
              current === 1 && disableStyle,
            ]}
          >
            Previous
          </a>
        </Link>
        <Link href={genURL(router, current + 1)} passHref>
          <a
            css={[
              tw`ml-3 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md border
              border-gray-300 text-gray-700 hover:text-gray-500
              dark:border-gray-500 dark:text-white hover:dark:text-gray-300`,
              current === maxNumOfPages && disableStyle,
            ]}
          >
            Next
          </a>
        </Link>
      </div>
      <div tw="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p tw="text-sm text-gray-700 dark:text-white">
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
                  tw`relative inline-flex items-center px-2 py-2 rounded-l-md text-sm font-medium border
                  border-gray-300 text-gray-500 hover:bg-gray-50
                  dark:border-gray-500  dark:text-white hover:dark:bg-gray-700`,
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
                      tw`relative inline-flex items-center px-4 py-2 text-sm font-medium border
                      border-gray-300 text-gray-700 hover:bg-gray-50
                      dark:border-gray-500 dark:text-white hover:dark:bg-gray-700`,
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
                  tw`relative inline-flex items-center px-2 py-2 rounded-r-md text-sm font-medium border
                  border-gray-300 text-gray-500 hover:bg-gray-50
                  dark:border-gray-500 dark:text-white hover:dark:bg-gray-700`,
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
