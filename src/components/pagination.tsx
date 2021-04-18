import Link from 'next/link'
import { withRouter, NextRouter } from 'next/router'
import { ChevronLeft, ChevronRight } from './svg'

const numOfDisplayableButtons = 7

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
    <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
      <div className="flex-1 flex justify-between sm:hidden">
        <Link href={genURL(router, current - 1)} passHref>
          <a
            className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md border
              border-gray-300 dark:border-gray-500 ${
                current === 1
                  ? 'text-gray-300 dark:text-gray-400 pointer-events-none'
                  : 'text-gray-700 hover:text-gray-500 dark:text-white dark:hover:text-gray-300'
              }`}
          >
            Previous
          </a>
        </Link>
        <Link href={genURL(router, current + 1)} passHref>
          <a
            className={`ml-3 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md border
              border-gray-300 dark:border-gray-500 ${
                current === maxNumOfPages
                  ? 'text-gray-300 dark:text-gray-400 pointer-events-none'
                  : 'text-gray-700 hover:text-gray-500 dark:text-white dark:hover:text-gray-300'
              }`}
          >
            Next
          </a>
        </Link>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 dark:text-white">
            Showing
            <span className="font-medium"> {from} </span>
            to
            <span className="font-medium"> {to} </span>
            of
            <span className="font-medium"> {all} </span>
            results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <Link href={genURL(router, current - 1)} passHref>
              <a
                className={`relative inline-flex items-center px-2 py-2 rounded-l-md text-sm font-medium border
                  border-gray-300 dark:border-gray-500 ${
                    current === 1
                      ? 'text-gray-300 dark:text-gray-400 pointer-events-none'
                      : 'text-gray-500 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700'
                  }`}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeft />
              </a>
            </Link>
            {pageNums.map((num, idx) => {
              return (
                <Link key={idx} href={genURL(router, num)} passHref>
                  <a
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-medium border
                      border-gray-300 text-gray-700 hover:bg-gray-50
                      dark:border-gray-500 dark:text-white dark:hover:bg-gray-700 ${
                        current === num ? 'font-bold pointer-events-none' : ''
                      }`}
                  >
                    {num}
                  </a>
                </Link>
              )
            })}
            <Link href={genURL(router, current + 1)} passHref>
              <a
                className={`relative inline-flex items-center px-2 py-2 rounded-r-md text-sm font-medium border
                  border-gray-300 dark:border-gray-500 ${
                    current === maxNumOfPages
                      ? 'text-gray-300 dark:text-gray-400 pointer-events-none'
                      : 'text-gray-500 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700'
                  }`}
              >
                <span className="sr-only">Next</span>
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
