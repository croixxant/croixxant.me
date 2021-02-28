import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import { css } from '@emotion/css'
import tw from 'twin.macro'
import Link from 'next/link'
import { GitHub, Twitter, Menu, X } from './svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div tw="relative bg-white border-b-2 border-gray-100">
      <div tw="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div tw="flex justify-between items-center md:justify-start md:space-x-10">
          <div tw="flex justify-start">
            <Link href="/" passHref>
              <a>
                <span tw="text-lg font-bold text-gray-600 hover:text-gray-900">Croixxant.me</span>
              </a>
            </Link>
          </div>
          <div tw="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span tw="sr-only">Open menu</span>
              <Menu />
            </button>
          </div>
          <nav tw="hidden md:flex space-x-10">
            <Link href="/articles" passHref>
              <a tw="text-base font-medium text-gray-500 hover:text-gray-900">Articles</a>
            </Link>
            <Link href="/scraps" passHref>
              <a tw="text-base font-medium text-gray-500 hover:text-gray-900">Scraps</a>
            </Link>
          </nav>
          <div tw="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              tw="ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-gray-100 hover:bg-gray-200"
              href="https://github.com/croixxant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub height="20" width="20" />
              <span tw="ml-1">GitHub</span>
            </a>
            <a
              tw="ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white background-color[#1DA1F2] hover:background-color[#1a90d9]"
              href="https://twitter.com/croixxxant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter height="20" width="20" />
              <span tw="ml-2">Twitter</span>
            </a>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter={css(tw`transition duration-200 ease-out`)}
        enterFrom={css(tw`opacity-0 scale-95`)}
        enterTo={css(tw`opacity-100 scale-100`)}
        leave={css(tw`transition duration-100 ease-in`)}
        leaveFrom={css(tw`opacity-100 scale-100`)}
        leaveTo={css(tw`opacity-0 scale-95`)}
      >
        <div tw="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div tw="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div tw="pt-5 pb-6 px-5">
              <div tw="flex items-center justify-between">
                <div tw="flex justify-start lg:w-0 lg:flex-1">
                  <Link href="/" passHref>
                    <a>
                      <span tw="text-lg font-bold text-gray-600 hover:text-gray-900">Croixxant.me</span>
                    </a>
                  </Link>
                </div>
                <div tw="-mr-2">
                  <button
                    type="button"
                    tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span tw="sr-only">Close menu</span>
                    <X />
                  </button>
                </div>
              </div>
              <div tw="mt-6">
                <div tw="grid gap-2 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                  <Link href="/articles" passHref>
                    <a tw="w-full flex px-4 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50">Articles</a>
                  </Link>
                  <Link href="/scraps" passHref>
                    <a tw="w-full flex px-4 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50">Scraps</a>
                  </Link>
                </div>
              </div>
            </div>
            <div tw="py-4 px-5">
              <div tw="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  tw="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-gray-100 hover:bg-gray-200"
                  href="https://github.com/croixxant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub height="20" width="20" />
                  <span tw="ml-1">GitHub</span>
                </a>
                <a
                  tw="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white background-color[#1DA1F2] hover:background-color[#1a90d9]"
                  href="https://twitter.com/croixxxant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter height="20" width="20" />
                  <span tw="ml-2">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default Header
