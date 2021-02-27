import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import { css } from '@emotion/css'
import tw from 'twin.macro'
import GitHubSVG from './svg/github'
import TwitterSVG from './svg/twitter'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div tw="relative bg-white border-b-2 border-gray-100">
      <div tw="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div tw="flex justify-between items-center md:justify-start md:space-x-10">
          <div tw="flex justify-start">
            <a href="/">
              <span tw="text-lg font-bold text-gray-600 hover:text-gray-900">Croixxant.me</span>
            </a>
          </div>
          <div tw="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span tw="sr-only">Open menu</span>
              <svg tw="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav tw="hidden md:flex space-x-10">
            <a href="#" tw="text-base font-medium text-gray-500 hover:text-gray-900">
              Articles
            </a>
            <a href="#" tw="text-base font-medium text-gray-500 hover:text-gray-900">
              Scraps
            </a>
          </nav>
          <div tw="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              tw="ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-gray-100 hover:bg-gray-200"
              href="https://github.com/croixxant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubSVG height="20" width="20" />
              <span tw="ml-1">GitHub</span>
            </a>
            <a
              tw="ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white background-color[#1DA1F2] hover:background-color[#1a90d9]"
              href="https://twitter.com/croixxxant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterSVG height="20" width="20" />
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
        <div tw="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div tw="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div tw="pt-5 pb-6 px-5">
              <div tw="flex items-center justify-between">
                <div tw="flex justify-start lg:w-0 lg:flex-1">
                  <a href="/">
                    <span tw="">Croixxant.me</span>
                  </a>
                </div>
                <div tw="-mr-2">
                  <button
                    type="button"
                    tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span tw="sr-only">Close menu</span>
                    <svg
                      tw="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div tw="py-4 px-5 space-y-6">
              <div>
                <a href="#" tw="w-full flex px-4 py-2 text-base font-medium text-gray-900 hover:text-gray-700">
                  Articles
                </a>
                <a href="#" tw="w-full flex px-4 py-2 text-base font-medium text-gray-900 hover:text-gray-700">
                  Scraps
                </a>
              </div>
              <div tw="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  tw="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  tw="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Github
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
