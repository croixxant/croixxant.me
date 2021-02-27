import Head from 'next/head'
import tw from 'twin.macro'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div tw="max-w-3xl mx-auto">
          <div>
            <ul tw="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2">
              <li tw="col-span-1 flex shadow-sm rounded-md bg-gradient-to-r from-pink-500 to-pink-400 md:h-16">
                <Link href="/articles" passHref>
                  <a tw="flex-1 flex justify-between items-center text-gray-100 font-medium hover:text-gray-300">
                    <div tw="px-4 py-2 truncate inline-flex">
                      <svg
                        tw="flex-shrink-0 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      <span tw="ml-2">Articles</span>
                    </div>
                    <div tw="mr-4">
                      <svg
                        tw="flex-shrink-0 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </Link>
              </li>
              <li tw="col-span-1 flex shadow-sm rounded-md bg-gradient-to-r from-green-500 to-green-400 md:h-16">
                <Link href="/scraps" passHref>
                  <a tw="flex-1 flex justify-between items-center text-gray-100 font-medium hover:text-gray-300">
                    <div tw="px-4 py-2 truncate inline-flex">
                      <svg
                        tw="flex-shrink-0 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      <span tw="ml-2">Scraps</span>
                    </div>
                    <div tw="mr-4">
                      <svg
                        tw="flex-shrink-0 h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
