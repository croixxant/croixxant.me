import Head from '../components/head'
import tw from 'twin.macro'
import Link from 'next/link'
import Layout from '../components/layout'
import { Book, Trash, ChevronRight } from '../components/svg'

export default function Home() {
  return (
    <>
      <Head />
      <Layout>
        <div tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div tw="max-w-3xl mx-auto">
            <div>
              <ul tw="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2">
                <li tw="col-span-1 flex shadow-sm rounded-md bg-gradient-to-r from-pink-500 to-pink-400 md:h-16">
                  <Link href="/articles" passHref>
                    <a tw="flex-1 flex justify-between items-center text-gray-100 font-medium hover:text-gray-300">
                      <div tw="px-4 py-2 truncate inline-flex">
                        <Book />
                        <span tw="ml-2">Articles</span>
                      </div>
                      <div tw="mr-4">
                        <ChevronRight />
                      </div>
                    </a>
                  </Link>
                </li>
                <li tw="col-span-1 flex shadow-sm rounded-md bg-gradient-to-r from-green-500 to-green-400 md:h-16">
                  <Link href="/scraps" passHref>
                    <a tw="flex-1 flex justify-between items-center text-gray-100 font-medium hover:text-gray-300">
                      <div tw="px-4 py-2 truncate inline-flex">
                        <Trash />
                        <span tw="ml-2">Scraps</span>
                      </div>
                      <div tw="mr-4">
                        <ChevronRight />
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
